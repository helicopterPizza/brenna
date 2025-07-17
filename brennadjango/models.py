from django.db import models

# Create your models here.

class Command(models.Model):
    uid = models.CharField(max_length=36, default=0)
    set_uid = models.CharField(max_length=36, default=0)
    step_id = models.IntegerField(default=0)
    action = models.CharField(max_length=20)
    locator = models.CharField(max_length=200)
    locator_val = models.CharField(max_length=200)
    action_val = models.CharField(max_length=200)

class Set(models.Model):
    uid = models.CharField(max_length=36, default=0)
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=1000)
    url = models.CharField(max_length=200)