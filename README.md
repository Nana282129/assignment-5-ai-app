# Insight Assistant — Assignment 5

## Overview

Insight Assistant is a small AI-powered application that analyzes structured datasets related to programs, projects, or business performance and generates insights including risks, trends, and recommendations.

This project demonstrates:

- AI-assisted development workflow
- Test-driven development
- Modular architecture
- End-to-end application design

---

## Features

- Ask questions about project or program data
- Generate structured insights
- Risk detection
- Trend identification
- Recommendations generation
- Browser-based UI
- API-based architecture

---

## Architecture

This project follows a layered architecture:

### UI Layer
- Next.js interface
- User input
- Result display

### API Layer
- `web/app/api/ask/route.ts`
- Handles user requests
- Connects UI to pipeline

### Core Pipeline

Deployment configured for Vercel

Vercel deployment updated.


## Assignment 6 Extension

This project was extended for Assignment 6 by evaluating, defending, and improving the original Assignment 5 application.

### Architecture

The system is classified as prompt-first / long-context because it uses a small local JSON dataset and a direct analysis pipeline without retrieval or tool orchestration.

### Evaluation

The system was evaluated on:

- output quality
- end-to-end task success
- upstream dataset validation

Artifacts are included in:

- `evaluation/cases/`
- `evaluation/results/`
- `tests/evaluation.test.js`

### Failure Cases

The evaluation included:

- missing required dataset fields
- generic output not fully aligned to the user question

### Improvement

The analysis and insight text generation were improved to reflect dataset values such as status, timeline, progress, and budget more clearly.