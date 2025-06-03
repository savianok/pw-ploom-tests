import { BasePage } from "./basePage";
import { test } from "@playwright/test";

export class ShopPage extends BasePage {
  async openProductBySKU(sku: string) {
    const productSelector = `[data-sku="${sku}"] a`;

    await test.step(`Open product by SKU: ${sku}`, async () => {
      await this.page.mouse.wheel(0, 500);
      await this.page.waitForTimeout(1000);
      await this.page.locator(productSelector).first().click({ force: true });
    });
  }
}
