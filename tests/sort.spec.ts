import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { SortPage } from '../pages/SortPage';

test('sort products ZA', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const sortPage = new SortPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await sortPage.sortZA();

});

test('sort products high to low', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const sortPage = new SortPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await sortPage.sortHighToLow();

});