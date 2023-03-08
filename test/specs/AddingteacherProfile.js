import { expect } from "chai"
import AddTeacherpage from "../pageobjects/AddTeacher.page.js"
import AdminDashBoard from "../pageobjects/AdminDashBoard.page.js"
import AllTeacher from "../pageobjects/AllTeacher.page.js"
import LoginPage  from "../pageobjects/Login.Page.js"

describe('Admin activities adding Teacher', async function()  {
    // this.retries(3)
    var r = Math.random()
    var random = Math.floor(r * (99 - 1) + 1)
    const fullname = `NITHISH_yb${random}`

    it('Launching browser and passing url', async () => {
        await LoginPage.launchBrowser()
       // expect(browser).toHaveUrlContaining("login")
        expect(await browser.getUrl()).to.contains("login")
    })
    it('login as a admin', async () => {
        await LoginPage.Login('admin@gmail.com', '12345')
       // expect(browser).toHaveUrlContaining("dashboard")
        expect(await browser.getUrl()).to.contains("dashboard")
    })

    it(`adding teacher profile`, async () => {
        await AdminDashBoard.clickOnAddTeacher_Link()
        //expect(browser).toHaveUrlContaining("teacher")
        expect(await browser.getUrl()).to.contains("teacher")
        
        await AddTeacherpage.addTeacherProfile(fullname)
        const confm = await AddTeacherpage.cnfm_Pop
        //expect(confm).toBeDisplayed()
        await confm.waitForDisplayed({timeoutMsg:"confirm popup not displayed"})
        
    })

    it(`verifying teacher profile in all teacher module`, async () => {
        await AdminDashBoard.clickOnAllTeacher_Link()
       // expect(browser).toHaveUrlContaining("all_teacher")
        expect(await browser.getUrl()).to.contains("all_teacher")
        await AllTeacher.search_Input.setValue(`${fullname}`)
        const techerslist = await browser.$(`a=${fullname}`)
        //expect(techerslist).toBeDisplayed()
        techerslist.waitForDisplayed({timeoutMsg:"teachername not in the list"})
    })
})













