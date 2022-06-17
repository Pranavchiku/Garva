from django.db import models
from pytz import timezone

# Create your models here.

class Event(models.Model):
    eventName=models.CharField(max_length=100)
    eventDescription=models.CharField(max_length=10000)
    eventCoverImg=models.ImageField(upload_to="eventImage",blank=True)
    eventRulebookLink=models.CharField(max_length=10000)
    eventSociety=models.CharField(max_length=1000)
    eventPocName=models.CharField(max_length=100)
    eventPocContactNumber=models.IntegerField(default=None)
    eventStartDate=models.DateTimeField(default=None)
    eventEndDate=models.DateTimeField(default=None)
    eventPrize=models.IntegerField(default=None)
    eventPlatformLink=models.CharField(max_length=1000)

    def __str__(self):
        return self.eventName


