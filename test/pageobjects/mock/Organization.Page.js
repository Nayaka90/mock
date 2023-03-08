class Organization {
  get createOrg_icon() {
    return $('aria/Create Organization...')
  }
  get OrgNametable_link() {
    return $(`//td[@onmouseout]//a[contains(.,'tyss')]`)
  }

  get search_TxtBx() {
    return $(`[name="search_text"]`)
  }
  get In_Dropdown() {
    return $(`#bas_searchfield`)
  }
  get searchnow_Btn() {
    return $(`//input[contains(@value,'Search Now')]`)
  }

  async validatinginTable(org_name) {
    await (await this.search_TxtBx).setValue(org_name);
    await (await this.In_Dropdown).selectByVisibleText('Organization Name')
    await (await this.searchnow_Btn).waitForClickable()
    await (await this.searchnow_Btn).click();

  }
  async selectOrganization(org_name) {
    await (await this.search_TxtBx).setValue(org_name)
    await (await this.searchnow_Btn).click()
    await (await browser.$(`//a[text()='${org_name}']`)).waitForDisplayed({ timeoutMsg: "organization name not displayed" })
    await (await browser.$(`//a[text()='${org_name}']`)).click()
  }

}
export default new Organization()