import { BasePage } from './BasePage';  
import { Page, Locator } from '@playwright/test';

// Click on invoices
async ClickOnInvoices() {
    await this.BasePageClickElements(this.page.getByRole('button', { name: 'Invoices' }));
}
// create an invoice to myself with me as the client pty ltd
// Fill out the invoice details
// Select 4 courses
// Verify that the total amount is R2800
// Select the due date to be the last day of June
// Select status as paid
// Create invoice
// Verify that my invoice is created