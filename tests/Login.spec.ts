import {expect, test} from '../src/fixtures/CustomFixtures';

test('Positive login - Admin', async ({ LoginPage }) => {
    await LoginPage.basePageGoToUrl('/');

});
