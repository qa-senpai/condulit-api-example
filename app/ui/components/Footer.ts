import { Page } from "@playwright/test";

export class Footer {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  clickOnLogo() {}
}
