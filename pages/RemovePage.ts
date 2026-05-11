import { Page } from '@playwright/test';

export class RemovePage {

  constructor(private page: Page) {}

  async removeBackpack() {

    await this.page.locator(
      '[data-test="remove-sauce-labs-backpack"]'
    ).click();

  }

}