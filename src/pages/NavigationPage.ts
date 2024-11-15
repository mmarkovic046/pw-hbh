import { expect, Page } from "@playwright/test";
import { EmployeePageLocators } from "../locators/navigationPageLocators";

export class NavigationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async employeePage() {
    await expect(EmployeePageLocators.navigationMenu(this.page)).toBeVisible();
    await EmployeePageLocators.navigationMenu(this.page).click();
    await expect(EmployeePageLocators.hRPageButton(this.page)).toBeVisible();
    await EmployeePageLocators.hRPageButton(this.page).click();
    await expect(EmployeePageLocators.selectCompany(this.page)).toBeVisible();
    await EmployeePageLocators.selectCompany(this.page).click();
    await EmployeePageLocators.companyValue(this.page).click();
    await expect(EmployeePageLocators.employeesTab(this.page)).toBeVisible();
    await EmployeePageLocators.employeesTab(this.page).click();
  }
}
