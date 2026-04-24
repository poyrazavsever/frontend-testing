import { expect, test } from "@playwright/test";

// E2E test gerçek kullanıcı akışını tarayıcıda baştan sona doğrular.
test("user can open products and add the first product to cart", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "Ürünleri Gör" }).click();
  await page.getByRole("button", { name: "Sepete Ekle" }).click();

  await expect(page).toHaveURL("/cart");
  await expect(page.getByRole("heading", { name: "Sepet" })).toBeVisible();
});
