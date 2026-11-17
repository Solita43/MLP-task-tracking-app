import { test, expect } from '@playwright/test';

test('should load with a heading', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});