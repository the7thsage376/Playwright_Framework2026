import {test as base} from '@playwright/test';
import {LoginPage} from '..pages/LoginPage';
import {HomePage} from '../pages/HomePage';
import {AdminDashboardPage} from '../pages/AdminDashboardPage';



type CustomFixtures = {
    LoginPage: LoginPage;
    HomePage: HomePage;
    AdminDashboardPage: AdminDashboardPage;
}; 

export const test = base.extend<CustomFixtures>({
    LoginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    HomePage: async ({page}, use) => {
        await use(new HomePage(page));
    },
    AdminDashboardPage: async ({page}, use) => {
        await use(new AdminDashboardPage(page));
    }
});


export { expect } from '@playwright/test';