import { Article, ArticlesCreation } from "./ArticleTypes";
import { BaseApiController } from "../BaseController";

export class ArticleController extends BaseApiController {
  async createArticle(
    articleData: Article,
    options: {
      registerToCleanup: boolean;
    }
  ) {
    const requestBody: ArticlesCreation = {
      article: articleData,
    };

    const response = await this.request.post("/api/articles", {
      data: requestBody,
      failOnStatusCode: true,
    });

    if (options.registerToCleanup === true) {
      const json = await response.json();
      const slug = json.article.slug;
      global.registeredArticles.push(slug);
    }

    return response;
  }

  async delete(slug: string) {
    const response = await this.request.delete(`/api/articles/${slug}`, {
      failOnStatusCode: true,
    });

    return response;
  }
}
