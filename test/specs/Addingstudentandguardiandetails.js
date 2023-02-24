import {Key} from 'webdriverio'
describe("Teacher Activities",async()=>{
let r= Math.random()
let random=Math.floor(r*(999-1)+1)
 const s_name="mohannayak"
 const g_name="bhagya"
 const g_email=g_name+random+'@gmail.com'
 const s_email=s_name+random+'@gmail.com'
    it('Launching browser and passing url', async () => {
        
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Student_Management_System/view/login.php")
        expect(browser).toHaveUrlContaining("login")
    }) 
    it('adding student profile',async()=>{
        await browser.$(`[name='email']`).setValue("admin@gmail.com")
        await browser.$(`[name='password']`).setValue("12345")
        await browser.$(`#btnSubmit`).waitForClickable()
        await browser.$(`#btnSubmit`).click()
        expect(browser).toHaveUrlContaining("dashboard")
    })
    it('adding student and guardian details',async()=>{
        await browser.$(`span=Student`).click()
        await browser.$(`a*= Add Student`).click()
        expect(browser).toHaveUrlContaining("student")
        await browser.$(`#index_number`).addValue(random)
        await browser.$(`#full_name`).addValue(s_name)
        await browser.$(`#i_name`).addValue(s_name+' yb')
        await browser.$(`#address`).addValue('JP nagar')
        await browser.$(`#email`).addValue(s_email)
        await browser.$(`#phone`).addValue('111-111-1111')
        await browser.$(`#b_date`).addValue('03/12/1997')
        await browser.$(`#gender`).selectByVisibleText('Male')
        const localpath=await browser.uploadFile(`s.png`)
        await browser.$(`#fileToUpload`).setValue(localpath)

        const index=await browser.$(`#g_index`).getValue()
        expect(index).toEqual('G-'+random)
        await browser.$(`#g_full_name`).addValue(g_name)
        await browser.$(`#g_i_name`).addValue(g_name+' b')
        await browser.$(`#g_address`).addValue('JP nagar')
        await browser.$(`#g_email`).addValue(g_email)
        await browser.$(`#g_phone`).addValue('111-111-1111')
        await browser.$(`#g_b_date`).addValue('03/12/1985')
        await browser.$(`#g_gender`).selectByVisibleText('Female')
        await browser.$(`#g_fileToUpload`).setValue(localpath)
        await browser.$(`#btnSubmit`).click()

    })
   
    
    it('selecting subject details',async()=>{
        await browser.$(`#grade`).selectByIndex(1)
        await browser.$(`#btnSubmit1`).waitForClickable()
        await browser.$(`//td[.='Subject 1']/..//input`).click()
        await browser.$(`#btnSubmit1`).waitForClickable()
        await browser.$(`#btnSubmit1`).click()
        await browser.$(`//button[text()='Paid']`).waitForClickable({timeouts:5000})
        await browser.$(`//button[text()='Paid']`).click()
    })

    it('Handling print popups',async()=>{
        await browser.waitUntil(async ()=>(await browser.getWindowHandles()).length>1)
        const wh= await browser.getWindowHandles()
        await browser.switchToWindow(wh[1])
        const ele=await browser.$('body > print-preview-app').shadow$('#sidebar').shadow$("print-preview-button-strip").shadow$("div > cr-button.cancel-button")
        await ele.click()
        await browser.switchToWindow(wh[0])
        const pop= await browser.$(`//strong[.='Success!']`)
        await pop.waitForDisplayed()
        const rs= await pop.isDisplayed()
        expect(rs).toBe(true)   
    })
    
})