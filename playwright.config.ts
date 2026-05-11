import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  timeout: 60000,

  use: {
    headless: false,

    launchOptions: {
      slowMo: 1000,
    },

    trace: 'on-first-retry',
  },

  projects: [

    // setup project
    {
      name: 'setup',

      testMatch: /.*auth.setup.ts/,

      use: {
        storageState: undefined,
      },
    },

    // chromium project
    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },

      dependencies: ['setup'],
    },

    // firefox
    {
      name: 'firefox',

      use: {
        ...devices['Desktop Firefox'],
      },
    },

  ],
});