import { expect } from "chai"
import AdminDashBoard from "../pageobjects/AdminDashBoard.page.js"
import AllTeacher from "../pageobjects/AllTeacher.page.js"
import { default as LoginPage } from "../pageobjects/Login.Page.js"

describe('Admin activities deleting Teacher', async function()  {
    // this.retries(3)
    let name='NITHISH'
    it('Launching browser and passing url', async () => {
        await LoginPage.launchBrowser()
        //expect(browser).toHaveUrlContaining("login")
        expect(await browser.getUrl()).to.contains("login")      
    })
    it('login as a admin', async function (){
        // this.retries(3)
        await LoginPage.Login('admin@gmail.com', '12345')
        //expect(browser).toHaveUrlContaining("dashboard")
        expect(await browser.getUrl()).to.contains("dashboard")

    })

    it(`deleting teacher profile in all teacher module`, async () => {
        await AdminDashBoard.clickOnAllTeacher_Link()
       // expect(browser).toHaveUrlContaining("all_teacher")
        expect(await browser.getUrl()).to.contains("all_teacher")
        await AllTeacher.search_Input.setValue(`${name}`)
        var ele = await browser.$(`a*=${name}`)
        await ele.waitForClickable()
        await ele.click()
        await AllTeacher.deleteTeacherprofile()
       // expect(await AllTeacher.success_Popup).toBeDisplayed()
       await (await AllTeacher.success_Popup).waitForDisplayed({timeoutMsg:"confirm popup not displayed"})
    })
})















