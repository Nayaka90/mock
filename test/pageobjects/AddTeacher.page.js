class AddTeacher {
    get indexno_Txt() {
        return $(`#index_number`)
    }
    get fullname_Txt() {
        return $(`#full_name`)
    }
    get nameWithIntial_Txt() {
        return $(`#i_name`)
    }
    get address_Txt() {
        return $(`#address`)
    }
    get email_Txt() {
        return $(`#email`)
    }

    get phone_Txt() {
        return $(`#phone`)
    }

    get submit_Btn() {
        return $(`#btnSubmit`)
    }
    get gender_Dropdwn() {
        return $(`#gender`)
    }
    get picUpload_Btn() {
        return $(`#fileToUpload`)
    }
    get grade_Dropdwn() {
        return $(`#grade`)
    }
    get gradeSbmt_Btn() {
        return $(`#btnSubmit1`)
    }
    get subCheckBx() {
        return $(`//td[.='Subject 1']/..//input`)
    }
    get Paid_Btn() {
        return $(`//button[text()='Paid']`)
    }
    get cnfm_Pop(){
      return $(`//strong[.='Success!']`)
    }

    async addTeacherProfile(fullname) {

        await this.indexno_Txt.addValue(`TY150`)
        await this.fullname_Txt.addValue(`NITHISH`)
        await this.nameWithIntial_Txt.addValue(fullname)
        await this.address_Txt.addValue(`Jp nagar`)
        await this.gender_Dropdwn.selectByVisibleText('Male')
        await this.phone_Txt.addValue(`948-019-6004`)
        await this.email_Txt.addValue(`${fullname}@gmail.com`)
        const remotePath = await browser.uploadFile(`s.png`)
        await this.picUpload_Btn.setValue(remotePath)
        await this.submit_Btn.waitForClickable()
        await this.submit_Btn.click()
    }

}

export default new AddTeacher();