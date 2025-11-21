const { test } = require('@playwright/test'); // Import test
const dataSet = require('../utils/parameterizedtestdata.json'); // Import JSON test data

for (const data of dataSet) {
  test(`login with invalid creds ${data.username}, ${data.password}`, async ({ browser }) => 
    {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.saucedemo.com');

    const usernameField = page.locator('#user-name');
    const passwordField = page.locator('#password');
    const loginBtn = page.locator('#login-button');

    await usernameField.fill(data.username);
    await passwordField.fill(data.password);
    await loginBtn.click();

    // OPTIONAL: add assertion to validate failed login
    await page.waitForSelector('[data-test="error"]');
  });
}