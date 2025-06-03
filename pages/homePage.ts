import { BasePage } from "./basePage";
import { test } from "@playwright/test";
import { en } from "../locales/en";

export class HomePage extends BasePage {
  async navigateToHomePage() {
    await test.step("Go to Ploom UK home page", async () => {
      await this.page.goto("/");
    });
  }

  async handlePopups() {
    await test.step("Handle cookies and age confirmation popups", async () => {
      await this.page
        .getByRole("button", { name: en.buttons.rejectAll })
        .click();
      await this.page.getByText(en.buttons.discoverMore).click();
    });
  }

  async rejectAllCookies() {
    const rejectAllBtn = this.page.getByRole("button", {
      name: en.buttons.rejectAll,
    });
    if (await rejectAllBtn.isVisible()) {
      await rejectAllBtn.click();
    }
  }

  async openShop() {
    await test.step("Click on Shop menu item", async () => {
      await this.page.getByTestId("headerItem-0").click();
    });
  }
}
