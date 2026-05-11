import 'dotenv/config';
import { test as setup, expect } from "@playwright/test";

setup("authenticate", async ({ page }) => {

  await page.goto(process.env.url!);

  await page.locator('[data-test="username"]')
    .fill(process.env.username1!);

  await page.locator('[data-test="password"]')
    .fill(process.env.password!);

  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(
    "https://www.saucedemo.com/inventory.html"
  );

  await page.context().storageState({
    path: "playwright/.auth/user.json",
  });

});