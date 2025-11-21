// dashboard
class Dashboard{
    constructor(page){ // constructor = helps to create an object of the class
        this.page = page;
        this.addCart = page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]');
        this.cartCount = page.locator('//span[@class="shopping_cart_badge"]');
        this.cartIcon = page.locator('//a[@class="shopping_cart_link"]');  
    }
async addItem(){
    await this.addCart.click()
}
async itemCount(){
    const count1= await this.cartCount
    console.log(count1)
}
async itemIcon(){
    await this.cartIcon.click()
}
}
module.exports=Dashboard
