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
