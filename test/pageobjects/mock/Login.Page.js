
class LoginPage {
    get username_TxtBx() {
        return $('[name="user_name"]')
    }
    get pwd_TxtBx() {
        return $('[name="user_password"]')
    }
    get login_Btn() {
        return $(`#submitButton`)
    }
    async launch() {
        await browser.url("http://testingserver:8888/");
        await browser.maximizeWindow();
    }
    async login(un, pwd) {
        await (await this.username_TxtBx).setValue(un);
        await (await this.pwd_TxtBx).setValue(pwd);
        await (await this.login_Btn).waitForClickable();
        await (await this.login_Btn).click();
    }

}

export default new LoginPage();