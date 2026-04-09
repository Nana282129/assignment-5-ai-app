import { test, expect } from '@playwright/test';

test('user can enter a question and see an insight result', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page.getByRole('heading', { name: 'Insight Assistant' })).toBeVisible();

  await page.getByPlaceholder('Enter your question').fill('What are the key risks?');
  await page.getByRole('button', { name: 'Run Insight' }).click();

  await expect(page.getByText('Insight result for: What are the key risks?')).toBeVisible();
});