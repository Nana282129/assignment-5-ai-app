# Architecture Draft

## Project
Insight Assistant

## Purpose
The Insight Assistant analyzes small structured datasets related to programs, projects, or business performance and generates AI-supported insights.

## Input
- Local JSON files
- Small structured datasets
- Single-user local workflow

## Processing Flow
1. Load dataset from local file
2. Validate dataset structure
3. Analyze the data
4. Generate insight wording
5. Format the final result

## Folder Structure

src/
- core/
- features/
  - input/
  - validation/
  - analysis/
  - insights/
  - output/
- lib/

tests/

docs/

data/

## Out of Scope
- Real-time analytics
- User accounts
- Cloud database
- Enterprise deployment