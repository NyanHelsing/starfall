import dotenv from 'dotenv';

// Read from default ".env" file.
dotenv.config();

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'tests',

  // Reporter to use
  reporter: 'html',

  use: {
    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',
  },

  // Configure projects for major browsers.
  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.mjs/
    },
    {
      name: 'block',
      testMatch: /block\.auto\.mjs/,
      use: {
        ...devices['Desktop Chrome'],
        // Use prepared auth state.
        storageState: 'playwright/.auth/user.json',
      },
      //dependencies: ["setup"],
    },
  ],

});
