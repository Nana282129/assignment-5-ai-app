# Codex Skills Usage

## Assignment Requirement

This project followed the required Codex skill workflow:

1. grill-me
2. write-a-prd
3. prd-to-issues
4. tdd
5. improve-codebase-architecture

## Note on Skill Availability

In this Codex environment, some of the required Matt Pocock skills were not available in the install catalog. Because of that, equivalent Codex-guided workflow steps were completed manually and documented in the repository.

## How the Workflow Was Used

### 1. grill-me
The project idea was pressure-tested in Codex to narrow scope, clarify supported tasks, and simplify architecture.

Evidence:
- docs/grill-me-notes.md
- docs/project-scope.md

### 2. write-a-prd
A PRD was created for the final project scope.

Evidence:
- docs/prd.md
- GitHub parent PRD issue

### 3. prd-to-issues
The PRD was broken into smaller implementation issues.

Evidence:
- GitHub child issues linked to the PRD issue
- docs/github-issues.md

### 4. tdd
Meaningful tests were created for real supported behaviors.

Evidence:
- tests/runInsightAssistant.test.js
- tests/loadDataset.test.js
- tests/validateDataset.test.js
- docs/tdd-notes.md

### 5. improve-codebase-architecture
The project structure was reviewed and improved after the first working version.

Evidence:
- docs/architecture-draft.md
- src/features/*
- src/core/*
- docs/ui-api-notes.md
