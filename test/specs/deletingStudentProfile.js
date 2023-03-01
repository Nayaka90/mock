import AdminDashBoard from "../pageobjects/AdminDashBoard.page.js"
import AllStudentPage from "../pageobjects/AllStudent.page.js"
import LoginPage from "../pageobjects/Login.Page.js"

describe('Admin activities', async () => {
    const studname = `mohan`
    const grade = 'Grade 1'
    it('Launching browser and passing url', async () => {
        await LoginPage.launchBrowser()
        expect(browser).toHaveUrlContaining("login")
    })
    it('adding student profile', async () => {
        await LoginPage.Login("admin@gmail.com", "12345")
        expect(browser).toHaveUrlContaining("dashboard")
    })


    it(`leave student  in all student module`, async () => {
        await AdminDashBoard.clickOnAllStudent_Link()
        await AllStudentPage.leaveStudent(studname,grade)
        const confrm = await (await browser.$(`#leave_Success`)).$(`strong*=Success`)
        expect(confrm).toBeDisplayed()
    })
})













