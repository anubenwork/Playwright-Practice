import {test,expect} from '@playwright/test'



 //const year=1997
test('calendar validation',async({page})=>
    {
     await page.goto('https://selenium.qabible.in/index.php');

     await page.getByRole('link',{name:'Date Pickers'}).click();
     await page.getByText('Bootstrap Date Picker').click();

     // Wait for the page to load and element to be visible
await page.waitForLoadState('networkidle'); // waiting added for wdelays caused by network load issue or network issue
await page.locator('input.form-control.datepicker').waitFor({ state: 'visible' }); // calendar open aayi visible aakunna vare wait aakan olla code


await page.locator('#single-input-field').click();
   //  await page.getByLabel('Enter Date').click();  
await page.pause()
    // Click month/year header to switch to months view
//await page.locator('.datepicker-switch').nth(0).click();
//await page.locator("//table[@class='table-condensed']/tbody/tr[1]/td[3]").click()
//await page.pause()
await page.locator("//button[@id='button-one' and @class='btn btn-primary']").click()
// Navigate to correct decade for 1997
const targetYear = 1997;
while (true) {
    const currentDecade = await page.locator('.datepicker-switch').nth(2).textContent();
    const startDecade = parseInt(currentDecade.split('-')[0]);
    
    if (targetYear >= startDecade && targetYear <= startDecade + 9) break;
    
    await page.locator('.prev').nth(0).click();
}

  // Select the target year (1997)
await page.getByText(targetYear.toString(), { exact: true }).click();    
 await page.locator('.month').nth(month-1).click();

     // Select the target date (12)
    await page.getByText(date.toString(), { exact: true }).first().click();
    await page.locator("//button[@id='button-two' and @class='btn btn-primary']").click()
     await page.pause();
});