Failure case: Question mismatch

Example user question:
What is the biggest project risk?

Observed weakness:
The app may return a generic summary and append the question, rather than directly answering the question.

Why it matters:
This reduces output quality and makes the app less useful for decision support.

Improvement goal:
Make the analysis and insight text reflect dataset conditions more specifically.