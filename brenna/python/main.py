import time
from playwright.sync_api import sync_playwright
from TestCoordinator import TestCoordinator

action = {
    "action": "click",
    "selectorType": "text",
    "selectorContent": "Privacy"
}
instruct = {}
instruct[0] = action
action = {
    "action": "click",
    "selectorType": "text",
    "selectorContent": "Privacy"
}
instruct[1] = action
def RunSuite(instructions):
    with sync_playwright() as p:

        tc = TestCoordinator(p)
        for step in range(len(instructions)):
            tc.chooseAction(instructions[step])
            time.sleep(5)

        time.sleep(10)
        tc.close()

RunSuite(instruct)