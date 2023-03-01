class AllTeacher{
    get search_Input(){
       return $(`//input[@type='search']`)
    }
   get delete_Icon(){
    return $(`#id_Delete`)
   }
   get yes_Btn(){
    return $(`#btnYes`)
   }
   get success_Popup(){
   return $(`#delete_Success`)
   }
   async deleteTeacherprofile(){
    await this.delete_Icon.waitForClickable()
    await this.delete_Icon.click()
    await this.yes_Btn.waitForClickable()
    await this.yes_Btn.click()
   }
       
      
    
}
export default new AllTeacher()