const {test,expect} = require('@playwright/test');

test('Checkout',async({page}) =>
{
await page.goto('https://www.saucedemo.com/') 
console.log(await page.title())
const usernamefield=await page.locator('#user-name').type("standard_user") // locate element using id and type the text
const passwordfield=await page.locator('#password').type("secret_sauce") // locate element using id and type the text
const loginbutton=await page.locator('#login-button').click() // locate element using id and click on the button using click()
const identifyfield=await page.locator(".app_logo")
await test.expect(identifyfield).toContainText("Swag Labs") //soft assertion(test.expect) , the test case will continue to execute even if the assertion or expect is not met
const selecteditem = await page.locator('#add-to-cart-sauce-labs-backpack').click()
const addtocart = await page.locator('.shopping_cart_link').click()
const checkout = await page.locator('#checkout').click()
const firstname = await page.locator('#first-name').type("Anu")
const lastname = await page.locator('#last-name').type("Ben")
const pin = await page.locator('#postal-code').type('12355')
const contbutton = await page.locator('#continue').click()
const finishbutton = await page.locator('#finish').click()
const identityfield1 = await page.locator('.complete-header')
await expect(identityfield1).toHaveText("Thank you for your order!") //hard assertion(expect) , the test case will fail if this expect or assertion is not met
await page.pause()
});