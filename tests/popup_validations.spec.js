const test = require('@playwright/test')
test('Pop up Validations', async ({page}) =>{
    await page.goto('https://selenium.qabible.in/index.php');
    await page.pause()
    const documentLink = page.locator("#alert-modal");
    documentLink.click();
    const modal = page.locator("a[href='javascript-alert.php']");
    await modal.click();
    await page.pause()
    await page.locator(".btn.btn-warning").click();
    await page.pause()
    page.on('dialog', dialog => dialog.accept());//accept is an event listener
    await page.locator(".btn.btn-warning").click();
    page.on('dialog', dialog => dialog.dismiss());//dismiss is an eventlistener
    await page.pause();
}
);