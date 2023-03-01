import AddTeacherpage from "../pageobjects/AddTeacher.page.js"
import AdminDashBoard from "../pageobjects/AdminDashBoard.page.js"
import AllTeacher from "../pageobjects/AllTeacher.page.js"
import LoginPage  from "../pageobjects/Login.Page.js"

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

    it(`adding teacher profile`, async () => {
        await AdminDashBoard.clickOnAddTeacher_Link()
        expect(browser).toHaveUrlContaining("teacher")
        await AddTeacherpage.addTeacherProfile(fullname)
        const confm = await AddTeacherpage.cnfm_Pop
        expect(confm).toBeDisplayed()
    })

    it(`verifying teacher profile in all teacher module`, async () => {
        await AdminDashBoard.clickOnAllTeacher_Link()
        expect(browser).toHaveUrlContaining("all_teacher")
        await AllTeacher.search_Input.setValue(`${fullname}`)
        const techerslist = await browser.$(`a=${fullname}`)
        expect(techerslist).toBeDisplayed()
    })
})













