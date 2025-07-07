import { test, expect } from "@playwright/test";

test("navigate to home page, nav should be visible", async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com");
  await expect(page.getByTestId("site-nav")).toBeVisible();
});
