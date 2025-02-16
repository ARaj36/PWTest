import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await expect(page.locator('#form')).toContainText('Password');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('#error').click();
  await expect(page.locator('#error')).toContainText('Your username is invalid!');
});