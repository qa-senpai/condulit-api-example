import test, { expect } from "@playwright/test";

/**
 * Цей файл демонструє, як використовувати API запити в Playwright для отримання токена аутентифікації.
 * Це корисно для швидкого налаштування стану користувача без використання UI.
 */

// Приклад використання нативного fetch API (для порівняння або налагодження поза Playwright)
fetch("https://conduit-api.learnwebdriverio.com/api/users/login", {
  headers: {
    accept: "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,uk;q=0.8",
    "content-type": "application/json;charset=UTF-8",
    "sec-ch-ua":
      '"Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    Referer: "https://demo.learnwebdriverio.com/",
  },
  body: '{"user":{"email":"psp1@gm.com","password":"1234"}}',
  method: "POST",
});

/*
{
    "user": {
        "username": "psp",
        "email": "psp@gm.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MzlhOWExZGI0MTIyYTUwNGYzZDEwOCIsInVzZXJuYW1lIjoicHNwIiwiZXhwIjoxNzcwNTcwNjU3LCJpYXQiOjE3NjUzODY2NTd9.AL4c4Q44lVa_9wTms0V40cEzU3P1e1LM7NgOCu1db7k"
    }
}
*/

// http client

// Тест на реєстрацію нового користувача та отримання токена
test("get auth token", async ({ request }) => {
  // Відправляємо POST запит на створення користувача
  const response = await request.post(
    "https://conduit-api.learnwebdriverio.com/api/users",
    {
      data: {
        user: { email: "psp1@gm.com", password: "1234", username: "psp1" },
      },
      failOnStatusCode: true,
    }
  );

  const responseBody = await response.json();
  const token = responseBody.user.token;

  console.log(token);

  expect(token).toBeTruthy();
});

// Тест на логін існуючого користувача та отримання токена
test("login and get auth token", async ({ request }) => {
  // Відправляємо POST запит на логін
  const response = await request.post(
    "https://conduit-api.learnwebdriverio.com/api/users/login",
    {
      data: {
        user: { email: "psp1@gm.com", password: "1234" },
      },
      failOnStatusCode: true,
    }
  );

  const responseBody = await response.json();
  const token = responseBody.user.token;

  console.log(token);

  expect(token).toBeTruthy();

  // Чекаємо 3 секунди (просто для демонстрації)
  await new Promise((r) => setTimeout(r, 3000));

  //   await page.waitForTimeout(3000);

  // Отримуємо поточний стан сховища (cookies, local storage) з контексту запиту
  const storageState = await request.storageState();
  console.log(storageState);

  console.log("");
});
