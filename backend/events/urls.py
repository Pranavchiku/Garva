from django.contrib import admin
from django.urls import path
from events import views,getEvents
urlpatterns = [
    path('get/', getEvents.modelAPI, name="events"),
]