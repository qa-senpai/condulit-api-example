import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegistrationPage extends BasePage {
  private usernameInputLocator: Locator;
  private emailInputLocator: Locator;
  private signUpButton: Button;
  private passwordInputLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInputLocator = this.page.getByRole("textbox", {
      name: "Username",
    });
    this.emailInputLocator = this.page.getByRole("textbox", { name: "Email" });
    this.passwordInputLocator = this.page.getByRole("textbox", {
      name: "Password",
    });
    this.signUpButton = new Button(page, ".btn");
  }

  public async registerUser(userData: UserRegistrationData) {
    await this.usernameInputLocator.fill(userData.username);
    await this.emailInputLocator.fill(userData.email);
    await this.passwordInputLocator.fill(userData.password);
    await this.signUpButton.click();
  }
}

interface UserRegistrationData {
  username: string;
  email: string;
  password: string;
}

class Button implements Clickable {
  page;
  selector;

  constructor(page, selector: string) {
    this.page = page;
    this.selector = selector;
  }

  async click(): Promise<void> {
    await this.page.locator(this.selector).click();
  }

  async isVisible(): Promise<boolean> {
    return this.page.locator(this.selector).isVisible();
  }
}

class Link implements Clickable {
  page;
  selector;

  constructor(page, selector: string) {
    this.page = page;
    this.selector = selector;
  }

  async click(): Promise<void> {
    await this.page.locator(this.selector).click();
  }

  async isVisible(): Promise<boolean> {
    return this.page.locator(this.selector).isVisible();
  }
}

interface Clickable {
  page;
  click(): Promise<void>;
  isVisible(): Promise<boolean>;
}
