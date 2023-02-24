describe("igp.com", async () => {
    const todayDate = new Date()
    const twomonth = new Date()
    twomonth.setMonth(todayDate.getMonth() + 2)
//plz enter date from today to next 2 months only in yyyy/mm/dd note if date is 24 add one extra means dd=25
    let deliverydate = "2023/2/25" 
    deliverydate = new Date(deliverydate)
    const fullmonth = deliverydate.toLocaleDateString('default', { month: 'long' });
    const date = deliverydate.getDate()-1
    const year = deliverydate.getFullYear()

    it("openbrowser and enter url", async () => {
        await browser.maximizeWindow();
        await browser.url(`https://www.igp.com/`)
        expect(browser).toHaveTitleContaining("IGP")
    })
    it("selecting cakes", async () => {
        await (await browser.$(`//a/span[text()='Cakes']`)).click();
        expect(browser).toHaveUrlContaining("cake")
        await (await browser.$(`//a/span[contains(.,'Birthday')]`)).click();
        expect(browser).toHaveUrlContaining("birthday")
        await (await browser.$(`//a[contains(.,'Chocolate Delight Cake')]`)).click();
        expect(browser).toHaveUrlContaining("chocolate")
    })

    it("calender popup handling and scroll action", async () => {
        await (await browser.$(`#location-input`)).scrollIntoView()
        await (await browser.$(`#location-input`)).setValue('560056')
        await (await browser.$(`#show-Select_Date`)).waitForExist()
        await (await browser.$(`#show-Select_Date`)).click()
        if (deliverydate >=todayDate && deliverydate <= twomonth){
        for(;;){
           try{
            await (await browser.$(`//span[.='${fullmonth}']/following-sibling::span[.='${year}']/../../..//a[.='${date}']`)).click()
              break;
        }
              catch(err){
            await(await browser.$("//span[.='Next']")).click()

                }
              }
        }
        else
        throw new "please Enter valid date"
        await (await browser.$(`#timepicker`)).waitForExist()
        await (await browser.$(`#timepicker`)).selectByIndex(1);
    })
    it("dropdown handling", async () => {
        await (await browser.$(`//select[@class='pdpdd select-cattype']`)).selectByVisibleText(`Chocolate`);
        await (await browser.$(`#add-cart`)).click();
    })
    it("checkout of an order", async () => {
        await (await browser.$(`//span[.='CONTINUE WITHOUT ADDONS']`)).waitForExist()
        await (await browser.$(`//span[.='CONTINUE WITHOUT ADDONS']`)).click()
        await (await browser.$(`//a[.=' Proceed To Checkout']`)).waitForExist()
        await (await browser.$(`//a[.=' Proceed To Checkout']`)).click()
    })
    it("capturing css property due to error", async () => {
        let black = await (await browser.$(`#email`)).getCSSProperty(`border-color`)
        console.log(black)
        await (await browser.$(`#email`)).setValue(`ll`);
        await (await browser.$(`#passwd`)).setValue('jj')
        await (await browser.$(`button*=SIGN IN`)).click()

        const red = await (await browser.$(`#email`)).getCSSProperty(`border-color`)
        console.log(red);
        expect(red.value).toBe(`rgba(255,0,0,1)`)
    })
})