import { expect } from "chai"
import AddStudentPage from "../pageobjects/AddStudent.Page.js"
import AdminDashBoard from "../pageobjects/AdminDashBoard.page.js"
import LoginPage from "../pageobjects/Login.Page.js"

describe("Admin Activities adding Student", async function () {
    // this.retries(3)
    it('Launching browser and passing url', async () => {
        await LoginPage.launchBrowser()
        //expect(browser).toHaveUrlContaining("login")
        expect(await browser.getUrl()).to.contains("login")

    })
    it('adding student profile', async () => {
        await LoginPage.Login("admin@gmail.com", "12345")
        //expect(browser).toHaveUrlContaining("dashboard")
        expect(await browser.getUrl()).to.contains("dashboard")
    })

    it('adding student and guardian details', async () => {
        await AdminDashBoard.clickOnAddStudent_Link()
        // expect(browser).toHaveUrlContaining("student")
        expect(await browser.getUrl()).to.contains("student")
        await AddStudentPage.AddStudentandguadrdian_Details()
    })

    it('selecting subject details', async () => {
        expect(await browser.getUrl()).to.contains("student")
        await AddStudentPage.selectingGradeandsubandPayment();
    })

    it('Handling print _Popups', async () => {
        await browser.waitUntil(async () => (await browser.getWindowHandles()).length > 1)
        const wh = await browser.getWindowHandles()
        await browser.switchToWindow(wh[1])
        const ele = await browser.$('body > print-preview-app').shadow$('#sidebar').shadow$("print-preview-button-strip").shadow$("div > cr-button.cancel-button")
        await ele.click()
        await browser.switchToWindow(wh[0])
        const pop = (await AddStudentPage.cnfrm__Pop)
        await pop.waitForDisplayed({ timeoutMsg: "confirm popup not displayed" })
    })

})