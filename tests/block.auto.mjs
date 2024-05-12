import { test as auto, expect, selectors } from '@playwright/test';

import bl from "../data/bl.mjs";

selectors.setTestIdAttribute('data-e2e');

bl.forEach((username) => {
  auto(`blocking ${username}`, async ({ page }) => {
    await page.goto(`https://www.tiktok.com/@${username}`);
    await page.getByLabel('Actions').click();
    await page.getByLabel('Block').click();
    await page.locator('#tux-portal-container').getByRole('button', { name: 'Block' }).click();
  });
});
