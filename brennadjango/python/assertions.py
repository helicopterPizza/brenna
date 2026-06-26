from playwright.async_api import expect

async def checkVisible(locator_string, page):
    locator = page.locator(locator_string).nth(0)
    await expect(locator).to_be_visible()