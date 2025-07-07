import { Page } from "@playwright/test";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export abstract class BasePage {
  protected page: Page;
  header: Header;
  footer: Footer;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.footer = new Footer(page);
  }

  async reload() {
    await this.page.reload();
  }
}
