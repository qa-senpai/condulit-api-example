import { expect, mergeTests } from '@playwright/test';
import { test } from './unique-fixture';
import { test as base } from './base-fixture';

const mergedTests = mergeTests(test, base);

test.describe('suite 1', () => {
  mergedTests.use({ email: 'psp@gm.com' });

  mergedTests('navigate to home page, nav should be visible', async ({ token }) => {
    console.log(token);
  });
});

test.describe('suite 2', () => {
  mergedTests.use({ email: 'psp111@gm.com' });

  mergedTests('navigate t111o home page, nav should be visible', async ({ user1Email }) => {
    // eslint-disable-next-line playwright/no-standalone-expect
    expect(true, 'This is should be true').toBeTruthy();
  });
});
