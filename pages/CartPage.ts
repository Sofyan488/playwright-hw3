import { Page } from '@playwright/test';

export class CartPage {

  constructor(private page: Page) {}

  async addBackpackToCart() {

    await this.page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    ).click();

  }

  async addMultipleItems() {

    await this.page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    ).click();

    await this.page.locator(
      '[data-test="add-to-cart-sauce-labs-bike-light"]'
    ).click();

  }

  async openCart() {

    await this.page.locator(
      '[data-test="shopping-cart-link"]'
    ).click();

  }

}