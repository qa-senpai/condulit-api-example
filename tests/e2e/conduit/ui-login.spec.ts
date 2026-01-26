import { test, expect, Request, Response } from '@playwright/test';
import { HomePage } from '../../../app/ui/pages/HomePage';
import { SignInPage } from '../../../app/ui/pages/SignInPage';

// базова авторизація але з інкапсуляцією в ПОМ
test('auth via ui - pom scenario', async ({ page }) => {
  const loginPage = new SignInPage(page);

  await loginPage.navigateToSignInPage();
  await loginPage.fillInputFields({
    email: 'psp@gm.com',
    password: '1234',
  });

  const promise = page.waitForResponse('**/users/login');
  await loginPage.clickSignUpButton();
  await promise;

  //https://conduit-api.learnwebdriverio.com/api/users/login
  //**/login
  //**/users/login

  // *
  // **

  await page.getByRole('link', { name: '  New Article' }).click();
  await page.getByRole('textbox', { name: 'Write your article (in' }).fill('t');
  await page.getByTestId('editor-title').fill('test');

  const promise1 = page.waitForResponse('**/articles');
  await page.getByTestId('editor-publish').click();
  const response = await promise1;

  const slug = (await response.json()).article.slug;

  console.log(slug);
  expect(true).toBeTruthy();

  const requests = await page.requests();

  const filteredRequest = requests.filter(request => {
    if (request.timing().responseEnd > 100) {
      console.warn(`${request.url()} takes  ${request.timing().responseEnd} to execute`);
      return request;
    }
  });

  // console.log(filteredRequest);
});

test(`auth via 1 - pom scenario - with fixture`, async ({ signInPage, page, context }) => {
  await signInPage.navigateToSignInPage();
  await signInPage.fillInputFields({ email: 'psp@gm.com', password: '1234' });
  await signInPage.clickSignUpButton();
  await expect(page.locator(`[href='/']`).first()).toBeVisible();

  //

  await page.waitForTimeout(3000);

  await context.storageState({ path: './storageState.json' });
});

// test.use({ storageState: "storageState.json" });
test('auth via storageState', async ({ page, context }) => {
  const homePage = new HomePage(page);

  await homePage.navigateTo();

  const promise = context.waitForEvent('page');
  await page.locator('').click();
  const page2 = await promise;
  await page2.bringToFront();

  const homePage2 = new HomePage(page2);

  await expect(page.locator(`[href='/']`).first()).toBeVisible();
});
