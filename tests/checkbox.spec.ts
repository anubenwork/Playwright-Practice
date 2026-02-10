const test = require('@playwright/test')
import { Page, Locator } from '@playwright/test';
test('verify check box', async({ page }: { page: Page }) => { 
    
     await page.goto("https://selenium.qabible.in/check-box-demo.php")
     const checkbox = await page.locator("//input[@class='form-check-input']")
     await page.pause()
     await checkbox.click()
     
}
);