import actions as actions
import assertions as assertions
class TestCoordinator():

    def __init__(self, p):
        self.browserInst, self.page = actions.launch(p, 0, "https://en.wikipedia.org/wiki/Flower")
    def chooseAction(self, step):
        if step["action"] == "click":
            actions.clickElement(self.buildLocStr(step), self.page)
        if step["action"] == "assert":
            assertions.checkVisible(self.buildLocStr(step), self.page)

    def buildLocStr(self, step):
        return('css=[' + step["locator"] + '=\"' + step["locatorVal"] + '\"]')

    def close(self):
        self.browserInst.close()
