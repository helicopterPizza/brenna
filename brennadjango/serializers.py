from .models import Command
from typing import Iterable, List, Dict, Any

def serialize_commands(commands):
    data = []
    for command in commands:
        data.append({
            'uid': command.uid,
            'set_uid': command.setUid,
            'step_id': command.id,
            'action': command.action,
            'locator': command.locator,
            'locator_val': command.locatorVal,
            'action_val': command.actionVal,
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