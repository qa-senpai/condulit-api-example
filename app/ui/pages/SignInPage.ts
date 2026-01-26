import test, { expect, Locator, Page } from "@playwright/test";

export function step(target: Function, context: ClassMethodDecoratorContext) {
  return function replacementMethod(...args: any) {
    const name = this.constructor.name + "." + (context.name as string);
    return test.step(
      name,
      async () => {
        return await target.call(this, ...args);
      },
      { box: true }
    );
  };
}

export class SignInPage {
  private page: Page;
  private readonly email: Locator;
  private readonly password: Locator;
  private readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email = page.locator('input[placeholder="Email"]');
    this.password = page.locator('input[placeholder="Password"]');
    this.signInButton = page.locator("button");
  }

  async navigateToSignInPage() {
    await this.page.goto("/login"); // baseUrl + аргумент
  }

  async navigateToSignInAndLogin(userData: {
    email: string;
    password: string;
  }) {
    await this.navigateToSignInPage();
    await this.fillInputFields(userData);
    await this.clickSignUpButton();
  }

  async fillInputFields(userData: { email: string; password: string }) {
    const result =
      await test.step("заповнення полів форми логіну", async () => {
        await this.email.fill(`${userData.email}`);
        await this.password.fill(userData.password);

        return userData;
      });

    return result;
  }

  async clickSignUpButton() {
    await this.signInButton.click();
  }
}
