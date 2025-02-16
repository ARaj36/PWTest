import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('incorrectPassword');
  await page.getByRole('button', { name: 'Submit' }).click();
  // Verify the error message text is 'Your password is invalid!'
  const erromsgloc = "//div[@id='error']";
  const errorMessageText = page.locator(erromsgloc); 
  if (errorMessageText && typeof errorMessageText === 'string' && errorMessageText.includes('Your password is invalid!')) {
    console.log('Error message text is correct: "Your password is invalid!"');
  } else {
    console.log('Error message text is incorrect or not found');
  }
  await expect(page.locator('#error')).toContainText('Your password is invalid!');
});