// Summary & Checkout
class Summary{
    constructor(page){ // constructor = helps to create an object of the class
        this.page = page;
        this.CheckOut = page.locator("//button[@id='checkout']");
        this.customerfirstname = page.locator('//input[@id="first-name"]');
        this.customerlastname = page.locator('//input[@id="last-name"]');  
        this.customerpostalcode = page.locator('//input[@id="postal-code"]');  
        this.continuebutton = page.locator('//input[@id="continue"]'); 
        this.finishbutton = page.locator('//button[@id="finish"]'); 
        //this.backhomebutton = page.locator('//input[@id="postal-code"]'); 
    }
async checkOutButton(){
    await this.CheckOut.click()
}
async customerfn(firstNameValue){
        await this.customerfirstname.type(firstNameValue) 
     }
async customerln(lastNameValue){
        await this.customerlastname.type(lastNameValue) 
}
async customerpostcode(postCodeValue){
        await this.customerpostalcode.type(postCodeValue) 
}
async continueButton(){
    await this.continuebutton.click()
}
async finishButton(){
    await this.finishbutton.click()
}
}
module.exports=Summary