import time

from playwright.sync_api import sync_playwright
import actions as actions

with sync_playwright() as p:
    browserInst, page = actions.launch(p, 0, "https://www.google.ca")
    actions.clickElementByText("Privacy", page)

    browserInst.close()