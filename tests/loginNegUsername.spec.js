import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('incorrectUser');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  const errorMessageVisible = await page.isVisible('.error-message');  // Check visibility of the error message
  if (errorMessageVisible) {
    console.log('Error message is displayed');
  } else {
    console.log('Error message is not displayed');
  }
  // Verify the error message text is 'Your username is invalid!'
   const erromsgloc = "//div[@id='error']";
  const errorMessageText = page.locator(erromsgloc); 
  if (errorMessageText && typeof errorMessageText === 'string' && errorMessageText.includes('Your username is invalid!')) {
    console.log('Error message text is correct: "Your username is invalid!"');
  } else {
    console.log('Error message text is incorrect or not found');
  }
  await expect(page.locator('#error')).toContainText('Your username is invalid!');
});