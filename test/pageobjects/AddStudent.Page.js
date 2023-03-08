
import { expect } from "chai";
class AddStudent {
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

    get bDate_Txt() {
        return $(`#b_date`)
    }
    get gender__Dropdwn() {
        return $(`#gender`)
    }
    get picUpload__Btn() {
        return $(`#fileToUpload`)
    }
    get g_indexno_Txt() {
        return $(`#g_index`)
    }
    get g_fullname_Txt() {
        return $(`#g_full_name`)
    }
    get g_nameWithIntial_Txt() {
        return $(`#g_i_name`)
    }
    get g_address_Txt() {
        return $(`#g_address`)
    }
    get g_email_Txt() {
        return $(`#g_email`)
    }

    get g_phon_Txt() {
        return $(`#g_phone`)
    }

    get g_bDate_Txt() {
        return $(`#g_b_date`)
    }
    get g_gender__Dropdwn() {
        return $(`#g_gender`)
    }
    get g_picUpload__Btn() {
        return $(`#g_fileToUpload`)
    }
    get submit__Btn() {
        return $(`//button[.='Next']`)
    }
    get grade__Dropdwn(){
        return $(`#grade`)
    }
    get grade_Sbmt_Btn(){
    return $(`#btnSubmit1`)
    }
    get sub_CheckBx(){
        return $(`//td[.='Subject 1']/..//input`)
    }
    get Paid__Btn(){
       return $(`//button[text()='Paid']`)
    }
    get cnfrm__Pop(){
    return $(`//strong[.='Success!']`)
    }
    async AddStudentandguadrdian_Details() {
        let r = Math.random()
        let random = Math.floor(r * (999 - 1) + 1)
        const s_name = "mohannayak"
        const g_name = "bhagya"
        const g_email = g_name + random + '@gmail.com'
        const s_email = s_name + random + '@gmail.com'
        
        await this.indexno_Txt.addValue(random)
        await this.fullname_Txt.addValue(s_name)
        await this.nameWithIntial_Txt.addValue(s_name + ' yb')
        await this.address_Txt.addValue('JP nagar')
        await this.email_Txt.addValue(s_email)
        await this.phone_Txt.addValue('111-111-1111')
        await this.bDate_Txt.addValue('03/12/1997')
        await this.gender__Dropdwn.selectByVisibleText('Male')
        const localpath = await browser.uploadFile(`s.png`)
        await this.picUpload__Btn.setValue(localpath)

        const index = await this.g_indexno_Txt.getValue()
        expect(index).to.equal('G-' + random)
        await this.g_fullname_Txt.addValue(g_name)
        await this.g_nameWithIntial_Txt.addValue(g_name + ' b')
        await this.g_address_Txt.addValue('JP nagar')
        await this.g_email_Txt.addValue(g_email)
        await this.g_phon_Txt.addValue('111-111-1111')
        await this.g_bDate_Txt.addValue('03/12/1985')
        await this.g_gender__Dropdwn.selectByVisibleText('Female')
        await (await this.g_picUpload__Btn).setValue(localpath)
        
        await this.submit__Btn.waitForClickable()
        await this.submit__Btn.click()
        
    }

  
    async selectingGradeandsubandPayment(){
        await this.grade__Dropdwn.selectByIndex(1)
        await this.sub_CheckBx.waitForClickable()
        await this.sub_CheckBx.click()
        await this.grade_Sbmt_Btn.waitForClickable()
        await this.grade_Sbmt_Btn.click()
        await this.Paid__Btn.waitForClickable()
        await this.Paid__Btn.click()
    }
   


}

//module.exports=new AddStudent();
export default new AddStudent();