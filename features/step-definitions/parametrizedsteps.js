        /*const { Given, When, Then } = require('@cucumber/cucumber');
        const { expect } = require('@playwright/test');
        const Login = require('../../page-objects/Login');
        const { chromium } = require('@playwright/test');
        Given('User is on the login url', async function () {
           this.browser = await chromium.launch({ headless: false });
           this.context = await this.browser.newContext();
           this.page = await this.context.newPage();
           this.loginPage = new Login(this.page)
           this.loginPage.gotourl()
         });

         When('User logs in with invalid {string} and {string}', async function (username, password) {
           await this.loginPage.enterusername(username);
           await this.loginPage.enterpassword(password);
           await this.loginPage.loginbuttonclick();
         });
         Then('Verify Error message with text {string} is displayed', async function (expectedError) {
           const actualError= this.page.locator("//h3[@data-test='error']").textContent()
           expect(actualError).toBe(expectedError)
         });
*/

         /*Given('User is on the login url', async function () {
           this.browser = await chromium.launch({ headless: false });
           this.context = await this.browser.newContext();
           this.page = await this.context.newPage();
           await this.page.goto('https://www.saucedemo.com/');
         });


         When('User logs in with invalid {string} and {string}', async function (username, password) {
           await this.loginPage.enterusername(username);
           await this.loginPage.enterpassword(password);
           await this.loginPage.loginbuttonclick();
         });
         Then('Verify Error message with text {string} is displayed', async function (expectedError) {
           const actualError= this.page.locator("//h3[@data-test='error']").textContent()
           expect(actualError).toBe(expectedError)
         });


         Given('User is on the login url', async function () {
           this.browser = await chromium.launch({ headless: false });
           this.context = await this.browser.newContext();
           this.page = await this.context.newPage();
           await this.page.goto('https://www.saucedemo.com/');
         });

         When('User logs in with invalid {string} and {string}', async function (username, password) {
           await this.loginPage.enterusername(username);
           await this.loginPage.enterpassword(password);
           await this.loginPage.loginbuttonclick();
         });
         Then('Verify Error message with text {string} is displayed', async function (expectedError) {
           const actualError= this.page.locator("//h3[@data-test='error']").textContent()
           expect(actualError).toBe(expectedError)
         });*/