import { test as auto } from '@playwright/test';

auto('test', async ({ page }) => {
  await page.goto('https://www.tiktok.com/explore');
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByLabel('Enter your email*').click();
  await page.getByLabel('Open user account menu').click();
  await page.getByRole('dialog').getByText('me-nyanhelsing').click();
});
