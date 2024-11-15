import { Page, expect } from "@playwright/test";
import { LoginPageLocators } from "../locators/loginLocators";

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(email: string, password: string) {
    await LoginPageLocators.emailInput(this.page).fill(email);
    await LoginPageLocators.nextButton(this.page).click();
    await LoginPageLocators.passwordInput(this.page).fill(password);
    await LoginPageLocators.signInButton(this.page).click();
    await LoginPageLocators.noButton(this.page).click();
  }
  async verifySuccessfulLogin() {
    await expect(this.page.getByText("Health & Benefits Hub")).toBeVisible();
    await expect(
      this.page.locator('img[alt="Health & Benefits Hub"]')
    ).toBeVisible();
  }
}
