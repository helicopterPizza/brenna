import time
from playwright.sync_api import sync_playwright
from TestCoordinator import TestCoordinator

'''action = {
    "action": "click",
    "selectorType": "text",
    "selectorContent": "Privacy"
}'''

action = {
    "action": "assert",
    "locator": "class",
    "locatorVal": "user-links-collapsible-item mw-list-item user-links-collapsible-item"
}
instruct = {}
instruct[0] = action
action = {
    "action": "click",
    "locator": "class",
    "locatorVal": "user-links-collapsible-item mw-list-item user-links-collapsible-item"
}
instruct[1] = action
def RunSuite(instructions):
    with sync_playwright() as p:

        tc = TestCoordinator(p)
        time.sleep(5)
        for step in range(len(instructions)):
            tc.chooseAction(instructions[step])
            time.sleep(5)

        time.sleep(10)
        tc.close()

RunSuite(instruct)