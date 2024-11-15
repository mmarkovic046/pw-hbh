import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

const ENV = process.env.ENV || "dev";
const USER_TYPE = process.env.USER_TYPE || "GlobalAdmin";

const configData = {
  dev: {
    baseURL: process.env.DEV_BASE_URL || "https://hbh.grecoit.online",
    users: {
      GlobalAdmin: {
        email:
          process.env.DEV_GLOBALADMIN_EMAIL || "testjohndoe@grecoit.online",
        password:
          process.env.DEV_GLOBALADMIN_PASSWORD || "hL5jU+_BfP%2ugLZU*eC",
      },
      CountryAdmin: {
        email: process.env.DEV_COUNTRYADMIN_EMAIL || "g.spitzer@grecoit.online",
        password:
          process.env.DEV_COUNTRYADMIN_PASSWORD || "[YAXOE9D5!^nD71}}V&`",
      },
      ReadOnlyCountryAdmin: {
        email:
          process.env.DEV_READONLYCOUNTRYADMIN_EMAIL || "dev01@grecoit.online",
        password:
          process.env.DEV_READONLYCOUNTRYADMIN_PASSWORD ||
          "P37c5L9qYBq'?2r+Eb;$",
      },
      CompanyAdmin: {
        email:
          process.env.DEV_COMPANYADMIN_EMAIL ||
          "r.tomaseviciute@grecoit.online",
        password: process.env.DEV_COMPANYADMIN_PASSWORD || "2*2X1t2j4Nqz",
      },
    },
  },
  // test: {
  //   baseURL: process.env.TEST_BASE_URL || "url",
  //   users: {
  //     External: {
  //       email:
  //         process.env.TEST_EXTERNAL_EMAIL || "email",
  //       password: process.env.TEST_EXTERNAL_PASSWORD || "password",
  //     },
  //     Admin: {
  //       email: process.env.TEST_ADMIN_EMAIL || "email",
  //       password: process.env.TEST_ADMIN_PASSWORD || "password",
  //     },
  //   },
  // },
};

export const selectedConfig = configData[ENV];
export const baseURL = selectedConfig.baseURL;
export const selectedUser = selectedConfig.users[USER_TYPE];

export default defineConfig({
  testDir: "./src/tests",

  // Timeout podešavanja
  timeout: 90000, // Maksimalno trajanje jednog testa
  expect: {
    timeout: 30000, // Timeout za expect asercije
  },
  use: {
    actionTimeout: 30000, // Timeout za pojedinačne akcije
    navigationTimeout: 60000, // Timeout za navigaciju i učitavanje stranica
    baseURL: baseURL,
    trace: "on-first-retry",
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    viewport: null,
    launchOptions: {
      args: ["--start-maximized", "--window-size=1920,1080"],
    },
    ignoreHTTPSErrors: true,
  },

  fullyParallel: true,
  workers: process.env.CI ? 1 : 2,
  retries: process.env.CI ? 2 : 0,

  forbidOnly: !!process.env.CI,
  reporter: "html",

  projects: [
    {
      name: "Microsoft Edge",
      use: { ...devices["Desktop Edge"], channel: "msedge" },
    },

    // {
    //   name: "chromium",
    //   use: { ...devices["Desktop Chrome"] },
    // },
    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },
    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },
  ],
});

export const users = selectedConfig.users;
export const user = selectedUser;
