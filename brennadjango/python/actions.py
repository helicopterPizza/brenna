from playwright.sync_api import sync_playwright

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

async def clickElement(locator, page):
    locator = page.locator(locator).nth(0)
    await locator.click(force=True)
