const dataset = JSON.parse(JSON.stringify(require('../utils/testdata.json')))
const test = require('@playwright/test');
// test module is imported from playwright package
/*test('login verification',({browser}) =>
{
const context = browser.newContext();
const page = context.newPage();
//await page.goto('https://www.saucedemo.com/')
page.goto('https://www.saucedemo.com');
  console.log(page.title());
});*/

test('login verification',async({browser}) =>
    //test (description of TC)
{
const context = await browser.newContext(); // create an instance of browser
const page = await context.newPage(); // creating the page in the instance of browser
const username = dataset.username
const password = dataset.password
await page.goto('https://www.saucedemo.com/') //goto > uses to access the url
console.log(await page.title())  // To see the title of the page
//using locator locating unique field element
const usernamefield=await page.locator('#user-name').type(username) // locate element using id and type the text
const passwordfield=await page.locator('#password').type(password) // locate element using id and type the text
const loginbutton=await page.locator('#login-button').click() // locate element using id and click on the button using click()
//type and fill are used for feeding values to text area
// type--> will append data to the existing text area
//fill --> will clear the existing text with new value
const identifyfield=await page.locator(".app_logo") // located element with class so used .value
await test.expect(identifyfield).toContainText("Swag Labs")
});

// Invaliduser and valid username
test.only('Invaliduser',async({browser}) =>
{
const context = await browser.newContext();
const page = await context.newPage();
const invalidusername = dataset[1].invalidusername
const validpassword = dataset[1].validpassword
await page.goto('https://www.saucedemo.com/') 
console.log(await page.title()) 
const usernamefield=await page.locator('#user-name')
await usernamefield.type(invalidusername) //chaining of actions or commands line 38,39
const passwordfield=await page.locator('#password').type(validpassword)
const loginbutton=await page.locator('#login-button')
loginbutton.click()
await test.expect(page.locator("//h3[@data-test='error']")).toContainText("Epic")
await page.pause();
await usernamefield.fill("standard_user")
await loginbutton.click()
await page.pause();
const cardTitles = page.locator(".inventory_item_name")
console.log(await cardTitles.first().textContent()) // to extract the first element or content and then to print the text using textContent()
console.log(await cardTitles.nth(1).textContent()); //to extract the 2nd index value using nth()
const allTitles = await cardTitles.allTextContents(); // to extract all text contents
console.log(allTitles);
await test.expect(cardTitles).toHaveCount(6); // to check the cardtitles variable have 6 items using toHaveCount(6)
//const identifyfield=await page.locator(".app_logo")
//await test.expect(identifyfield).toContainText("Swag Labs")
});