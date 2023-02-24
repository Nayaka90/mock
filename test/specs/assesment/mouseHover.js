describe("igp.com",async()=>{
    it("openbrowser and enter url",async()=>{
    await browser.maximizeWindow();
    await browser.url(`https://www.igp.com/`)
    expect(browser).toHaveTitleContaining("IGP")
   
    })
    it("selecting cakes for birthday occassion",async()=>{
        await (await browser.$(`//img[@alt="hamburger img"]`)).click();
        expect(browser).toHaveUrlContaining("cat")
        await (await browser.$(`//p[text()='Occasions']`)).moveTo()
        await (await browser.$(`//p[.='Personal Occasions']/../../../..//a[.='Birthday Gifts']`)).waitForClickable()
        await (await browser.$(`//p[.='Personal Occasions']/../../../..//a[.='Birthday Gifts']`)).click()
        var ele=await browser.$(`h1=Birthday Gifts`)
        await ele.waitForDisplayed()
        expect(ele).toBeDisplayed()
    })
    })