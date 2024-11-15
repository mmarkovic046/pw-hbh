import { Page } from "@playwright/test";

export const AddEmployeePageLocators = {
  addEmployeePageButton: (page: Page) =>
    page.getByRole("button", { name: "Add Employee" }),
  dialogTitle: (page: Page) =>
    page.getByLabel("Add Employee").getByText("Add Employee"),
  firstNameLabel: (page: Page) => page.getByText("First Name*"),
  firstNameField: (page: Page) => page.locator('input[name="firstName"]'),
  lastNameLabel: (page: Page) => page.getByText("Last Name"),
  lastNameField: (page: Page) => page.locator('input[name="lastName"]'),
  middleNameLabel: (page: Page) => page.getByText("Middle Name"),
  middleNameFiled: (page: Page) => page.locator('input[name="middleName"]'),
  emailLabel: (page: Page) => page.getByText("Email").nth(1),
  emailField: (page: Page) => page.locator('input[name="emailAddress"]'),
  mobilePhoneNumberLabel: (page: Page) => page.getByText("Mobile Phone Number"),
  mobilePhoneNumberField: (page: Page) =>
    page.locator('input[name="mobilePhoneNumber"]'),
  phoneNumberLabel: (page: Page) => page.getByText("Phone Number").nth(1),
  phoneNumberField: (page: Page) => page.locator('input[name="phoneNumber"]'),
  employmentDateLabel: (page: Page) => page.getByText("Employment Date"),
  employmentDateDatePicker: (page: Page) =>
    page.locator('input[role="combobox"][placeholder="Select..."]').nth(0),
  dateOfBirthLabel: (page: Page) => page.getByText("Date of Birth"),
  dateOfBirthDatePicker: (page: Page) =>
    page.locator('input[role="combobox"][placeholder="Select..."]').nth(1),
  chooseCoverPictureLabel: (page: Page) =>
    page.getByText("Choose Cover Picture"),
  uploadCoverPictureButton: (page: Page) =>
    page.getByRole("button", { name: "Upload" }).nth(0),
  uploadCoverPictureInput: (page: Page) => {
    return page.locator('input[type="file"][hidden]').nth(0);
  },
  genderLabel: (page: Page) => page.getByText("Gender"),
  genderFiled: (page: Page) => page.locator('select[name="genderCodeId"]'),
  leadingTitleLabel: (page: Page) => page.getByText("Leading Title"),
  leadingTitleField: (page: Page) => page.locator('input[name="leadingTitle"]'),
  trailingTitleLabel: (page: Page) => page.getByText("Trailing Title"),
  trailingTitleField: (page: Page) =>
    page.locator('input[name="trailingTitle"]'),
  addressLabel: (page: Page) => page.getByText("Address"),
  addressField: (page: Page) => page.locator('input[name="addressNameLine1"]'),
  birthplaceLabel: (page: Page) => page.getByText("Birthplace"),
  birthplaceField: (page: Page) => page.locator('input[name="birthplace"]'),
  workplaceLabel: (page: Page) => page.getByText("Workplace"),
  workplaceField: (page: Page) => page.locator('input[name="workplace"]'),
  citizenshipLabel: (page: Page) => page.getByText("Citizenship"),
  citizenshipField: (page: Page) =>
    page.locator('input[role="combobox"][placeholder="Select..."]').nth(2),
  passportNumberLabel: (page: Page) => page.getByText("Passport Number"),
  passportNumberField: (page: Page) =>
    page.locator('input[name="passportNumber"]'),
  personIdentificationNumberLabel: (page: Page) =>
    page.getByText("Person Identification Number"),
  personIdentificationNumberField: (page: Page) =>
    page.locator('input[name="personIdentificationNumber"]'),
  socialSecurityNumberLabel: (page: Page) =>
    page.getByText("Social Security Number"),
  socialSecurityNumberField: (page: Page) =>
    page.locator('input[name="socialSecurityNumber"]'),
  organizationUnitLabel: (page: Page) =>
    page.getByText("Organization Unit").nth(1),
  organizationUnitField: (page: Page) =>
    page.locator('input[name="orgUnitId"]'),
  dateOfExitLabel: (page: Page) => page.getByText("Date of Exit"),
  dateOfExitDatePicker: (page: Page) =>
    page.locator('input[role="combobox"][placeholder="Select..."]').nth(3),
  salaryLabel: (page: Page) => page.getByText("Salary"),
  salaryField: (page: Page) => page.locator('input[name="salary"]'),
  currencyLabel: (page: Page) => page.getByText("Currency"),
  currencyField: (page: Page) =>
    page.locator('input[role="combobox"][placeholder="Select..."]').nth(4),
  isInactiveLabel: (page: Page) => page.getByText("Is Inactive"),
  isInactiveCheckbox: (page: Page) => page.getByLabel("Is Inactive"),
  documentListLabel: (page: Page) => page.getByText("Document List"),
  uploadCoverDocumentInput: (page: Page) => {
    return page.locator('input[type="file"][hidden]').nth(1);
  },
  uploadDocumentButton: (page: Page) =>
    page.locator('button:has-text("Upload")').nth(1),
  dependentCoveragesLabel: (page: Page) =>
    page.getByText("Dependent Coverages"),
  addDependentButton: (page: Page) =>
    page.getByRole("button", { name: "Add Dependent" }),
  saveButton: (page: Page) => page.getByRole("button", { name: "Save" }),
  successMessage: (page: Page) => page.locator("div.Toastify__toast-body"),
  avatarStatus: (page: Page) => page.getByRole('img', { name: 'available' }).nth(0),
};
