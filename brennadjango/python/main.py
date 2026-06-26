import time

from playwright.async_api import async_playwright
from playwright.sync_api import sync_playwright
from .TestCoordinator import TestCoordinator
from asyncio import sleep as sleep

async def RunSuite(instructions):
    async with async_playwright() as p:
        tc = TestCoordinator()
        await tc.init(p)
        await sleep(5)
        async for step in instructions:
            await tc.chooseAction(step)
            await sleep(5)

        await sleep(10)
        await tc.close()
        print("Got to the end")