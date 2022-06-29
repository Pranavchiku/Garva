from django.db import models


class MainEvent(models.Model):
    countdownTimerTargetDate = models.DateTimeField()

    def __str__(self):
        return str(self.countdownTimerTargetDate)


class Event(models.Model):
    eventName = models.CharField(max_length=100)
    eventDescription = models.CharField(max_length=10000)
    eventCoverImg = models.ImageField(upload_to="eventImage", blank=True)
    eventRulebookLink = models.CharField(max_length=10000)
    eventSociety = models.CharField(max_length=1000)
    eventPocName = models.CharField(max_length=100)
    eventPocContactNumber = models.IntegerField(default=None)
    eventStartDate = models.DateTimeField(default=None)
    eventEndDate = models.DateTimeField(default=None)
    eventPrize = models.IntegerField(default=None)
    eventPlatformLink = models.CharField(max_length=1000)

    def __str__(self):
        return self.eventName


class CustomUser(models.Model):
    userName = models.CharField(max_length=1000)
    userEmail = models.CharField(max_length=1000, unique=True)
    userContact = models.CharField(max_length=100)
    userCollegeName = models.CharField(max_length=1000)
    poetry = models.BooleanField(default=False)
    article = models.BooleanField(default=False)
    quiz = models.BooleanField(default=False)
    code = models.CharField(max_length=10, unique=True)
    poetrySubmission = models.FileField(
        upload_to='submissions/poetry', null=True, blank=True)
    articleSubmission = models.FileField(
        upload_to='submissions/article', null=True, blank=True)
    poetrySubmitted = models.BooleanField(default=False)
    articleSubmitted = models.BooleanField(default=False)

    def __str__(self):
        return self.userName
