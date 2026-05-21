import { test } from '@playwright/test';

import { CartPage } from '../pages/CartPage';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
});

test('add single product to cart', async ({ page }) => {

  const cartPage = new CartPage(page);

  await cartPage.addBackpackToCart();

  await cartPage.openCart();

});

test('add multiple products to cart', async ({ page }) => {

  const cartPage = new CartPage(page);

  await cartPage.addMultipleItems();

  await cartPage.openCart();

});