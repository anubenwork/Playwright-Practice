/*const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const Login = require('../../page-objects/Login');
const { chromium } = require('@playwright/test');

Given('User is on the login page', async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();

    this.loginPage = new Login(this.page);
  await this.loginPage.gotourl();
});

When(
  'User logs in with invalid credentials {string} and {string}',
  async function (username, password) {
    await this.loginPage.enterusername(username);
    await this.loginPage.enterpassword(password);
    await this.loginPage.loginbuttonclick();
  }
);

Then(
  'Verify Error with text {string} is displayed',
  async function (expectedError) {
    const actualError= this.page.locator("//h3[@data-test='error']").textContent()
    expect(actualError).toBe(expectedError);
  }
);*/