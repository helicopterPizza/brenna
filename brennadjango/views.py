from imaplib import Commands
from logging import exception

from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json
import threading

from typing_extensions import runtime

from python.main import RunSuite
from asgiref.sync import sync_to_async
import asyncio

from django_bulk_update.manager import BulkUpdateManager

# Create your views here.

from .models import Command
from .models import Set
from .serializers import serialize_commands, serialize_sets
from django.http import JsonResponse

objects = BulkUpdateManager()

# --Command functions--
@csrf_exempt
def FetchCommand(request):
    json_body = json.loads(request.body.decode('utf-8'))
    command = Command.objects.filter(set_id=json_body['set_id'])
    return JsonResponse(serialize_commands(command), safe=False)

@csrf_exempt
def FetchAllCommands(request):
    commands = Command.objects.all()
    return JsonResponse(serialize_commands(commands), safe=False)

@csrf_exempt
def CreateCommand(request):
    json_body = json.loads(request.body.decode('utf-8'))
    command = Command(set_id=json_body['set_id'], step_id=json_body['step_id'], action=json_body['action'], locator=json_body['locator'], locator_val=json_body['locator_val'])
    command.save()

    return JsonResponse(str(json_body), safe=False)

# --Set functions--
@csrf_exempt
def FetchSet(request):
    json_body = json.loads(request.body.decode('utf-8'))
    dset = Set.objects.filter(id=json_body['set_id'])
    return JsonResponse(serialize_sets(dset), safe=False)

@csrf_exempt
def FetchAllSets(request):
    sets = Set.objects.all()
    return JsonResponse(serialize_sets(sets), safe=False)

@csrf_exempt
def CreateSet(request):
    json_body = json.loads(request.body.decode('utf-8'))
    set = Set(name=json_body['name'], description=json_body['description'], url=json_body['url'])
    set.save()

    return JsonResponse(str(json_body), safe=False)

@csrf_exempt
def ModifySet(request):
    json_body = json.loads(request.body.decode('utf-8'))
    Set.objects.filter(id=json_body['id']).update(name=json_body['name'], description=json_body['description'], url=json_body['url'])

    return JsonResponse(str(json_body), safe=False)

@csrf_exempt
def ReorderCommands(request):
    json_body = json.loads(request.body.decode('utf-8'))
    set_id = json_body['set_id']
    #commands = Command.objects.filter(set_id=json_body['set_id'])
    for command in json_body['commands'][0]:
        Command.objects.filter(id=command['id']).update(set_id=command['set_id'], step_id=command['step_id'], action=command['action'], locator=command['locator'], locator_val=command['locator_val'], action_val=command['action_val'])
        #return JsonResponse(str(type(blal)), safe=False)
    #command.delete()
    #Command.objects.bulk_create()
    commands = Command.objects.filter(set_id=json_body['set_id'])
    return JsonResponse(json_body['commands'][0], safe=False)

@sync_to_async
def bla(commands):
    RunSuite(commands).start()

@csrf_exempt
async def ExecuteSet(request):
    json_body = json.loads(request.body.decode('utf-8'))
    commands = Command.objects.filter(setUid=json_body['set_id'])
    await RunSuite(commands)
    #t = threading.Thread(target=RunSuite, args=[commands])
    #t.start()
    return JsonResponse(str(json_body), safe=False)



