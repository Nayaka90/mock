class AllStudent{
get grade_Dropdwn(){
    return $(`#grade`)
}
get gradesbmt_Btn(){
    return $(`button*=Submit`)
}
get search_Input(){
    return $(`//input[@type='search']`)
}
get yes_Btn(){
   return $(`//*[@id="deleteConfirm"]//a[.='Yes']`)
}


async leaveStudent(studname,grade){
    await this.grade_Dropdwn.selectByVisibleText(grade)
    await this.gradesbmt_Btn.waitForClickable()
    await this.gradesbmt_Btn.click()
    await this.search_Input.setValue(`${studname}`)
    var el = (await (await (await browser.$(`a*=${studname}`)).parentElement()).parentElement())
    const ele = await el.$(`*=Leave`)
    await ele.waitForClickable()
    await ele.click()
    await this.yes_Btn.waitForClickable()
    await this.yes_Btn.click()
}    
}
export default new AllStudent()