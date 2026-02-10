import { Page, Locator } from '@playwright/test';
let message1:string="Hello";  // mentioning what type of data we are storing to the variable message and semicolon required since single value variable
console.log(message1)
let numbersarray:number[]=[1,2,3]
function add(a:number,b:number):number{  //declaring a function with parameter and return type
    return a+b
}
let sum = add(3,5)
console.log(sum)

//Constructor

class Cart {
    page: Page;
    cartItems: Locator;
    checkout: Locator;

    constructor(page: Page) {  // here :Page is the type
        this.page = page;
        this.cartItems = page.locator("//div[@class='inventory_item_name']");
        this.checkout = page.locator("#checkout");
    } 
    
    async getChecked() {
        await this.cartItems.first().waitFor();
        const visible = await this.cartItems.first().isVisible();
        console.log(visible);
    }

    async onCheckout() {
        await this.checkout.click();
    }
}

export default Cart;