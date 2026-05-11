import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

test('add single product to cart', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const cartPage = new CartPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await cartPage.addBackpackToCart();

  await cartPage.openCart();

});

test('add multiple products to cart', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const cartPage = new CartPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await cartPage.addMultipleItems();

  await cartPage.openCart();

});