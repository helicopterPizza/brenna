import actions as actions
class TestCoordinator():

    def __init__(self, p):
        self.browserInst, self.page = actions.launch(p, 0, "https://www.google.ca")
    def chooseAction(self, step):
        if step["action"] == "click":
            print(type(step))
            self.click(step)

    def click(self, step):
        if step["selectorType"] == "text":
            actions.clickElementByText(step["selectorContent"], self.page)

    def close(self):
        self.browserInst.close()
