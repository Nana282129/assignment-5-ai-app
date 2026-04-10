# UI to API Development Notes

## Purpose

This step connected the Insight Assistant user interface to an application route.

## What was added

- A Next.js API route at `web/src/app/api/ask/route.ts`
- A page update in `web/src/app/page.tsx`
- A Playwright test for the user flow

## User flow supported

1. User opens the app
2. User enters a question
3. User clicks Run Insight
4. The app returns a result

## How Codex helped

Codex was used to guide the structure of the route, the page update, and the browser test so the project moved from a simple UI to a more realistic end-to-end flow.
