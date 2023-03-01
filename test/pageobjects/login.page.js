
class LoginPage {

get username_txt(){
    return $(`[name='email']`)
}
get Passsword_txt(){
    return $(`[name='password']`)
}
get Login_Btn(){
  return $(`#btnSubmit`)
}

async Login(un,pwd){
    await (await this.username_txt).setValue(un)
    await (await this.Passsword_txt).setValue(pwd)
    await (await this.Login_Btn).waitForClickable()
    await (await this.Login_Btn).click()
}

async launchBrowser(){
   await browser.maximizeWindow()

   await browser.url('')
}
}

export default new LoginPage()