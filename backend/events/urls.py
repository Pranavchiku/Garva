from django.urls import path
from .views import getEvents, register

urlpatterns = [
    path('get/', getEvents, name="events"),
    path('register/', register, name="register"),
]
