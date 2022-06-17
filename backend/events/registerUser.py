import json
from django.http import JsonResponse
from django.shortcuts import render
from .models import *
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
import random
import string
# Create your views here.

# Returns a random alphanumeric string of length 'length'
def random_string(letter_count, digit_count):  
    str1 = ''.join((random.choice(string.ascii_letters) for x in range(letter_count)))  
    str1 += ''.join((random.choice(string.digits) for x in range(digit_count)))  
  
    sam_list = list(str1) # it converts the string to list.  
    random.shuffle(sam_list) # It uses a random.shuffle() function to shuffle the string.  
    final_string = ''.join(sam_list)  
    return final_string  

@api_view(('GET','POST'))
@csrf_exempt
def register(request):
    if(request.method=="POST"):
        body=request.body.decode('utf-8') #body in string format
        body = body.replace("\'", "\"")
        body_data=json.loads(body)
        poetry=False
        article=False
        quiz=False
        if(body_data['poetry']=="True"): poetry=True
        if(body_data['article']=="True"): article=True
        if(body_data['quiz']=="True"): quiz=True

        code=random_string(3,4)

        newUser=CustomUser.objects.create(
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
        return Response(content, status=status.HTTP_201_CREATED)

