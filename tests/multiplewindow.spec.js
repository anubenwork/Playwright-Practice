const {test,expect} = require('@playwright/test')
test('verfiy popup working', async({page,context}) =>  //we use promise to handle multiple window selection and typing on that window
{
    await page.goto('https://selenium.qabible.in/window-popup.php') //waitforEvent - used to make the code to wait for an event to happen . eg wait for a window to open when clicked
    const popuppromise = context.waitForEvent('page')
    const button = await page.locator("//a[@title ='Follow @obsqurazone on Facebook']").click()
    const popup = await popuppromise
    await popup.waitForLoadState() // to wait for the enite DOM or entire elements to load of the new window
    await popup.fill('//span[text()="Email address or phone number"]','test@gmail.com')
    await page.waitForTimeout(5000)

}
);