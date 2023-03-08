import AdminDashBoard from "../pageobjects/AdminDashBoard.page.js"
import AllStudentPage from "../pageobjects/AllStudent.page.js"
import LoginPage from "../pageobjects/Login.Page.js"
import {expect} from 'chai'

describe('Admin activities deleting Student', async function()  {
    
    const studname = `mohan`
    const grade = 'Grade 1'
// this.retries(3)
    it('Launching browser and passing url', async () => {
        await LoginPage.launchBrowser()
        //expect(browser).toHaveUrlContaining("login")
        expect(await browser.getUrl()).to.contain("login")
    })
    it('login as a admin', async () => {
        await LoginPage.Login("admin@gmail.com", "12345")
        //expect(browser).toHaveUrlContaining("dashboard")
        expect(await browser.getUrl()).to.contains("dashboard")
    })


    it(`leave student  in all student module`, async () => {
        await AdminDashBoard.clickOnAllStudent_Link()
        await AllStudentPage.leaveStudent(studname,grade)
        const confrm = await (await browser.$(`#leave_Success`)).$(`strong*=Success`)
       // expect(confrm).toBeDisplayed()
       await confrm.waitForDisplayed({timeoutMsg:"confirm popup not displayed"})
    })
})













