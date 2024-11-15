import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { baseURL, user } from "../../playwright.config";
import { NavigationPage } from "../pages/NavigationPage";
import { AddEmployee } from "../pages/employees/AddEmployee";

test.describe("Test Employee", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(baseURL);
    const loginPage = new LoginPage(page);
    await loginPage.login(user.email, user.password);
    await loginPage.verifySuccessfulLogin();

    console.log("URL:", baseURL);
    console.log("E-mail:", user.email);
  });

  test("Add Employee", async ({ page }) => {
    await new NavigationPage(page).employeePage();
    await new AddEmployee(page).addEmployee();
  });
});
