import { test, expect } from '@playwright/test';

test('Register', async ({ page }) => {
    await test.step('Go to sign up page', async () => {
        await page.goto('https://hblstaging.impactlabs.org/');
        await page.getByRole('link', { name: 'Sign up', exact: true }).click();
    });

    // Sign up manually
    await test.step('Fill out the form', async () => {
        await page.locator('//input[@placeholder="miles@spidey.web"]').fill('hungvp@hblab.vn');
    });

    await test.step('Submit the form', async () => {
        await page.getByRole('button', { name: 'Continue' , exact: true}).click();
        await test.expect(page.locator('//input[@type="password"]').isVisible()).toBeTruthy();
    });
});

