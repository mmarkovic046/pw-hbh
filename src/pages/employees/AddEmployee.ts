import { Page, expect } from "@playwright/test";
import { AddEmployeePageLocators } from "../../locators/employees/addEmployeeLocators";
import { generateRandomEmail } from "../../utils/randomEmail";
import { generateRandomPhoneNumber } from "../../utils/randomPhoneNumber";
import { getTodayDate } from "../../utils/todayDate";
import { generateRandomFirstName } from "../../utils/randomName";
import { generateRandomLastName } from "../../utils/randomLastName";
import * as path from "path";
import * as fs from "fs";

export class AddEmployee {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addEmployee() {
    await expect(
      AddEmployeePageLocators.addEmployeePageButton(this.page)
    ).toBeVisible();
    await AddEmployeePageLocators.addEmployeePageButton(this.page).click();
    await expect(AddEmployeePageLocators.dialogTitle(this.page)).toBeVisible();
    await AddEmployeePageLocators.firstNameField(this.page).fill(
      generateRandomFirstName()
    );
    await AddEmployeePageLocators.lastNameField(this.page).fill(
      generateRandomLastName()
    );
    await AddEmployeePageLocators.middleNameFiled(this.page).fill("Test");
    await AddEmployeePageLocators.emailField(this.page).fill(
      generateRandomEmail()
    );
    await AddEmployeePageLocators.mobilePhoneNumberField(this.page).fill(
      generateRandomPhoneNumber()
    );
    await expect(
      AddEmployeePageLocators.phoneNumberLabel(this.page)
    ).toBeVisible();
    await AddEmployeePageLocators.phoneNumberField(this.page).fill(
      "222-333-444"
    );
    await AddEmployeePageLocators.employmentDateDatePicker(this.page).fill(
      getTodayDate()
    );
    await AddEmployeePageLocators.dateOfBirthDatePicker(this.page).fill(
      "01.01.1990"
    );
    await expect(
      AddEmployeePageLocators.chooseCoverPictureLabel(this.page)
    ).toBeVisible();
    await expect(
      AddEmployeePageLocators.uploadCoverPictureButton(this.page)
    ).toBeVisible();
    const picPath = path.resolve(
      __dirname,
      "../../tests/assets/employeeCoverPic.png"
    );
    if (!fs.existsSync(picPath)) {
      console.log(`Resolved file path: ${picPath}`);
      throw new Error(`File not found at path: ${picPath}`);
    }
    await AddEmployeePageLocators.uploadCoverPictureInput(
      this.page
    ).setInputFiles(picPath);
    await expect(AddEmployeePageLocators.genderLabel(this.page)).toBeVisible();
    await AddEmployeePageLocators.genderFiled(this.page).selectOption({
      value: "3",
    });
    await expect(
      AddEmployeePageLocators.leadingTitleLabel(this.page)
    ).toBeVisible();
    await AddEmployeePageLocators.leadingTitleField(this.page).fill(
      "LeadingTitle"
    );
    await expect(
      AddEmployeePageLocators.trailingTitleLabel(this.page)
    ).toBeVisible();
    await AddEmployeePageLocators.trailingTitleField(this.page).fill(
      "TrailingTitle"
    );
    await expect(AddEmployeePageLocators.addressLabel(this.page)).toBeVisible();
    await AddEmployeePageLocators.addressField(this.page).fill(
      "Cara Dusana 66"
    );
    await expect(
      AddEmployeePageLocators.birthplaceLabel(this.page)
    ).toBeVisible();
    await AddEmployeePageLocators.birthplaceField(this.page).fill("Beograd");
    await expect(
      AddEmployeePageLocators.workplaceLabel(this.page)
    ).toBeVisible();
    await AddEmployeePageLocators.workplaceField(this.page).fill(
      "Novi Beograd"
    );
    await expect(
      AddEmployeePageLocators.citizenshipLabel(this.page)
    ).toBeVisible();
    await AddEmployeePageLocators.citizenshipField(this.page).click();
    await this.page.locator('div[role="option"]:has-text("Serbia")').click();
    await expect(
      AddEmployeePageLocators.passportNumberLabel(this.page)
    ).toBeVisible();
    await AddEmployeePageLocators.passportNumberField(this.page).fill(
      "PN0123456789"
    );
    await expect(
      AddEmployeePageLocators.personIdentificationNumberLabel(this.page)
    ).toBeVisible();
    await AddEmployeePageLocators.personIdentificationNumberField(
      this.page
    ).fill("PIN0123456789");
    await expect(
      AddEmployeePageLocators.socialSecurityNumberLabel(this.page)
    ).toBeVisible();
    await AddEmployeePageLocators.socialSecurityNumberField(this.page).fill(
      "SSN0123456789"
    );
    await expect(
      AddEmployeePageLocators.organizationUnitLabel(this.page)
    ).toBeVisible();
    await AddEmployeePageLocators.organizationUnitField(this.page).fill(
      "OU0123456789"
    );
    await expect(
      AddEmployeePageLocators.dateOfExitLabel(this.page)
    ).toBeVisible();
    await AddEmployeePageLocators.dateOfExitDatePicker(this.page).fill(
      "31.12.2024."
    );
    await expect(AddEmployeePageLocators.salaryLabel(this.page)).toBeVisible();
    await AddEmployeePageLocators.salaryField(this.page).fill("800");
    await expect(
      AddEmployeePageLocators.currencyLabel(this.page)
    ).toBeVisible();
    await AddEmployeePageLocators.currencyField(this.page).click(),
      await this.page
        .locator('div[role="option"]:has-text("Serbian Dinar")')
        .click();

    await expect(
      AddEmployeePageLocators.isInactiveLabel(this.page)
    ).toBeVisible();
    await expect(
      AddEmployeePageLocators.documentListLabel(this.page)
    ).toBeVisible();

    const docFilePath = path.resolve(
      __dirname,
      "../../tests/assets/documentTest.docx"
    );
    if (!fs.existsSync(docFilePath)) {
      console.log(`Resolved file path: ${docFilePath}`);
      throw new Error(`File not found at path: ${docFilePath}`);
    }
    await AddEmployeePageLocators.uploadCoverDocumentInput(
      this.page
    ).setInputFiles(docFilePath);
    await expect(
      AddEmployeePageLocators.dependentCoveragesLabel(this.page)
    ).toBeVisible();
    await expect(AddEmployeePageLocators.saveButton(this.page)).toBeVisible();
    await AddEmployeePageLocators.saveButton(this.page).click();
    await expect(
      AddEmployeePageLocators.successMessage(this.page)
    ).toBeVisible();
    const messageText = await AddEmployeePageLocators.successMessage(
      this.page
    ).textContent();
    expect(messageText).toContain("Employee added successfully");
    const ariaLabel = await this.page
      .getByRole("img", { name: "available" })
      .nth(0).getAttribute("aria-label");
    expect(ariaLabel).toBe("available");
  }
}
