import { BasePage } from './BasePage';  
import { Page, Locator , expect} from '@playwright/test';

export class HomePage extends BasePage {

    async VerifyHomePageIsDisplayed() {
       await expect.soft(this.page.locator('text=/Welcome back/')).toBeVisible();
    }

    async ClickOnMenu() {
         await this.BasePageClickElements(this.page.getByRole('button', { name: 'Menu' }));
    }

    async ClickOnAdminPanel() {
        await this.BasePageClickElements(this.page.getByRole('button', { name: 'Admin Panel' }));
    }
}


// verify we're on the home page
// Click on menu
// click on admin panel