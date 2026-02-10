const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

/* -------------------- LOGIN PAGE -------------------- */

Given('User is on the login page', async function () {
  await this.page.goto('https://www.saucedemo.com/');
});


/* -------------------- INVALID LOGIN -------------------- */

When(
  'User logs in with invalid credentials {string} and {string}',
  async function (username, password) {
    await this.page.locator('#user-name').fill(username);
    await this.page.locator('#password').fill(password);
    await this.page.locator('#login-button').click();
  }
);

Then('User should see the error message', async function () {
  const errorMessage = this.page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
});


/* -------------------- VALID LOGIN -------------------- */

When('User logs in with valid credentials', async function () {
  await this.page.locator('#user-name').fill('standard_user');
  await this.page.locator('#password').fill('secret_sauce');
  await this.page.locator('#login-button').click();
});


/* -------------------- ADD TO CART -------------------- */

When('User selects a product and moves to cart', async function () {
  await this.page.locator('#add-to-cart-sauce-labs-backpack').click();
  await this.page.locator('.shopping_cart_link').click();
});


/* -------------------- CHECKOUT -------------------- */

When('User proceeds to checkout with personal details', async function () {
  await this.page.locator('#checkout').click();

  await this.page.locator('#first-name').fill('Test');
  await this.page.locator('#last-name').fill('User');
  await this.page.locator('#postal-code').fill('682001');

  await this.page.locator('#continue').click();
  await this.page.locator('#finish').click();
});


/* -------------------- ORDER CONFIRMATION -------------------- */

Then('User should see the order confirmation message', async function () {
  const confirmationText = await this.page.locator('.complete-header');
  await expect(confirmationText).toBeVisible();
  await expect(confirmationText).toContainText('Thank you for your order');
});