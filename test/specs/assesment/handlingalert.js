describe("verifying cart after adding food to cart", async () => {
  const menuname = 'Yorkshire Lamb Patties'
  const restarantname = 'North Street'

  it('Launching browser and passing url', async () => {
    await browser.maximizeWindow()
    await browser.url("http://testingserver/domain/Online_Food_Ordering_System/")
    expect(browser).toHaveUrlContaining("nithishnayak")
  })
  it('Login into application', async () => {
    await browser.$(`a*=Login`).click()
    await (await browser.$(`[name='username']`)).setValue('ajax')
    await (await browser.$(`[name='password']`)).setValue('123aj456')
    await (await browser.$(`#buttn`)).click()
  })
  it('adding food to cart and checkout', async () => {
    await (await browser.$(`a*=Restaurant`)).click()
    await (await browser.$(`a*=${restarantname}`)).click()
    await (await browser.$(`//a[contains(.,'${menuname}')]/../../../../..//input[@value='Add To Cart']`)).click();
    await (await browser.$(`a*=Checkout`)).click()
    await (await browser.$(`[name="submit"]`)).click()
  })
  it('handling alert', async () => {
    await browser.waitUntil(async()=>await browser.isAlertOpen())
    const text = await browser.getAlertText()
    expect(text).toContain(`Do you want to confirm the order?`)
    await browser.acceptAlert()
    const cnf = await browser.getAlertText()
    expect(cnf).toContain(`Thank you. Your Order has been placed!`)
    await browser.acceptAlert()
  })

})