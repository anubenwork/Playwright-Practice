const test = require('@playwright/test')
test('iframe handling',async({page}) =>
{
 await page.goto('https://demoqa.com/frames')
 const iframelocator = await page.locator('#frame1')
 console.log(await iframelocator.locator('#sampleHeading').textContent())
 await page.pause()
}
);