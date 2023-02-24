describe("igp.com",async()=>{
it("openbrowser and enter url",async()=>{
await browser.maximizeWindow();
await browser.url(`https://www.igp.com/`)
expect(browser).toHaveTitleContaining("IGP")
})
it("selecting cakes",async()=>{
    await (await browser.$(`//a/span[text()='Cakes']`)).click();
    expect(browser).toHaveUrlContaining("cake")
    await (await browser.$(`//a/span[contains(.,'Birthday')]`)).click();
    expect(browser).toHaveUrlContaining("birthday")
    await (await browser.$(`//a[contains(.,'Chocolate Delight Cake')]`)).click();
    expect(browser).toHaveUrlContaining("chocolate")
    //await (await browser.$(`#add-cart`)).click();
})

it("calender popup handling and scroll action",async()=>{
    await (await browser.$(`#location-input`)).scrollIntoView()
    await (await browser.$(`#location-input`)).setValue('560056')
    await (await browser.$(`#show-Select_Date`)).click()
    await (await browser.$(`//span[.='February']/following-sibling::span[.='2023']/../../..//a[.='25']`)).click()
})
it("dropdown handling",async()=>{
    await (await browser.$(`#timepicker`)).selectByVisibleText(`09:00 hrs - 13:00 hrs`)
    await (await browser.$(`//select[@class='pdpdd select-cattype']`)).selectByVisibleText(`Chocolate`);
    await (await browser.$(`#add-cart`)).click();
})
it("checkout of an order",async()=>{
    await (await browser.$(`//span[.='CONTINUE WITHOUT ADDONS']`)).waitForExist()
    await (await browser.$(`//span[.='CONTINUE WITHOUT ADDONS']`)).click()
    await (await browser.$(`//a[.=' Proceed To Checkout']`)).waitForExist()
    await (await browser.$(`//a[.=' Proceed To Checkout']`)).click()
   
   
})
it("capturing css property due to error",async()=>{
    let black=await(await browser.$(`#email`)).getCSSProperty(`border-color`)
    console.log(black)
    await (await browser.$(`#email`)).setValue(`ll`);
    await(await browser.$(`#passwd`)).setValue('jj')
    await (await browser.$(`button*=SIGN IN`)).click()

    const red=await(await browser.$(`#email`)).getCSSProperty(`border-color`)
    console.log(red);
    expect(red.value).toBe(`rgba(255,0,0,1)`)
})
})