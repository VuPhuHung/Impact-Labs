import { test, expect } from '@playwright/test';

test.describe('Register with Google', () => {
    const email = 'hungvp@hblab.vn';
    const emailPassword = 'Hung1995@';

    test('Register', async ({ page }) => {
        await test.step('Go to sign up page', async () => {
            await page.goto('https://hblstaging.impactlabs.org/');
            await page.getByRole('link', { name: 'Sign up', exact: true }).click();
        });

        await test.step('Continue with Google', async () => {
            await page.getByRole('button', { name: 'Continue with Google', exact: true }).click();
            await page.locator('//input[@type="email"]').fill(email);

        });
        await test.step('Submit the email Google', async () => {
            await page.getByRole('button', { name: 'Next', exact: true }).click();
        });

        await test.step('Input email password', async () => {
            await page.locator('//input[@type="password"]').fill(emailPassword);
        });

        await test.step('Submit the email password', async () => {
            await page.getByRole('button', { name: 'Next', exact: true }).click();
        });

        await test.step('Approve Sign in with Google', async () => {
            await page.getByRole('button', { name: 'Continue', exact: true }).click();
        });
    });
}); 