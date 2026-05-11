import { Page } from '@playwright/test';

export class CheckoutPage {

  constructor(private page: Page) {}

  async checkoutInfo(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {

    await this.page.locator('[data-test="checkout"]')
      .click();

    await this.page.locator('[data-test="firstName"]')
      .fill(firstName);

    await this.page.locator('[data-test="lastName"]')
      .fill(lastName);

    await this.page.locator('[data-test="postalCode"]')
      .fill(postalCode);

    await this.page.locator('[data-test="continue"]')
      .click();

  }

  async finishCheckout() {

    await this.page.locator('[data-test="finish"]')
      .click();

  }

}