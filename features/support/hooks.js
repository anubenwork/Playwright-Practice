const { Before, After, BeforeStep, AfterStep } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async function () {
  // Launch browser and create context/page before each scenario
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  // Close browser after each scenario
  if (this.browser) {
    await this.browser.close();
  }
});

// Runs before each step
BeforeStep(async function () {
  console.log(`>> Starting step`);
});

// Runs after each step
AfterStep(async function ({ result }) {
  if (result.status === 'FAILED') {
    console.log(`!! Step failed`);
    // Optionally take a screenshot on failure
    if (this.page) {
      await this.page.screenshot({ path: `screenshots/${Date.now()}.png` });
    }
  } else {
    console.log(`<< Finished step`);
  }
});


After({tags:"@EndtoEnd"},async function () { //specific aayitte olla tag kazhije execute cheiyan
  console.log("End to End testing is")
});