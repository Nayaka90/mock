import { expect } from "chai";
import ContactPage from "../../pageobjects/mock/Contact.Page.js";
import CreatecontactPage from "../../pageobjects/mock/Createcontact.Page.js";
import createOrganizationPage from "../../pageobjects/mock/createOrganization.page.js";
import HomePage from "../../pageobjects/mock/Home.Page.js";
import InformationPage from "../../pageobjects/mock/OrgInformation.Page.js";
import LoginPage from "../../pageobjects/mock/Login.Page.js"
import OrganizationPage from "../../pageobjects/mock/Organization.Page.js";

describe("create organiztion to create contact", async () => {
    var r = Math.floor(Math.random() * (999 - 10) + 10)
    var organization_name = "tyss" + r

    it("Entering url and maximizing browser", async () => {
        await LoginPage.launch();
        expect(await browser.getTitle()).to.contains('vtiger')
    })

    it("Login to application", async () => {
        await LoginPage.login("admin", "admin")
        expect(await browser.getTitle()).to.contains('Home')
    })

    it("craeting Organization", async () => {
        await (await HomePage.organization_Link).click()
        expect(await browser.getTitle()).to.contains('Organization')
        await (await OrganizationPage.createOrg_icon).click()
        await createOrganizationPage.page_Title.waitForDisplayed({ timeoutMsg: "create organization page not displayed" })
        await createOrganizationPage.createOrg(organization_name)
        await (await InformationPage.headerText).waitForDisplayed({ timeoutMsg: "informaation page not displayed" })

    })
    it("validating data flow between createorganization page to information page", async () => {
        var orgname = await (await InformationPage.headerText).getText();
        expect(orgname).to.contains(organization_name)
    })
    it("validating data flow between createorganization page to organization page", async () => {
        await (await HomePage.selectedorganization_Link).click()
        expect(await browser.getTitle()).to.contains('Organization')
        await OrganizationPage.validatinginTable(organization_name);
        await (await OrganizationPage.OrgNametable_link).waitForDisplayed({ timeoutMsg: "organization name not displayed" })
    })
    it("clicking on create contact", async () => {
        await (await HomePage.contact_Link).click()
        expect(await browser.getTitle()).to.contains('Contact')
        await (await ContactPage.createcontact_Icon).waitForClickable()
        await (await ContactPage.createcontact_Icon).click()
        await CreatecontactPage.page_Title.waitForDisplayed({ timeoutMsg: "create contact page not displayed" })
    })
    it("validating data flow between organization module to contact module", async () => {
        await (await CreatecontactPage.orgselect_icon).waitForClickable()
        await (await CreatecontactPage.orgselect_icon).click()
        await browser.waitUntil(async () => ((await browser.getWindowHandles()).length) == 2,{timeoutMsg:"organization window popup not displayed"})
        await browser.switchToWindow((await browser.getWindowHandles())[1])
        await OrganizationPage.selectOrganization(organization_name)
        await browser.switchToWindow((await browser.getWindowHandles())[0])
        let orgname = await (await CreatecontactPage.orgName_TxtBx).getValue()
        expect(orgname).to.equal(organization_name)
    })

})