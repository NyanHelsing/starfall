import { test as auto, expect, selectors } from '@playwright/test';

import digitineList from "../data/digitine.mjs";

digitineList.forEach((username) => {
  auto(`blocking ${username}`, async ({ page }) => {
    await page.goto(`https://www.tiktok.com/@${username}`); // Go to the profile of the user who is to be blocked.
    // TODO: check if the user is already blocked
    await page.getByLabel('Actions').click(); // Click the three dots to open the actions menu.
    await page.getByLabel('Block').click(); // Click the "Block" button.
    // The modal is expected to open.
    await page.locator('#tux-portal-container').getByRole('button', { name: 'Block' }).click(); // Click the "Block" button in the modal.
    // The block has been successful.
    // TODO: asser the user is blocked
  });
});
