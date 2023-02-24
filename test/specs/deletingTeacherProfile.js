
describe('Admin activities',async () => {
    const fullname =`NITHISH_yb` 
    it('Launching browser and passing url', async () => {
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Student_Management_System/view/login.php")
        expect(browser).toHaveUrlContaining("login")
    }) 
    it('login as a admin',async()=>{
        await browser.$(`[name='email']`).setValue("admin@gmail.com")
        await browser.$(`[name='password']`).setValue("12345")
        await browser.$(`#btnSubmit`).waitForClickable()
        await browser.$(`#btnSubmit`).click()
        expect(browser).toHaveUrlContaining("dashboard")
    })

    it(`deleting teacher profile in all teacher module`,async()=>{
        await browser.$(`//span[text()='Teacher']`).click()
        await browser.$(`aria/All Teacher`).click()
        expect(browser).toHaveUrlContaining("all_teacher")
        await browser.$(`//input[@type='search']`).setValue(`${fullname}`)
        var ele=await browser.$(`a*=${fullname}`)
        await ele.waitForClickable()
        await ele.click()
        await browser.$(`#id_Delete`).waitForClickable()
        await browser.$(`#id_Delete`).click()
        await browser.$(`#btnYes`).waitForClickable()
        await browser.$(`#btnYes`).click()
        await browser.waitUntil(()=> browser.$(`#delete_Success`).isDisplayed())
        const rs=await browser.$(`#delete_Success`).isDisplayed()
        expect(rs).toBe(true)
        })
    })













