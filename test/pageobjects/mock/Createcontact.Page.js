class CreateContactPage {
    get orgselect_icon() {
        return $(`//input[@name="account_name"]/../img`)
    }
    get orgName_TxtBx() {
        return $(`//input[@name="account_name"]`)
    }
    get page_Title() {
        return $(`//span[.='Creating New Contact']`)
    }

}
export default new CreateContactPage();