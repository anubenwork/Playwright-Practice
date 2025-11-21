const { test, expect} = require('@playwright/test')
test('Handle popup window in Playwright', async ({page, context})=>{
    await page.goto("https://selenium.qabible.in/window-popup.php")

    const popupPromise=context.waitForEvent('page')
    const button = await page.locator("//a[@title ='Follow @obsqurazone on Facebook']").click()
    //await page.click("//a[@class='btn btn-primary windowSingle']")// Trigger the new tab
    await page.locator('.x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft').click()
    const popup=await popupPromise

    await popup.waitForLoadState()
    await popup.waitForSelector('//input[@name="email"]', { state: 'visible' });
    await popup.fill('//span[text()="Email address or phone number"]','abc@gmail.com')
    await page.waitForTimeout(5000);//Waits for 5000 ms so that we can see the
});