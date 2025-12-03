import { APIRequestContext } from "@playwright/test";

export abstract class BaseApiController {
  request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }
}
