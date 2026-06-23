from . import actions as actions
from . import assertions as assertions

class TestCoordinator():

    async def init(self, p):
        self.browserInst, self.page = await actions.launch(p, 0, "https://en.wikipedia.org/wiki/Flower")

    async def chooseAction(self, step):
        if step.action == "click":
            await actions.clickElement(self.buildLocStr(step), self.page)
        if step.action == "type":
            await actions.typeString(self.buildLocStr(step), self.page, step.action_val)
        if step.action == "press":
            await actions.pressKey(self.page, step.action_val)
        if step.action == "hold":
            await actions.holdKey(self.page, step.action_val)
        if step.action == "release":
            await actions.releaseKey(self.page, step.action_val)
        if step.action == "assert":
            await assertions.checkVisible(self.buildLocStr(step), self.page)

    def buildLocStr(self, step):
        return('css=[' + step.locator + '=\"' + step.locator_val + '\"]')

    async def close(self):
        self.browserInst.close()
