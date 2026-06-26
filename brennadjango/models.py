from django.db import models

# Create your models here.

class Status():
    PENDING = 'PENDING'
    RUNNING = 'RUNNING'
    SUCCESS = 'SUCCESS'
    FAILED = 'FAILED'

class Command(models.Model):
    set_id = models.CharField(max_length=36, default=0)
    step_id = models.IntegerField(default=0)
    action = models.CharField(max_length=20)
    locator = models.CharField(max_length=200)
    locator_val = models.CharField(max_length=200)
    action_val = models.CharField(max_length=200)
    status = models.CharField(max_length=200, default=Status.PENDING)

class Set(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=1000)
    url = models.CharField(max_length=200)