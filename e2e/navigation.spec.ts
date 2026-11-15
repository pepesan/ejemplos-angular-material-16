import { expect, test } from '@playwright/test';

test('primary navigation opens the About page', async ({ page }) => {
  await page.goto('/home');
  await expect(page.locator('.logo')).toHaveText('My App');

  await page.getByRole('link', { name: 'About', exact: true }).click();

  await expect(page).toHaveURL(/\/about$/);
  await expect(page.locator('app-about')).toContainText('about works!');
});

test('root and unknown routes redirect to Home', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/\/home$/);

  await page.goto('/not-a-route');
  await expect(page).toHaveURL(/\/home$/);
});

test('mobile navigation closes after following a link', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/home');

  const menuButton = page.getByRole('button', { name: 'Toggle menu' });
  await expect(menuButton).toBeVisible();
  await menuButton.click();
  await expect(page.getByRole('menu')).toBeVisible();
  await page.getByRole('link', { name: 'Home', exact: true }).click();

  await expect(page.getByRole('menu')).toBeHidden();
});

test('the Material menu does not link to an undefined Contact route', async ({ page }) => {
  await page.goto('/matmenu');
  await expect(page.getByRole('link', { name: 'Contact', exact: true })).toHaveCount(0);
});
