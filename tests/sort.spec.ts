import { test } from '@playwright/test';

import { SortPage } from '../pages/SortPage';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
});

test('sort products ZA', async ({ page }) => {

  const sortPage = new SortPage(page);

  await sortPage.sortZA();

});

test('sort products high to low', async ({ page }) => {

  const sortPage = new SortPage(page);

  await sortPage.sortHighToLow();

});