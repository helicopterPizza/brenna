from .models import Command
from typing import Iterable, List, Dict, Any

def serialize_commands(commands):
    data = []
    for command in commands:
        data.append({
            'id': command.id,
            'set_id': command.set_id,
            'step_id': command.step_id,
            'action': command.action,
            'locator': command.locator,
            'locator_val': command.locator_val,
            'action_val': command.action_val,
        })
    return data

def serialize_sets(sets):
    data = []
    for set in sets:
        data.append({
            'id': set.id,
            'name': set.name,
            'description': set.description,
            'url': set.url,
        })
    return data