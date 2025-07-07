import { APIResponse, expect } from "@playwright/test";
import {
  Article,
  ArticlesResponse,
} from "../../app/api/ArticleController/ArticleTypes";
import { test } from "../fixture/api-fixture";
import { RegistrationPage } from "../../app/ui/pages/RegisterPage";

test.use({ userToLogin: "psp123@gm.com" });

test("get article - should return articles list", async ({ request }) => {
  // Arrange Act Assert (AAA)

  // Arrange

  // Act

  // http реквести
  const response: APIResponse = await request.get(
    "https://conduit-api.learnwebdriverio.com/api/articles?offset=0&limit=10",
    {
      failOnStatusCode: true,
    }
  );

  // Assert

  // отримати body респонзу
  const responseJson: ArticlesResponse = await response.json();
  const responseText = await response.text();
  const responseBuffer = await response.body();

  // вбудовані методи масивів
  const dojoArticles = responseJson.articles.filter((value) =>
    value.tagList!.includes("dojo")
  );

  // проста перевірка
  expect(dojoArticles.length).toBeGreaterThanOrEqual(1);
});

test("create article - should be created", async ({ articleController }) => {
  // Arrange
  const requestBody: Article = {
    title: "registered for deletion",
    description: "test",
    body: "## 二级标题",
    tagList: [],
  };

  // Act
  const articleResponse = await articleController.createArticle(requestBody, {
    registerToCleanup: true,
  });

  // Assert
  await expect(articleResponse).toBeOK();
});

test("create article - check it", async ({ page, articleController }) => {
  const registerPage = new RegistrationPage(page);

  await page.goto("https://demo.learnwebdriverio.com/register");

  await registerPage.registerUser({
    email: "a1245ra@gmc.com",
    username: "psp12155122",
    password: process.env.CONDULIT_DEFAULT_PASSWORD!,
  });

  await expect(page.getByRole("link", { name: "psp12155122" })).toBeVisible();

  const storageState = await page.request.storageState();
  const token = storageState.origins[0].localStorage[0].value;

  const response = await articleController.createArticle(
    { title: "asfa" },
    { registerToCleanup: true }
  );

  const responseJson = await response.json();
  const slug = responseJson.article.slug;

  await page.goto(`https://demo.learnwebdriverio.com/articles/${slug}`);
  await expect(page.locator("h1")).toBeVisible();

  const deleteResponse = await page.request.delete(
    `https://conduit-api.learnwebdriverio.com/api/articles/${slug}`,
    {
      headers: {
        authorization: `Token ${token}`,
      },
    }
  );

  console.log(deleteResponse.ok());
});
