import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('checkout product', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const cartPage = new CartPage(page);

  const checkoutPage = new CheckoutPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await cartPage.addBackpackToCart();

  await cartPage.openCart();

  await checkoutPage.checkoutInfo(
    'Sofyan',
    'Alawneh',
    '12345'
  );

  await checkoutPage.finishCheckout();

});