import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegistrationPage extends BasePage {
  private usernameInputLocator: Locator;
  private emailInputLocator: Locator;
  private signUpButton: Locator;
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
    this.signUpButton = this.page.locator(".btn");
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
