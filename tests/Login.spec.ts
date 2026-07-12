import {expect, test} from '../src/fixtures/CustomFixtures';
import { credentials} from '../src/data/testData';

test('Positive login - Admin', async ({ LoginPage }) => {
    await LoginPage.BasePageGoToUrl('/');
    await LoginPage.clickLoginButton();
    await LoginPage.EnterLoginCredentials(credentials.user.username, credentials.user.password);
    //verify we're on the homepage
});



