from django.contrib import admin
from .models import MainEvent, Event, CustomUser


admin.site.register(MainEvent)
admin.site.register(Event)
admin.site.register(CustomUser)
