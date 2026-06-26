from playwright.async_api import async_playwright

class Browsers():
    CHROME = 0
    FIREFOX = 1


async def launch(p, browser, url):
    if browser == Browsers.CHROME:
        browserInst = await p.chromium.launch(headless=False)
    if browser == Browsers.FIREFOX:
        browserInst = await p.firefox.launch(headless=False)

    page = await browserInst.new_page()
    await page.goto(url)

    return browserInst, page

async def clickElement(locator_string, page):
    locator = page.locator(locator_string).nth(0)
    await locator.click(force=True)

async def typeString(locator_string, page, text):
    locator = page.locator(locator_string).nth(0)
    await locator.click(force=True)
    await page.keyboard.type(text)

async def pressKey(page, key):
    await page.keyboard.press(key)

async def holdKey(page, key):
    await page.keyboard.down(key)

async def releaseKey(page, key):
    await page.keyboard.up(key)