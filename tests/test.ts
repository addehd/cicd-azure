import { expect, test } from '@playwright/test';

// test('about page has expected h1', async ({ page }) => {
// 	await page.goto('/about');
// 	await expect(page.getByRole('heading', { name: 'About this app' })).toBeVisible();
// });


test('has title', async ({ page }) => {
  await page.goto('/about');
  await expect(page.getByTitle('Issues count')).toHaveText('25 issues');
});
