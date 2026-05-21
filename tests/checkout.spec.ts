import { test } from '@playwright/test';

import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
});

test('checkout product', async ({ page }) => {

  const cartPage = new CartPage(page);

  const checkoutPage = new CheckoutPage(page);

  await cartPage.addBackpackToCart();

  await cartPage.openCart();

  await checkoutPage.checkoutInfo(
    'Sofyan',
    'Alawneh',
    '12345'
  );

  await checkoutPage.finishCheckout();

});