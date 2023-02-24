
describe('Admin activities',async () => {
    const studname =`mohan` 
   const  grade='Grade 1'
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

    it(`leave student  in all student module`,async()=>{
        await browser.$(`//span[text()='Student']`).click()
        await browser.$(`aria/All Student`).click()
        expect(browser).toHaveUrlContaining("all_student")
        await (await browser.$(`#grade`)).selectByVisibleText(grade)
        await (await browser.$(`button*=Submit`)).waitForClickable()
        await (await browser.$(`button*=Submit`)).click()
        await (await browser.$(`//input[@type='search']`)).setValue(`${studname}`)
        for(let i=0;i<30;i++){   
    var el=(await (await (await browser.$(`a*=${studname}`)).parentElement()).parentElement())
    const ele=await el.$(`*=Leave`)
        await ele.waitForClickable()
        await ele.click()
        await (await browser.$(`//*[@id="deleteConfirm"]//a[.='Yes']`)).waitForClickable()
        await (await browser.$(`//*[@id="deleteConfirm"]//a[.='Yes']`)).click()
        const confrm=await (await browser.$(`#leave_Success`)).$(`strong*=Success`)
        await confrm.waitForDisplayed()
        const rs=await confrm.isDisplayed()
        expect(rs).toBe(true)
        }
        })
    })













