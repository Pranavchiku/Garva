from django.urls import path
from .views import getCountdownTimerTargetDate, getEvents, register, SubmissionView

urlpatterns = [
    path('get/', getEvents, name="events"),
    path('register/', register, name="register"),
    path('submit/', SubmissionView.as_view(), name="submit"),
    path('targetdate/', getCountdownTimerTargetDate,
         name="getCountdownTimerTargetDate"),
]
