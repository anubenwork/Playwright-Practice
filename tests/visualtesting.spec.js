const { test, expect} = require('@playwright/test')

//Perform visual testing. Expected pic & actual differ
test.only("visual", async({page})=>{
    //await page.goto("https://www.rediff.com/")
    await page.goto("https://selenium.qabible.in/")
    //threshold: 0.2 means up to 20% pixel difference is allowed (usually you use something small like 0.01)
    expect(await page.screenshot()) .toMatchSnapshot('obsqura.png',{ threshold: 0.2 }) // build in function aanu page.screenshot() // toMatchSnapshot - this is an assertion
    //npx playwright test --update-snapshots - To update the base screenshot give this in the terminal
});
