import { Page } from "@playwright/test";
import { text } from "stream/consumers";

export const EmployeePageLocators = {
  navigationMenu: (page: Page) =>
    page.locator(
      'button[aria-describedby^="tooltip"][type="button"].fui-Button'
    ),
  hRPageButton: (page: Page) => page.getByText("HR"),
  selectCompany: (page: Page) => page.getByRole("combobox"),
  employeesTab: (page: Page) =>
    page.locator('button[role="tab"][value="Employees"]'),
  companyValue: (page: Page) => page.locator("text=WÖRNER Tech Co"),
};
