import { APIRequestContext } from "@playwright/test";
import { Article, ArticlesCreation } from "./ArticleTypes";

export class ArticleController {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async createArticle(
    articleData: Article,
    options: {
      registerToCleanup: boolean;
    }
  ) {
    const requestBody: ArticlesCreation = {
      article: articleData,
    };

    const response = await this.request.post(
      "https://conduit-api.learnwebdriverio.com/api/articles",
      {
        data: requestBody,
        failOnStatusCode: true,
      }
    );

    if (options.registerToCleanup === true) {
      const json = await response.json();
      const slug = json.article.slug;
      global.registeredArticles.push(slug);
    }

    return response;
  }

  async delete(slug: string) {
    const response = await this.request.delete(
      `https://conduit-api.learnwebdriverio.com/api/articles/${slug}`,
      {
        failOnStatusCode: true,
      }
    );
  }
}
