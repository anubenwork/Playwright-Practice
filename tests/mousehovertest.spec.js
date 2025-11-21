// Mouse hovering
const test = require('@playwright/test')
test('Mouse hovering',async({page}) =>
{
await page.goto("https://selenium.qabible.in/")
await page.locator('//a[@id="progress-bars"]').hover() // mouse over action
await page.waitForTimeout(5000)

});