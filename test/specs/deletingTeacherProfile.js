import AdminDashBoard from "../pageobjects/AdminDashBoard.page.js"
import AllTeacher from "../pageobjects/AllTeacher.page.js"
import { default as LoginPage } from "../pageobjects/Login.Page.js"

describe('Admin activities', async () => {
    var r = Math.random()
    var random = Math.floor(r * (99 - 1) + 1)
    const fullname = `NITHISH_yb${random}`
    it('Launching browser and passing url', async () => {
        await LoginPage.launchBrowser()
        expect(browser).toHaveUrlContaining("login")
    })
    it('login as a admin', async () => {
        await LoginPage.Login('admin@gmail.com', '12345')
        expect(browser).toHaveUrlContaining("dashboard")
    })

    it(`deleting teacher profile in all teacher module`, async () => {
        await AdminDashBoard.clickOnAllTeacher_Link()
        expect(browser).toHaveUrlContaining("all_teacher")
        await AllTeacher.search_Input.setValue(`Nithish`)
        var ele = await browser.$(`a*=NITHISH`)
        await ele.waitForClickable()
        await ele.click()
        await AllTeacher.deleteTeacherprofile()
        expect(await AllTeacher.success_Popup).toBeDisplayed()
    })
})













