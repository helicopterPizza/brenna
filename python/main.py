import time

from playwright.async_api import async_playwright
from playwright.sync_api import sync_playwright
from python.TestCoordinator import TestCoordinator

async def RunSuite(instructions):
    async with async_playwright() as p:
        tc = TestCoordinator()
        await tc.init(p)
        time.sleep(5)
        async for step in instructions:
            await tc.chooseAction(step)
            time.sleep(5)

        time.sleep(10)
        tc.close()
        print("Got to the end")