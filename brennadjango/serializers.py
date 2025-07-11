from .models import Command
from typing import Iterable, List, Dict, Any

def serialize_commands(commands):
    data = []
    for command in commands:
        data.append({
            'uid': command.uid,
            'setUid': command.setUid,
            'stepID': command.stepID,
            'action': command.action,
            'locator': command.locator,
            'locatorVal': command.locatorVal,
            'actionVal': command.actionVal,
        })
    return data

def serialize_sets(sets):
    data = []
    for set in sets:
        data.append({
            'uid': set.uid,
            'name': set.name,
            'description': set.description,
            'url': set.url,
        })
    return data