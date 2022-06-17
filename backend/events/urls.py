from django.contrib import admin
from django.urls import path
from events import views,getEvents,registerUser
urlpatterns = [
    path('get/', getEvents.modelAPI, name="events"),
    path('register/',registerUser.register, name="register"),
]