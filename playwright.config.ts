import {defineConfig, devices} from '@playwright/test'

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  forbidOnly: !!process.env.CI,
  fullyParallel: true,
  reporter: `html`,
  retries: process.env.CI ? 2 : 0,
  testDir: `./src`,
  timeout: 60000,
  workers: 1,
  use: {
    trace: `on-first-retry`,
  },
  projects: [
    {
      name: `chromium`,
      use: {...devices[`Desktop Chrome`]},
    },
  ],
})
