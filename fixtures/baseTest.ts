import { test as base } from "@playwright/test";
import { HomePage } from "../pages/homePage";

const test = base.extend({
  page: async ({ page }, use) => {
    const home = new HomePage(page);
    await home.navigateToHomePage();
    await home.handlePopups();
    await home.rejectAllCookies;
    await use(page);
  },
});

export { test };
