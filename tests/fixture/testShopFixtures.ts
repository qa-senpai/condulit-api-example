import { ArticleController } from '../../app/api/ArticleController/ArticleController';
import { UserController } from '../../app/api/UserController/UserController';
import { test as base, expect } from '@playwright/test';
import { UserResponse } from '../../app/api/UserController/UserTypes';
import * as fs from 'fs';
import { request as newRequest } from '@playwright/test';

export const test = base.extend({
  page: async ({ request, browser }, use) => {
    const response = await request.post(
      'https://teststore.automationtesting.co.uk/index.php?controller=authentication?back=https%3A%2F%2Fteststore.automationtesting.co.uk%2Findex.php%3Fcontroller%3Dsearch%26s%3Daccessories',
      {
        data: 'back=https%3A%2F%2Fteststore.automationtesting.co.uk%2Findex.php%3Fcontroller%3Dsearch%26s%3Daccessories&email=vasilver%40gmail.com&password=123qwe&submitLogin=1',
        headers: {
          accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          'cache-control': 'max-age=0',
          'content-type': 'application/x-www-form-urlencoded',
          priority: 'u=0, i',
          'sec-ch-ua': '"Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'document',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-user': '?1',
          'upgrade-insecure-requests': '1',
          cookie:
            'PHPSESSID=4ab215bad06be12ba0afdaab6f95dac5; ajs_anonymous_id=6744fdb2-3fd8-4f1d-9d24-19da48ad529a; PrestaShop-bd73d297b14c5070734013be8110710b=def50200b411cce275472bd8c4f1d28095af7f34a67c54504912a21963ea8630f4d167eb51dcea1b22cf2036d4a9941705a00f911914d8d1375e14b3bffe1d2d05e5eb217572c906773e423d8b9a35ecdb455826f330b4868e53ac7efa00fd0288738e7fa0b139cf9c3f25426cb9b8308247388f674c89f12f2820ab4cb1ef541b0b49fc33fdfe16a180d783fbaa68fec314c798feee933f2f29ef0051deb8cd1efa697a53e9bbb1bbbeaac4e4956e88141ed631029c4dfda2543221c343e52fae8cfcbe39a22b1deafa7a764839e4c844351627858c0f4bbe73b49a406e0f208ca408ce286d9368bb51693a3f5e7a7f5d77186b7e652cc2e35b717747c9c95b16a531db55f2b2bee5c28471d7a4bb82e7069aadb3d8ef81b050091b0db38a825abb14dccd0c171fa8ea8efb67c842397c232ba0c0944a5313887d18a4b8756a208a3af922fdedeaab',
          Referer:
            'https://teststore.automationtesting.co.uk/index.php?controller=authentication?back=https%3A%2F%2Fteststore.automationtesting.co.uk%2Findex.php%3Fcontroller%3Dsearch%26s%3Daccessories',
        },
        failOnStatusCode: true,
      }
    );

    expect(response.status()).toBe(200);

    const state = await request.storageState();
    const context = await browser.newContext({ storageState: state });
    const page = await context.newPage();

    await use(page);
  },
});

export default expect;
