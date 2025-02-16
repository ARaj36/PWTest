import { test, expect } from "@playwright/test";

test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  const currentURL = page.url();
  if (currentURL.includes('practicetestautomation.com/logged-in-successfully/')) {
    console.log('URL verified: Logged in successfully');
  } else {
    console.log('URL mismatch');
  }
  await expect(page.getByText('Congratulations')).toBeVisible();
  await expect(page.getByText('successfully logged in' )).toBeVisible();
});
