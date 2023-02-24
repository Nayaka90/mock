describe("facebook.com",async()=>{
    it("openbrowser and enter url",async()=>{
    await browser.maximizeWindow();
    await browser.url(`https://www.facbook.com/`)
    expect(browser).toHaveTitleContaining("Facebook")
    })
})