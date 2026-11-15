import { expect, test } from '@playwright/test';

test('primary navigation opens the About page', async ({ page }) => {
  await page.goto('/home');
  await expect(page.locator('.logo')).toHaveText('My App');

  await page.getByRole('link', { name: 'About', exact: true }).click();

  await expect(page).toHaveURL(/\/about$/);
  await expect(page.locator('app-about')).toContainText('about works!');
});
