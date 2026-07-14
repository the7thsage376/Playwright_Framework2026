import { BasePage } from './BasePage';
import { Page, Locator } from '@playwright/test';


export class LoginPage extends BasePage {

    async GoToWebsite(){
        await this.BasePageGoToUrl('/');
    }

    async clickLoginButton() {
        await this.BasePageClickElements(this.page.locator('xpath = //button//span[text() = "Login"]'));
    }

    async EnterLoginCredentials(username: string, password: string){
        await this.BasePageTypeText(this.page.locator('#login-email'), username);
        await this.BasePageTypeText(this.page.locator('#login-password'), password);
        await this.BasePageClickElements(this.page.locator('#login-submit'));
    }







}


// Click on Login button
//fill in email and password fieldds
// click on submit button
// Verify that user is logged in successfully(to be done on the test file)