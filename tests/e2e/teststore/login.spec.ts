import test, { expect, request } from "@playwright/test";

test("test", async ({ request, browser, page }) => {
  const response = await request.post(
    "https://teststore.automationtesting.co.uk/index.php?controller=authentication?back=https%3A%2F%2Fteststore.automationtesting.co.uk%2Findex.php",
    {
      data: "back=https%3A%2F%2Fteststore.automationtesting.co.uk%2Findex.php&email=vasilver%40gmail.com&password=123qwe&submitLogin=1",
      failOnStatusCode: true,
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "en-US,en;q=0.9,uk;q=0.8",
        "cache-control": "max-age=0",
        "content-type": "application/x-www-form-urlencoded",
        priority: "u=0, i",
        "sec-ch-ua":
          '"Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        cookie:
          "PHPSESSID=53d840f878f452a62d766f0acd5af2fd; ajs_anonymous_id=76360a9d-1f70-4dbd-b15e-b69bba357272; PrestaShop-bd73d297b14c5070734013be8110710b=def50200ff9371c31dbb801686f4e9ae853fcd170078339c5cc5020cac61f0bbc98dd3fbbc6ac59a530b9bef81ee3bc0d31f978f1ba7ad9302f096e74fb89ea2463112aed755d782e7883927bc651fa3cbbc448f569eabf0926077c97ef5864b7ed8f9e3f3494c7937c641a780b26d4157e0f46687fc3e9ddfd696fdd935f5c6d51171c2603b4774aa7cd9bde1183208eae971a56c853ba80d19b35200ad01f07374bc6b8ad7c1f1eb3d2f244389051245cb8b2818560c34ba4274a13990b87a6c7e36d558314f3f7251d1cce314a78f01755be4d67b86c7f70e000114a3c32a43416a86a2a1c7cb630213d6b86ef45d3230c1fde318be4a9fbad92d760cf43112166b1846e961d0f5d197cdf353596530f5d164fb75c2ef3e759931a700dba854fe",
        Referer:
          "https://teststore.automationtesting.co.uk/index.php?controller=authentication?back=https%3A%2F%2Fteststore.automationtesting.co.uk%2Findex.php",
      },
    }
  );

  expect(response.status()).toBe(200);
  await page.waitForTimeout(2 * 1000);

  const state = await request.storageState();

  const context = await browser.newContext({
    storageState: state,
  });

  const page1 = await context.newPage();

  await page1.goto("https://teststore.automationtesting.co.uk/");

  console.log("1");
});
