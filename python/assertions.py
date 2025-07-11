from playwright.sync_api import expect

async def checkVisible(locator, page):
    locator = await page.locator(locator).nth(0)
    await expect(locator).to_be_visible()