import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com/@tester3145/');
  await page.getByRole('link', { name: 'Favorited Articles' }).click();
  await page.getByRole('link', { name: 'My Articles' }).click();
  await page.getByTestId('follow-toggle').click();
  await page.getByRole('button', { name: '' }).first().click();
  await page.getByRole('link', { name: 'test3141 0 Read more...' }).click();
  await page.getByText('July 9,').nth(1).click();
  await page.getByRole('link', { name: 'tester3145' }).nth(1).click();
  await page.getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
  await page.getByRole('img').first().click();
  await page.getByTestId('profile-username').click();
});