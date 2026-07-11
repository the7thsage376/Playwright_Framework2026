import { BasePage } from './BasePage';
import { Page, Locator } from '@playwright/test';


export class LoginPage extends BasePage {

    async openWebsite(){
        await this.BasePageGoToUrl('/');
    }







}


// Click on Login button
//fill in email and password fieldds
// click on submit button
// Verify that user is logged in successfully(to be done on the test file)