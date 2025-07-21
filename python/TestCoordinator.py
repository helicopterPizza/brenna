import python.actions as actions
import python.assertions as assertions

class TestCoordinator():

    async def init(self, p):
        self.browserInst, self.page = await actions.launch(p, 0, "https://en.wikipedia.org/wiki/Flower")

    async def chooseAction(self, step):
        if step.action == "click":
            await actions.clickElement(self.buildLocStr(step), self.page)
        if step.action == "assert":
            await assertions.checkVisible(self.buildLocStr(step), self.page)

    def buildLocStr(self, step):
        return('css=[' + step.locator + '=\"' + step.locatorVal + '\"]')

    async def close(self):
        self.browserInst.close()
