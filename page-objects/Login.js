
    //async goto(){
     // await page.goto('https://www.saucedemo.com/')
    //}
   //async enterusername(){
    //const usernamefield=await page.locator('#user-name').type("standard_user")
   //}
   //async enterpassword(){
     //const passwordfield=await page.locator('#password').type("secret_sauce")
   //}
   //async loginbuttonfn(){
    //const loginbutton=await page.locator('#login-button').click()
  // }
//}
class Login{
  constructor(page){ // constructor = helps to create an object of the class
        this.page = page;
        this.userName = page.locator('#user-name');
        this.password = page.locator('#password');
        this.login = page.locator("//input[@id='login-button']");  
    }
    async gotourl(){
        await this.page.goto('https://www.saucedemo.com/') 
    }
    async enterusername(userNameValue){
        //const usernamefield=await this .userName.type(userNameValue)
        await this.userName.type(userNameValue) 
    }
    async enterpassword(passwordValue){
        //const passwordfield=await this.password.type(passwordValue)
        await this.password.type(passwordValue)
    }
    async loginbuttonclick(){
        //const loginbutton=await this.login.click()
        await this.login.click()
    }
}
module.exports=Login