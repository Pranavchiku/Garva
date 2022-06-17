from django.http import JsonResponse
from django.shortcuts import render
from .models import *
from django.core import serializers
# Create your views here.
    
def modelAPI(request):
    events = serializers.serialize("json", Event.objects.all())
    data = {"events": events}
    return JsonResponse(data)