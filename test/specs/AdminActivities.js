
describe('Admin activities',async () => {
    var r=Math.random()
    var random=Math.floor(r*(99-1)+1)
    const fullname=`NITHISH_yb${random}`
    it('Launching browser and passing url', async () => {
        
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Student_Management_System/view/login.php")
        await expect(browser).toHaveTitleContaining("Student")
    }) 
    it('login as a admin',async()=>{
        await browser.$(`[name='email']`).setValue("admin@gmail.com")
        await browser.$(`[name='password']`).setValue("12345")
        await browser.$(`#btnSubmit`).waitForClickable()
        await browser.$(`#btnSubmit`).click()
    })
 
    it(`adding teacher profile`,async()=>{
    await browser.$(`//span[text()='Teacher']`).click()
    await browser.$(`a*= Add Teacher`).click()
    await browser.$(`#index_number`).addValue(`TY150`)
    await browser.$(`#full_name`).addValue(`NITHISH`)
    await browser.$(`#i_name`).addValue(fullname)
    await browser.$(`#address`).addValue(`Jp nagar`)
    await browser.$('#gender').selectByVisibleText('Male')
    await browser.$(`#phone`).addValue(`948-019-6004`)
    await browser.$(`#email`).addValue(`${fullname}@gmail.com`)
    const remotePath=await browser.uploadFile(`C:/Users/navee/OneDrive/Desktop/WDIO/s.png`)
    await browser.$(`#fileToUpload`).setValue(remotePath)
    await browser.$(`#btnSubmit`).waitForClickable()
    await browser.$(`#btnSubmit`).click() 
    const rs= await browser.$(`//strong[.='Success!']`).isDisplayed()
    expect(rs).toBe(true)
    })

    it(`verifying teacher profile in all teacher module`,async()=>{
        await browser.$(`//span[text()='Teacher']`).click()
        await browser.$(`aria/All Teacher`).click()
        await (await browser.$(`//input[@type='search']`)).setValue(`${fullname}`)
        const rs= await browser.$(`a=${fullname}`).isDisplayed()
        expect(rs).toBe(true)
        })

    it(`deleting teacher profile in all teacher module`,async()=>{
        await browser.$(`//input[@type='search']`).setValue(`Nithish`)
        var ele=await browser.$(`a*=NITHISH`)
        await ele.waitForClickable()
        await ele.click()
        await browser.$(`#id_Delete`).waitForClickable()
        await browser.$(`#id_Delete`).click()
        await browser.$(`#btnYes`).waitForClickable()
        await browser.$(`#btnYes`).click()
        const rs=await browser.$(`#delete_Success`).isDisplayed()
        expect(rs).toBe(true)
        })
    })













