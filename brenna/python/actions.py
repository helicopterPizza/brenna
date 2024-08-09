from playwright.sync_api import sync_playwright
#from playwright.sync_api import Page, expect

class Browsers():
    CHROME = 0
    FIREFOX = 1


def launch(p, browser, url):
    if browser == Browsers.CHROME:
        browserInst = p.chromium.launch(headless=False)
    if browser == Browsers.FIREFOX:
        browserInst = p.firefox.launch(headless=False)

    page = browserInst.new_page()
    page.goto(url)

    return browserInst, page

def clickElementByText(text, page):
    page.get_by_text(text).click(force=True)
