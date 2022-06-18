from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.core import serializers

from .models import Event, CustomUser
from .utils import random_string

import json


def getEvents(request):
    events = serializers.serialize("json", Event.objects.all())
    data = {"events": events}
    res = JsonResponse(data)
    res['Access-Control-Allow-Origin'] = '*'

    return res


@api_view(['POST'])
@csrf_exempt
def register(request):
    if(request.method == "POST"):
        body = request.body.decode('utf-8')  # body in string format
        body = body.replace("\'", "\"")
        body_data = json.loads(body)
        poetry = False
        article = False
        quiz = False

        if(body_data['poetry'] == "True"):
            poetry = True
        if(body_data['article'] == "True"):
            article = True
        if(body_data['quiz'] == "True"):
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

        content = {'code': str(code)}

        res = Response(content, status=status.HTTP_201_CREATED)
        res['Access-Control-Allow-Origin'] = '*'

        return res
