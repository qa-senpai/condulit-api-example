import { chromium, expect, type FullConfig } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { RegistrationPage } from "./app/ui/pages/RegisterPage";

export function createRandomUserData() {
  return {
    username: faker.person.firstName().toLowerCase(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const userData = createRandomUserData();
  const registerPage = new RegistrationPage(page);
  await page.goto("https://demo.learnwebdriverio.com/register");
  await registerPage.registerUser(userData);

  await expect(page.locator('[data-qa-id="site-nav"]')).toContainText(
    userData.username
  );

  await page
    .context()
    .storageState({ path: ".auth/storage-state.json" as string });

  await browser.close();
}

export default globalSetup;
