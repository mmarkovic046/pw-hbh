import { Page } from '@playwright/test';

export const LoginPageLocators = {
  emailInput: (page: Page) => page.getByPlaceholder("Email, phone, or Skype"),
  passwordInput: (page: Page) => page.getByPlaceholder("Password"),
  signInButton: (page: Page) => page.getByRole("button", { name: "Sign in" }),
  nextButton: (page: Page) => page.getByRole("button", { name: "Next" }),
  noButton: (page: Page) => page.getByRole("button", { name: "No" }),
};
