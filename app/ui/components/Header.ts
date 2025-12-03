import { Page } from "@playwright/test";

export class Header {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickOnLogo() {}

  async clickOnHome() {}

  async clickOnNewArticle() {}

  async clickOnSetting() {}

  async clickOnSignup() {}

  async clickOnSignin() {}
}
