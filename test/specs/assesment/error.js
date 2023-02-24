describe("facebook.com", async () => {
    it("openbrowser and enter url", async () => {
        await browser.maximizeWindow();
        await browser.url(`https://www.facbook.com/`)
        expect(browser).toHaveTitleContaining("Facebook")
        
    })
    it("openbrowser and enter url", async () => {
        await (await browser.$(`[name="login"]`)).click()
     const error=await browser.$(`._9ay7`)
     expect(error).toBeDisplayed()
     expect(await error.getText()).toContain(`The email address or mobile number you entered isn't connected to an account`)
    })
})