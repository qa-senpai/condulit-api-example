import { ArticleController } from "../../app/api/ArticleController/ArticleController";
import { UserController } from "../../app/api/UserController/UserController";
import { test as base, expect } from "@playwright/test";
import { UserResponse } from "../../app/api/UserController/UserTypes";
import * as fs from "fs";
import { request as newRequest } from "@playwright/test";

type ApiControllers = {
  userController: UserController;
  articleController: ArticleController;
  token: string;
  userToLogin: string | undefined;
};

export const test = base.extend<ApiControllers>({
  userToLogin: undefined,

  request: async ({ request, userToLogin }, use) => {
    if (userToLogin) {
      if (fs.existsSync(".auth/token.json")) {
        const token = fs.readFileSync(".auth/token.json", { encoding: "utf8" });

        const context = await newRequest.newContext({
          extraHTTPHeaders: {
            authorization: `Token ${token}`,
          },
        });

        await use(context);
      } else {
        const response = await request.post(
          "https://conduit-api.learnwebdriverio.com/api/users/login",
          {
            data: {
              user: {
                email: userToLogin,
                password: process.env.CONDULIT_DEFAULT_PASSWORD,
              },
            },
            failOnStatusCode: true,
          }
        );

        const responseJson: UserResponse = await response.json();
        const token = responseJson.user.token;
        fs.writeFileSync(".auth/token.json", token!);

        const context = await newRequest.newContext({
          extraHTTPHeaders: {
            authorization: `Token ${token}`,
          },
        });

        await use(context);
      }
    } else await use(request);

    // cleanup
    if (global.registeredArticles.length > 0) {
      const token = fs.readFileSync(".auth/token.json", { encoding: "utf8" });

      const context = await newRequest.newContext({
        extraHTTPHeaders: {
          authorization: `Token ${token}`,
        },
      });

      const articleController = new ArticleController(context);

      for (const slug of global.registeredArticles) {
        await articleController.delete(slug);
      }
    }
  },

  userController: async ({ request }, use) => {
    const userController = new UserController(request);

    await use(userController);
  },
  articleController: async ({ request }, use) => {
    const articleController = new ArticleController(request);

    await use(articleController);
  },
});

export default expect;
