# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: app.spec.ts >> user can enter a question and see an insight result
- Location: tests\app.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e3]:
    - img "Next.js logo" [ref=e4]
    - generic [ref=e5]:
      - heading "To get started, edit the page.tsx file." [level=1] [ref=e6]
      - paragraph [ref=e7]:
        - text: Looking for a starting point or more instructions? Head over to
        - link "Templates" [ref=e8] [cursor=pointer]:
          - /url: https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app
        - text: or the
        - link "Learning" [ref=e9] [cursor=pointer]:
          - /url: https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app
        - text: center.
    - generic [ref=e10]:
      - link "Vercel logomark Deploy Now" [ref=e11] [cursor=pointer]:
        - /url: https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app
        - img "Vercel logomark" [ref=e12]
        - text: Deploy Now
      - link "Documentation" [ref=e13] [cursor=pointer]:
        - /url: https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app
  - button "Open Next.js Dev Tools" [ref=e19] [cursor=pointer]:
    - img [ref=e20]
  - alert [ref=e23]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('user can enter a question and see an insight result', async ({ page }) => {
  4  |   await page.goto('http://localhost:3000');
  5  | 
  6  |   await expect(page.getByRole('heading')).toBeVisible();
  7  | 
> 8  |   await page.getByRole('textbox').fill('What are the key risks?');
     |                                   ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  9  | 
  10 |   await page.getByRole('button').click();
  11 | 
  12 |   await expect(page.locator('text=Insight')).toBeVisible();
  13 | });
  14 | 
```