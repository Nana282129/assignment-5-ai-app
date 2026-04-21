# Assignment 6 Notes

## App purpose
This application supports basic insight generation for small project, program, or business datasets.

## Supported tasks
- identify project status
- summarize basic risks
- surface simple trends
- provide recommendations

## Out of scope
- multi-file retrieval
- complex forecasting
- real-time data ingestion
- tool calling
- advanced question answering across large datasets

## Architecture classification
Prompt-first / long-context

## Why this architecture fits
The app uses one local structured JSON dataset and a direct analysis pipeline. It does not require retrieval, vector storage, or tool orchestration.

## Main alternative not chosen
Retrieval-first / RAG

## Why not RAG
RAG would add unnecessary complexity for a single small dataset. It would increase operational overhead, storage needs, retrieval evaluation needs, and debugging complexity.

## Important capability not implemented
RAG / retrieval

## When I would add it
If the app expands to many project files, reports, or documents, retrieval would help with scaling and context limits.

## Pipeline and data flow
1. User enters a question in the UI
2. API route calls runInsightAssistant
3. Dataset is loaded from JSON
4. Dataset is validated
5. Dataset is analyzed
6. Insight text is built
7. Final result is formatted
8. Output is returned to the user

## Source of truth
The structured JSON dataset file is the source of truth.

## Upstream component evaluated
Dataset loading and validation

## Output quality evaluation
Used a simple rubric:
- relevance
- specificity
- actionability

## End-to-end task success
Measured whether a user could submit a question and receive a meaningful result.

## Failure cases
1. Missing required dataset fields
2. Generic output that does not fully answer the user question

## Improvement made
Improved analysis logic to use status, timeline, progress, and budget more directly.

## Remaining weakness
The app is still simple and works best with small structured datasets.