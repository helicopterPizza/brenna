from playwright.sync_api import expect

def checkVisible(locator, page):
    locator = page.locator(locator).nth(0)
    expect(locator).to_be_visible()