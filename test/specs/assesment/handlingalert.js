describe("verifying cart after adding food to cart",async()=>{
  const restarantname='North Street'
  

  it('Launching browser and passing url',async()=>{
    await browser.maximizeWindow()
    await browser.url("http://testingserver/domain/Online_Food_Ordering_System/")
    expect(browser).toHaveUrlContaining("Food")
  })
it('adding food to cart',async()=>{
    await (await browser.$(`a*=Restaurant`)).click()
    await (await browser.$(`a*=${restarantname}`)).click()
 await (await browser.$(`//a[contains(.,'${menuname}')]/../../../../..//input[@value='Add To Cart']`)).click();
})

})