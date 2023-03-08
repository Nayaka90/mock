
class HomePage {
    get organization_Link() {
        return $(`//td[@class='tabUnSelected']/a[.='Organizations']`)
    }
    get contact_Link() {
        return $(`//td[@class='tabUnSelected']/a[.='Contacts']`)
    }
    get selectedorganization_Link() {
        return $(`//td[@class='tabSelected']/a[.='Organizations']`)
    }
}

export default new HomePage();