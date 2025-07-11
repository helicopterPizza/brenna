from django.db import models

# Create your models here.

class Command(models.Model):
    uid = models.CharField(max_length=36, default=0)
    setUid = models.CharField(max_length=36, default=0)
    stepID = models.IntegerField(default=0)
    action = models.CharField(max_length=20)
    locator = models.CharField(max_length=200)
    locatorVal = models.CharField(max_length=200)
    actionVal = models.CharField(max_length=200)

class Set(models.Model):
    uid = models.CharField(max_length=36, default=0)
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=1000)
    url = models.CharField(max_length=200)