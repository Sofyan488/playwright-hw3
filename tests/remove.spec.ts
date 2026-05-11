import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { RemovePage } from '../pages/RemovePage';

test('remove product', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const cartPage = new CartPage(page);

  const removePage = new RemovePage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await cartPage.addBackpackToCart();

  await removePage.removeBackpack();

});