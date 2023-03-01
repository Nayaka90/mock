class AdminDashBoard {

    get Student_dropdown() {
        return $(`span=Student`)
    }
    get teacher_Dropdwn() {
        return $(`//span[text()='Teacher']`)
    }
    get addTeacher_Link() {
        return $(`a*= Add Teacher`)
    }
    get AddStudent_Link() {
        return $(`a*= Add Student`)
    }
    get allTeacher_Link() {
        return $(`aria/All Teacher`)
    }
    get allStudent_Link() {
        return $(`aria/All Student`)
    }
    async clickOnAllStudent_Link() {
        await this.Student_dropdown.click()
        await this.allStudent_Link.click()
    }

    async clickOnAddStudent_Link() {
        await (await this.Student_dropdown).click()
        await (await this.AddStudent_Link).click()
    }

    async clickOnAddTeacher_Link() {
        await this.teacher_Dropdwn.click()
        await this.addTeacher_Link.click()
    }
    async clickOnAllTeacher_Link() {
        await this.teacher_Dropdwn.click()
        await this.allTeacher_Link.click()
    }
}
export default new AdminDashBoard()