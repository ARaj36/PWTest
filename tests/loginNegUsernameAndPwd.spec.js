import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('meyself');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('psfhs3234');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#error')).toBeVisible();
  const erromsgloc = "//div[@id='error']";
  const errorMessageText = page.locator(erromsgloc); 
  if (errorMessageText && typeof errorMessageText === 'string' && errorMessageText.includes('Your password is invalid!')) {
    console.log('Error message text is correct: "Your password is invalid!"');
  } else {
    console.log('Error message text is incorrect or not found');
  }
  
});