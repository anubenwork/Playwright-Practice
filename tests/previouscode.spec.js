const test = require('@playwright/test'); //import test

test('login verification',async({browser})=> {
 const context = await browser.newContext();
 const page = await context.newPage();
 await page.goto('https://www.saucedemo.com');
 console.log(await page.title());
});

// test.only is used to run a particular test case only
test.only('Invaliduser',async({browser}) =>
{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://www.saucedemo.com/') 
console.log(await page.title()) 
const usernamefield=await page.locator('#user-name').type("user")
const passwordfield=await page.locator('#password').type("secret_sauce")
const loginbutton=await page.locator('#login-button').click()
test.expect(page.locator)
await page.pause();
const usernamefield1=await page.locator('#user-name').type("user")
const passwordfield1=await page.locator('#password').type("secret_sauce")
const loginbutton1=await page.locator('#login-button').click()



//const identifyfield=await page.locator(".app_logo")
//await test.expect(identifyfield).toContainText("Swag Labs")
});

//to find xpath - //tagname[@attribute='value']