import { test } from "../fixtures/baseTest";
import { expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { ShopPage } from "../pages/shopPage";
import { ProductPage } from "../pages/productPage";
import { en } from "../locales/en";

test.describe("Verification of cart products ", () => {
  test("Add product to cart and verify", async ({ page }) => {
    const home = new HomePage(page);
    const shop = new ShopPage(page);
    const product = new ProductPage(page);

    await home.openShop();

    await shop.openProductBySKU("ploom-x-advanced");

    await product.addToCart();
    await expect(await product.getCartItemCountText()).toHaveText(
      en.cart.item_1,
    );

    await product.openCart();
    await expect(product.checkoutButton).toBeVisible();

    await product.waitForProductNameVisible();
    await expect(product.getProductNameLocator()).toBeVisible();
  });
});
