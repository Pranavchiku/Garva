from rest_framework import views
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import FileUploadParser, MultiPartParser
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.core import serializers

from .models import Event, CustomUser
from .utils import random_string, sendCodeInEmail

import json


@api_view(['GET'])
def getEvents(request):
    events = serializers.serialize("json", Event.objects.all())
    data = {"events": events}
    res = JsonResponse(data)
    res['Access-Control-Allow-Origin'] = '*'

    return res


@api_view(['POST'])
@csrf_exempt
def register(request):
    body = request.body.decode('utf-8')  # body in string format
    body = body.replace("\'", "\"")
    body_data = json.loads(body)

    try:
        if CustomUser.objects.get(userEmail=body_data['userEmail']):
            return Response(json.dumps({"message": "This email is already registered."}), status=status.HTTP_400_BAD_REQUEST, headers={
                'Access-Control-Allow-Origin': '*'}, content_type='application/json')
    except CustomUser.DoesNotExist:
        pass

    poetry = False
    article = False
    quiz = False

    if(body_data['poetry'] == "true"):
        poetry = True
    if(body_data['article'] == "true"):
        article = True
    if(body_data['quiz'] == "true"):
        quiz = True

    if poetry or article:
        code = random_string(3, 4)

        try:
            sendCodeInEmail(body_data['userEmail'], code, poetry, article)
        except Exception:
            pass

    else:
        code = ""

    newUser = CustomUser.objects.create(
        userName=body_data['userName'],
        userEmail=body_data['userEmail'],
        userContact=body_data['userContact'],
        userCollegeName=body_data['userCollegeName'],
        poetry=poetry,
        quiz=quiz,
        article=article,
        code=code,
    )

    content = {
        "code": code
    }

    res = Response(json.dumps(content), status=status.HTTP_201_CREATED, headers={
        'Access-Control-Allow-Origin': '*'}, content_type="application/json")

    return res


class SubmissionView(views.APIView):
    parser_classes = [MultiPartParser, FileUploadParser]

    def post(self, request):
        file = request.data['submissionFile']
        code = request.data['submissionCode']
        event = request.data['event']
        user = CustomUser.objects.get(code=code)

        if event == "poetry":
            if user.poetry:
                if user.poetrySubmitted:
                    return Response(json.dumps({"code": "DUP", "message": "You have already made a submission for this event."}), status=status.HTTP_400_BAD_REQUEST, headers={
                        'Access-Control-Allow-Origin': '*'}, content_type='application/json')
                else:
                    user.poetrySubmitted = True
                    user.poetrySubmission = file
                    user.save()
                    return Response(status=status.HTTP_200_OK, headers={
                        'Access-Control-Allow-Origin': '*'})
            else:
                return Response(json.dumps({"code": "NR", "message": "You have not registered for this event."}), status=status.HTTP_400_BAD_REQUEST, headers={
                    'Access-Control-Allow-Origin': '*'}, content_type='application/json')
        elif event == "article":
            if user.article:
                if user.articleSubmitted:
                    return Response(json.dumps({"code": "DUP", "message": "You have already made a submission for this event."}), status=status.HTTP_400_BAD_REQUEST, headers={
                        'Access-Control-Allow-Origin': '*'}, content_type='application/json')
                else:
                    user.articleSubmitted = True
                    user.articleSubmission = file
                    user.save()
                    return Response(status=status.HTTP_200_OK, headers={
                        'Access-Control-Allow-Origin': '*'})
            else:
                return Response(json.dumps({"code": "NR", "message": "You have not registered for this event."}), status=status.HTTP_400_BAD_REQUEST, headers={
                    'Access-Control-Allow-Origin': '*'}, content_type='application/json')
