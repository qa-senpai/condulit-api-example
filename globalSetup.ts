import { chromium, expect, request, type FullConfig } from "@playwright/test";
import { SignInPage } from "./app/ui/pages/SignInPage";

async function globalSetup(config: FullConfig) {
  console.log("--starting global setup--");
  const browser = await chromium.launch();
  const context = await browser.newContext({
    baseURL: "https://demo.learnwebdriverio.com",
  });
  const page = await context.newPage();
  const signInPage = new SignInPage(page);

  await signInPage.navigateToSignInPage();
  await signInPage.fillInputFields({ email: "psp@gm.com", password: "1234" });
  await signInPage.clickSignUpButton();
  await expect(page.locator(`[href='/']`).first()).toBeVisible();

  await page.waitForTimeout(3000);
  await page.context().storageState({ path: "./storageState.json" });
  console.log("--finishing global setup--");
}

export default globalSetup;
