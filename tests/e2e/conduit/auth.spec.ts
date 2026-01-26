import { SignInPage } from '../../../app/ui/pages/SignInPage';
import { test, expect, request } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { defaultUserData } from '../../fixture/userData';

const testCases = [
  {
    description: 'Valid credentials - successful login',
    email: defaultUserData.email,
    password: defaultUserData.password,
    expectedSuccess: true,
  },
  {
    description: 'Invalid email - login should fail',
    email: faker.internet.email(),
    password: defaultUserData.password,
    expectedSuccess: false,
  },
  {
    description: 'Invalid password - login should fail',
    email: defaultUserData.email,
    password: faker.internet.password(),
    expectedSuccess: false,
  },
  {
    description: 'Empty fields - login should fail',
    email: '',
    password: '',
    expectedSuccess: false,
  },
  {
    description: 'Boundary: very long email - login should fail',
    email: faker.internet.email().repeat(10), // artificially long
    password: defaultUserData.password,
    expectedSuccess: false,
  },
];

test.describe('Authentication tests', () => {
  testCases.forEach(({ description, email, password, expectedSuccess }) => {
    test(description, async ({ page }) => {
      const loginPage = new SignInPage(page);

      await loginPage.navigateToSignInPage();

      await loginPage.fillInputFields({
        email,
        password,
      });

      await loginPage.clickSignUpButton();

      if (expectedSuccess) {
        // Check for successful login: user link is visible
        await expect(page.getByRole('link', { name: defaultUserData.username })).toBeVisible();
      } else {
        // Check for failure: error message is visible (assuming this text exists)
        await expect(page.locator('text=Email or password is invalid')).toBeVisible();
      }
    });
  });
});

interface UserData {
  user: {
    email: string | null;
    password: string | null;
  };
}

test('some api', async ({ request }) => {
  const body: UserData = {
    user: { email: 'psp@gm.com', password: '11251' },
  };
  await request.post('', { data: body });
});
