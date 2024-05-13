import { test as auto, expect, selectors } from '@playwright/test';


const followList = [...(new Map([
  [undefined, new Set([
    ...(await Promise.all([
      (await import("../data/pro-pali.mjs")).default,
      (await import("../data/congo-aware.mjs")).default,
      (await import("../data/covid-conscious.mjs")).default,
      (await import("../data/block-party.mjs")).default
    ])).flat()
  ])],
  ["pali", new Set((await import("../data/pro-pali.mjs")).default)],
  ["congo", new Set((await import("../data/congo-aware.mjs")).default)],
  ["c19", new Set((await import("../data/covid-conscious.mjs")).default)],
  ["bp", new Set((await import("../data/block-party.mjs")).default)]
]).get(process.env.SCOPE))];

console.log(followList);

followList.forEach((username) => {
  auto(`followiing ${username}`, async ({ page }) => {
    await page.goto(`https://www.tiktok.com/@${username}`); // Go to the profile of the user who is to be blocked.
    // TODO: check if the user is already blocked

    selectors.setTestIdAttribute('data-e2e');
    await expect(page.getByTestId("user-title")).toBeVisible(); // Wait for the user title to be visible.

    selectors.setTestIdAttribute('data-e2e');
    try {
      await page.getByTestId("follow-button").click({
        timeout: 4000
      }); // Click the "Follow" button.
    } catch (e) {
      // The user is already followed.
      return;
    }
    // The follow has been successful.
    // TODO: assert the user is followed
  });
});
