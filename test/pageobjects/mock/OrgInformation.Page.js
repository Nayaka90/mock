class InformationPage {
    get headerText() {
        return $(`//span[@class='dvHeaderText']`)

    }

    async gettingOrgName() {
        await (await this.headerText).getText()

    }


}
export default new InformationPage()