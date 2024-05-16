import { test as auto, expect, selectors } from '@playwright/test';

import digitineList from "../data/digitine.mjs";

digitineList.forEach((username) => {
  auto(`blocking ${username}`, async ({ page }) => {
    await page.goto(`https://www.tiktok.com/@${username}`); // Go to the profile of the user who is to be blocked.
    // TODO: check if the user is already blocked
    await new Promise(r => setTimeout(r, 400));
    await page.getByLabel('Actions').click(); // Click the three dots to open the actions menu.
    await new Promise(r => setTimeout(r, 800));
    try {
      await page.getByLabel('Block', { exact: true }).click({
        timeout: 1200
      }); // Click the "Block" button.
      await new Promise(r => setTimeout(r, 800));
    } catch (e) {
      // The user is already blocked.
      return;
    }
    // The modal is expected to open.
    await page.locator('#tux-portal-container').getByRole('button', { name: 'Block' }).click(); // Click the "Block" button in the modal.
    // The block has been successful.
    // TODO: asser the user is blocked
  });
});
