import { test } from '@playwright/test';

import { CartPage } from '../pages/CartPage';
import { RemovePage } from '../pages/RemovePage';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
});

test('remove product', async ({ page }) => {

  const cartPage = new CartPage(page);

  const removePage = new RemovePage(page);

  await cartPage.addBackpackToCart();

  await removePage.removeBackpack();

});