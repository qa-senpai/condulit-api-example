import { test } from '../../fixture/base-fixture';
import { expect } from '@playwright/test';

test.use({ email: 'psp@gm.com' });
test('navigate to home page, nav should be visible', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByTestId('site-nav')).toBeVisible();
  await page.waitForTimeout(5 * 1000);
});

test('navigate to home1251 page, nav should be visible', {}, async ({ request }) => {
  const response = await request.post(process.env.BASEURL_API + '/api/users/login', {
    data: {
      user: { email: 'test@gm.com', password: '1234' },
    },
    failOnStatusCode: false,
  });
});
