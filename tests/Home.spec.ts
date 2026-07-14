import {expect, test} from '../src/fixtures/CustomFixtures';
import { credentials} from '../src/data/testData';
import { HomePage } from '../src/pages/HomePage';


test('Positive login - Admin', async ({HomePage, LoginPage }) => {
    await LoginPage.BasePageGoToUrl('/');
    await LoginPage.clickLoginButton();
    await LoginPage.EnterLoginCredentials(credentials.user.username, credentials.user.password);
    await HomePage.VerifyHomePageIsDisplayed();
    await HomePage.ClickOnMenu();
    await HomePage.ClickOnAdminPanel();
    //verify we're on the homepage
});