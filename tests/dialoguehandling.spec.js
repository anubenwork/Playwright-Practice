const test = require('@playwright/test')
test('dialogue handling',async({page}) =>
{
 await page.goto('https://selenium.qabible.in/index.php')
 const alertbutton = await page.locator('#alert-modal').click()
 const button = await page.locator("//a[@href='javascript-alert.php']").click()
 await page.pause()
 page.on('dialog',dialog=>dialog.accept()) //default value for  page.on dialog is deny or cancel
 //page.on('dialog',dialog=>dialog.dismiss())
 const confirmbutton = await page.locator("//button[@class='btn btn-warning']").click()
 await page.pause
 //page.on('dialog',dialog=>dialog.dismiss()) //to click the cancel button on the dialogbox
 await page.pause()
}
 
);