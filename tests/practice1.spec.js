const {test,expect} = require('@playwright/test');
const Dashboard = require('../page-objects/Dashboard')
const Summary = require('../page-objects/Summary')
const Login = require('../page-objects/Login')
const dataset = JSON.parse(JSON.stringify(require('../utils/testdata.json'))) //syntax to pass or use json file
const {customtest} = require('../utils/test_base')
test.only('cartadd',async({browser}) =>
{
const context = await browser.newContext();
const page = await context.newPage();
//await page.goto('https://www.saucedemo.com/')
console.log(await page.title()) 
const username = dataset.username
const password = dataset.password
/*const usernamefield=await page.locator('#user-name') 
await usernamefield.type("standard_user") //chaining of actions or commands line 38,39
const passwordfield=await page.locator('#password').type("secret_sauce")
await page.pause()
const loginbutton=await page.locator('#login-button')
await loginbutton.click()*/
const login = new Login(page)  // in constructor we given as page
await login.gotourl()
await login.enterusername(username);
await login.enterpassword(password);
await login.loginbuttonclick();

/*const addcart =await page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]')
await addcart.click()
const count1=await page.locator('//span[@class="shopping_cart_badge"]')
console.log(count1)
const cart1 = await page.locator('//a[@class="shopping_cart_link"]')
await cart1.click()
await page.pause()*/
const dashboard = new Dashboard(page)
await dashboard.addItem()
await dashboard.itemCount()
await dashboard.itemIcon()

/*const checkout = await page.locator("//button[@id='checkout']")
await checkout.click()
const name= await page.locator('//input[@id="first-name"]')
await name.type('Tom')
const last=await page.locator('//input[@id="last-name"]')
await last.type('thomas')
const zip = await page.locator('//input[@id="postal-code"]')
await zip.type('654321')
const continue1 =await page.locator('//input[@id="continue"]')
await continue1.click()
const finish = await page.locator('//button[@id="finish"]')
await finish.click()*/
const summary = new Summary(page)
await summary.checkOutButton()
await summary.customerfn("Tom")
await summary.customerln("Mark")
await summary.customerpostcode('567821')
await summary.continueButton()
await summary.finishButton()

await expect(page.locator('//h2[@class="complete-header"]')).toHaveText('Thank you for your order!')

////h2[@class="complete-header"]

});
customtest.only('Parameterized data driven',async({page,testDataForOrder})=>{
    //const username=data[0].username
    //const password=data[0].password
    await page.goto('https://demoblaze.com/')
    const loginPage=new LoginPage(page)
    await loginPage.clickLogin()
    await loginPage.enterUsername(testDataForOrder.username)
    await loginPage.enterPassword(testDataForOrder.password)
    await loginPage.login()

    const addToCartPage = new AddtoCartPage(page) 
    addToCartPage.selectMonitor()
    addToCartPage.select_product()
    await page.pause()
    await addToCartPage.addToCartBtn()
    page.on('dialog', dialog => dialog.accept());
    await addToCartPage.selectCart()
    await page.pause()
    await addToCartPage.placeOrderClick()
    await addToCartPage.addcustomername()
    await addToCartPage.addcountry()
    await addToCartPage.addcity()
    await addToCartPage.addCreditCardData()
    await addToCartPage.addMonth()
    await addToCartPage.addYear()
    await addToCartPage.purchaseProduct()
});