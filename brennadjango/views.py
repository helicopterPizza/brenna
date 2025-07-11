from imaplib import Commands

from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json
import threading

from typing_extensions import runtime

from python.main import RunSuite
from asgiref.sync import sync_to_async
import asyncio


# Create your views here.

from .models import Command
from .models import Set
from .serializers import serialize_commands, serialize_sets
from django.http import JsonResponse

# --Command functions--
@csrf_exempt
def FetchCommand(request):
    json_body = json.loads(request.body.decode('utf-8'))
    command = Command.objects.filter(setUid=json_body['setUid'])
    return JsonResponse(serialize_commands(command), safe=False)

@csrf_exempt
def FetchAllCommands(request):
    commands = Command.objects.all()
    return JsonResponse(serialize_commands(commands), safe=False)

@csrf_exempt
def CreateCommand(request):
    json_body = json.loads(request.body.decode('utf-8'))
    command = Command(uid=json_body['uid'], stepID=json_body['stepID'], action=json_body['action'], locator=json_body['locator'], locatorVal=json_body['locatorVal'])
    command.save()

    return JsonResponse(str(json_body), safe=False)

# --Set functions--
@csrf_exempt
def FetchSet(request):
    json_body = json.loads(request.body.decode('utf-8'))
    set = Set.objects.filter(uid=json_body['uid'])
    return JsonResponse(serialize_sets(set), safe=False)

@csrf_exempt
def FetchAllSets(request):
    sets = Set.objects.all()
    return JsonResponse(serialize_sets(sets), safe=False)

@csrf_exempt
def CreateSet(request):
    json_body = json.loads(request.body.decode('utf-8'))
    set = Set(uid=json_body['uid'], name=json_body['name'], description=json_body['description'], url=json_body['url'])
    set.save()

    return JsonResponse(str(json_body), safe=False)

@csrf_exempt
def ModifySet(request):
    json_body = json.loads(request.body.decode('utf-8'))
    Set.objects.filter(uid=json_body['uid']).update(name=json_body['name'], description=json_body['description'], url=json_body['url'])

    return JsonResponse(str(json_body), safe=False)

@sync_to_async
def bla(commands):
    RunSuite(commands).start()

@csrf_exempt
async def ExecuteSet(request):
    json_body = json.loads(request.body.decode('utf-8'))
    commands = Command.objects.filter(setUid=json_body['setUid'])
    await RunSuite(commands)
    #t = threading.Thread(target=RunSuite, args=[commands])
    #t.start()
    return JsonResponse(str(json_body), safe=False)



