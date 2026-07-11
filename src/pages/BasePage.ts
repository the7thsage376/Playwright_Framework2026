import { page, locator, expect } from '@playwright/test';

export class BasePage {

    constructor (public page: Page){
        this.page=page;
    }

    async BasePageGoToUrl(url: string){
        await this.page.goto(url);
    }

    async BasePageClickElements(locator: Locator){
        await locator.click();
    }

    async BasePageTypeText(locator: Locator, text: string){
        await locator.clear()
        await locator.fill(text);
    }

    async BasePageVerifyElementIsVisible(locator: Locator){
        await expect(locator).toBeVisible();
    }



}