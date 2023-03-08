class CreateOrganizationPage {
    get orgname_TxtBx() {
        return $(`[name="accountname"]`)
    }
    get save_Btn() {
        return $(`//input[contains(@value,'Save')]`)
    }
    get page_Title() {
        return $(`//span[.='Creating New Organization']`)
    }
    async createOrg(org_name) {
        await (await this.orgname_TxtBx).setValue(org_name)
        await (await this.save_Btn).click()
    }
}
export default new CreateOrganizationPage()