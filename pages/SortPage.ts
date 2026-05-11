import { Page } from '@playwright/test';

export class SortPage {

  constructor(private page: Page) {}

  async sortZA() {

    await this.page.locator(
      '[data-test="product-sort-container"]'
    ).selectOption('za');

  }

  async sortHighToLow() {

    await this.page.locator(
      '[data-test="product-sort-container"]'
    ).selectOption('hilo');

  }

}