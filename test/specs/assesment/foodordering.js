describe("verifying cart after adding food to cart", async () => {
  const menuname = 'Yorkshire Lamb Patties'
  const restarantname = 'North Street'
  let cartname
  let menucost
  let cartcost

  it('Launching browser and passing url', async () => {
    await browser.maximizeWindow()
    await browser.url("http://testingserver/domain/Online_Food_Ordering_System/")
    expect(browser).toHaveUrlContaining("Food")
  })
  it('adding food to cart', async () => {
    await (await browser.$(`a*=Restaurant`)).click()
    await (await browser.$(`a*=${restarantname}`)).click()
    const parent = await browser.$(`//a[contains(.,'${menuname}')]/../../../../..`);
    menucost = await (await parent.$('<span>')).getText()
    await parent.$(`//input[@value='Add To Cart']`).click()
  })
  it("verfying cart and menu price", async () => {
    const cart = await browser.$(`//div[@class='widget widget-cart']`);
    cartname = await (await cart.$(`.title-row`)).getText();
    cartcost = await (await cart.$(`//input[@id='exampleSelect1']`)).getValue();
    let carttotal = await browser.$('<strong>').getText();
    console.log(menuname + " " + cartname);
    console.log(menucost + " " + cartcost + " " + carttotal);
    expect(menucost).toContain(carttotal && cartcost)
    expect(cartname).toContain(menuname)
  })
})