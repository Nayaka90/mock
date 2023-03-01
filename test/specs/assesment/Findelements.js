describe("verifying cart after adding food to cart", async () => {

  
    it('Launching browser and passing url', async () => {
      await browser.maximizeWindow()
      await browser.url("https://www.icc-cricket.com/rankings/mens/team-rankings/odi")
      expect(browser).toHaveUrlContaining("odi")
    })
    it('capturing team names', async () => {
      var teamnames =await browser.$$(`//span[@class='u-hide-phablet']`)
      var name=await Promise.all(teamnames.map(async(teamname)=>await teamname.getText()))
      //  name=[]  //this also works ,we can use for of, for in and  for loop for asyncc functions 
      // for (const value of teamnames) {
      //   name.push(await value.getText())
      // }
      console.log(name)
    })

})