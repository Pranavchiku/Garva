from rest_framework import views
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import FileUploadParser, MultiPartParser
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.core import serializers

from .models import Event, CustomUser
from .utils import random_string

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
    poetry = False
    article = False
    quiz = False

    if(body_data['poetry'] == "true"):
        poetry = True
    if(body_data['article'] == "true"):
        article = True
    if(body_data['quiz'] == "true"):
        quiz = True

    code = random_string(3, 4)

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
            if user.poetrySubmitted:
                return Response(status=status.HTTP_400_BAD_REQUEST, headers={
                    'Access-Control-Allow-Origin': '*'})
            else:
                user.poetrySubmitted = True
                user.poetrySubmission = file
                user.save()
                return Response(status=status.HTTP_200_OK, headers={
                    'Access-Control-Allow-Origin': '*'})
        elif event == "article":
            if user.articleSubmitted:
                return Response(status=status.HTTP_400_BAD_REQUEST, headers={
                    'Access-Control-Allow-Origin': '*'})
            else:
                user.articleSubmitted = True
                user.articleSubmission = file
                user.save()
                return Response(status=status.HTTP_200_OK, headers={
                    'Access-Control-Allow-Origin': '*'})
