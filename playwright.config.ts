import { defineConfig, devices } from "@playwright/test";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env.staging") });

global.registeredArticles = [];

console.log(process.env.WORKERS_COUNT);
console.log(typeof process.env.WORKERS_COUNT);

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: false,
  // globalSetup: "./globalSetup.ts",
  // globalSetup: require.resolve("./globalSetup.ts"),
  timeout: 15 * 1000,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: Number(process.env.WORKERS_COUNT ? process.env.WORKERS_COUNT : 1),
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    // storageState: ".auth/storage-state.json",
    /* Base URL to use in actions like `await page.goto('/')`. */
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on",
    testIdAttribute: "data-qa-id",
    // baseURL: "https://demo.learnwebdriverio.com/",
    // storageState: "storageState.json",
  },
  /* Configure projects for major browsers */
  projects: [
    {
      name: "e2e",
      use: {
        baseURL: process.env.BASEURL,
      },
      testDir: "tests/e2e",
      testMatch: "**/*.@(spec|test|e2e).?(c|m)[jt]s?(x)",
    },
  ],
});
