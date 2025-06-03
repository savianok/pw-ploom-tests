import { BasePage } from "./basePage";
import { test } from "@playwright/test";
import { en } from "../locales/en";

export class ProductPage extends BasePage {
  private addToCartButton = this.page.getByTestId("pdpAddToProduct");

  private miniCartItemCount = this.page.locator(
    ".CartMiniHeader-module-count-i2EyF",
  );
  checkoutButton = this.page.getByTestId("loginCheckoutButton");

  async addToCart() {
    await test.step("Add the product to cart", async () => {
      await this.addToCartButton.waitFor({ state: "visible", timeout: 10000 });
      await this.addToCartButton.click();
    });
  }

  async getCartItemCountText() {
    return this.miniCartItemCount;
  }

  async openCart() {
    await test.step("Open the cart", async () => {
      await this.page.getByTestId("miniCartCheckoutButton").click();
    });
  }

  getProductNameLocator() {
    return this.page
      .getByTestId("regular-cart-list")
      .locator("strong.ProductMiniature-module-productName-JRifI", {
        hasText: en.cart.productName,
      });
  }

  async waitForProductNameVisible() {
    await test.step("Wait until product name is visible", async () => {
      await this.getProductNameLocator().waitFor({
        state: "visible",
        timeout: 10000,
      });
    });
  }
}
