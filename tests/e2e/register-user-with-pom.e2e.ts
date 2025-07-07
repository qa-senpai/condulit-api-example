import { RegistrationPage } from "../../app/ui/pages/RegisterPage";
import { test } from "@playwright/test";

test("use existing storage state ", async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com");
});

test("register user - get state", async ({ page, context }) => {
  const registerPage = new RegistrationPage(page);

  await page.goto("https://demo.learnwebdriverio.com/register");
  // await registerPage.registerUser(userRegistrationData);
  // await expect(page.locator('[data-qa-id="site-nav"]')).toContainText(
  //   userRegistrationData.username
  // );

  const state = await context.storageState({
    path: ".auth/storage-state.json",
  });
});

// test.use({ storageState: ".auth/storage-state.json" });

test("register user - should be registered", async ({ page, request }) => {
  // const registerPage = new RegistrationPage(page);
  // const userRegistrationData = {
  //   username: "psp123",
  //   email: "test@gm.com",
  //   password: "125115",
  // };
  // await page.goto("https://demo.learnwebdriverio.com/register");
  // await registerPage.usernameInputLocator.fill(userRegistrationData.username);
  // await registerPage.emailInputLocator.fill(userRegistrationData.email);
  // await registerPage.passwordInputLocator.fill(userRegistrationData.password);
  // await registerPage.signUpButtonLocator.click();
  // await page
  //   .getByRole("textbox", { name: "Username" })
  //   .fill(userRegistrationData.username);
  // await page
  //   .getByRole("textbox", { name: "Email" })
  //   .fill(userRegistrationData.email);
  // await page
  //   .getByRole("textbox", { name: "Password" })
  //   .fill(userRegistrationData.password);
  // await page.getByRole("button", { name: "Sign up" }).click();
  // await page.getByTestId("layout-header-user-logon").click();
  // await expect(page.getByRole("link", { name: "psp123" })).toBeVisible();
  // await request.storageState();
});
