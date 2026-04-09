import { test, expect } from '@playwright/test';

test('user can enter a question and see an insight result', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page.getByRole('heading')).toBeVisible();

  await page.getByRole('textbox').fill('What are the key risks?');

  await page.getByRole('button').click();

  await expect(page.locator('text=Insight')).toBeVisible();
});
