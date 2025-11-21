const test = require('@playwright/test')
test('verify check box', async({page}) => 
    {
     await page.goto("https://selenium.qabible.in/check-box-demo.php")
     const checkbox = await page.locator("//input[@class='form-check-input']")
     await page.pause()
     await checkbox.click()
     
}
);
test('radiobutton verification',async({page}) =>
{
   await page.goto("https://selenium.qabible.in/radio-button-demo.php")
   const radiobutton = await page.locator("//input[@id='inlineRadio1']")
   await page.pause()
   await radiobutton.click()
   const button = await page.locator("//button[@id='button-one']").click()
}
);

test.only('verify dropdown selection', async({page}) =>
{
 await page.goto('https://www.saucedemo.com/')
 const usernamefield=await page.locator('#user-name').type("standard_user") // locate element using id and type the text
const passwordfield=await page.locator('#password').type("secret_sauce") // locate element using id and type the text
const loginbutton=await page.locator('#login-button').click()
const dropdown = page.locator("//select[@class = 'product_sort_container']")
//await dropdown.selectOption({index:2}) // select by idex
//await dropdown.selectOption('za') // select by value
await dropdown.selectOption({label:'Name (Z to A)'}) // select using visible text
await page.pause()
}
);