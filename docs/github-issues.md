# GitHub Issues for Insight Assistant

## Issue 1

### Title

Create a basic analysis flow for one local JSON file

### Description

Build the first end-to-end flow that lets a user choose a local JSON file, send it through the application, and receive a visible response. This issue is only about getting the full path working with a simple placeholder output so later issues can replace the placeholders with validation and real analysis.

### Acceptance Criteria

- User can provide one local JSON file to the app.
- The app reads the file and confirms that it was loaded.
- The app returns a visible analysis result screen or response object.
- The result clearly shows that the file was processed through the app rather than mocked outside the flow.
- The flow works with one of the sample files in `data/raw/`.

## Issue 2

### Title

Add schema detection for project, program, and business JSON files

### Description

Implement dataset type detection so the app can classify an input file as `project`, `program`, or `business` based on required fields. This should happen before any insight generation and should return a clear unsupported-schema error when the file does not match a known template.

### Acceptance Criteria

- The app correctly classifies `project1.json` as `project`.
- The app correctly classifies `program1.json` as `program`.
- The app correctly classifies `business1.json` as `business`.
- A file that does not match any supported schema returns a clear unsupported-schema error.
- Dataset type detection is performed in application code, not inferred only by prompt text.

## Issue 3

### Title

Validate required fields and value ranges for supported schemas

### Description

Add validation rules for required fields, data types, and allowed ranges for supported metrics. This issue should make invalid inputs fail early with understandable error messages instead of reaching the analysis step.

### Acceptance Criteria

- Missing required fields produce a validation error that names the missing field.
- Invalid value types produce a validation error that names the field and expected type.
- Out-of-range percentage fields such as `completion_percent`, `completion_rate`, or `satisfaction` produce validation errors.
- Invalid files do not proceed to insight generation.
- Validation works for all three supported dataset types.

## Issue 4

### Title

Generate deterministic risk and trend signals for project datasets

### Description

Implement the first real analysis slice for the `project` schema. Given a valid project file, the app should compute deterministic signals such as schedule risk or blocker presence and expose those signals in the analysis pipeline.

### Acceptance Criteria

- A valid project dataset produces at least one computed signal object before AI output is generated.
- `completion_percent < 70` is flagged as a project risk.
- A non-empty `issues` field is captured as supporting evidence.
- Computed signals are available for use by the output generation step.
- The sample `project1.json` produces at least one risk signal.

## Issue 5

### Title

Generate deterministic risk and trend signals for program datasets

### Description

Implement deterministic analysis rules for the `program` schema. This slice should detect weak completion and satisfaction signals and convert them into structured evidence for later insight generation.

### Acceptance Criteria

- A valid program dataset produces structured analysis signals.
- `completion_rate < 75` is flagged as a program risk.
- `satisfaction < 75` is flagged as a quality concern.
- A non-empty `issues` field is included as evidence when present.
- The sample `program1.json` produces at least one risk or concern signal.

## Issue 6

### Title

Generate deterministic risk and trend signals for business datasets

### Description

Implement deterministic analysis rules for the `business` schema. This slice should identify weak business performance signals and package them for downstream insight generation.

### Acceptance Criteria

- A valid business dataset produces structured analysis signals.
- `sales_growth < 10` is flagged as a business concern.
- A non-empty `issues` field is included as evidence when present.
- The sample `business1.json` produces at least one concern signal.
- The generated signals follow the same shape used by the other dataset types.

## Issue 7

### Title

Return a structured non-AI analysis response with summary, risks, trends, and recommendations

### Description

Before integrating the AI layer, return the required output schema using deterministic rules and simple template text. This creates a stable baseline and proves that the product can satisfy the required response shape without depending on model behavior.

### Acceptance Criteria

- The app returns `dataset_type`, `summary`, `risks`, `trends`, and `recommendations`.
- `risks` and `trends` include evidence derived from computed signals.
- `recommendations` are tied to detected issues or weak metrics.
- The output is valid structured JSON.
- The response works for all three sample datasets.

## Issue 8

### Title

Integrate AI phrasing on top of validated data and computed signals

### Description

Add the AI generation step that turns validated input and deterministic signals into clearer summary text, risk explanations, trend descriptions, and recommendations. The model should improve wording and synthesis, not replace the rule-based detection layer.

### Acceptance Criteria

- The AI step receives validated dataset content plus computed signals as input.
- The app still uses deterministic analysis to decide what risks and concerns exist.
- The response preserves the required output schema.
- Recommendations remain grounded in detected issues or weak metrics.
- If the AI step fails, the app can still return a fallback structured response instead of crashing.

## Issue 9

### Title

Show validation errors and analysis results in a simple user-facing interface

### Description

Create a basic interface that lets a user run the analysis flow and inspect either errors or results clearly. The goal is not polished UI but a usable end-to-end prototype for the assignment.

### Acceptance Criteria

- User can select or provide a local JSON file through the interface.
- Validation errors are shown in plain language.
- Successful analysis shows the summary, risks, trends, and recommendations distinctly.
- The interface works with the sample files used in the project.
- The interface does not require user accounts or external services beyond the configured AI call.

## Issue 10

### Title

Add automated tests for schema detection, validation, and structured output

### Description

Add focused automated tests that lock down the core behavior of the prototype. These tests should cover supported sample files, invalid inputs, and the required response structure so the app can be changed safely.

### Acceptance Criteria

- Tests verify dataset type detection for the three sample files.
- Tests verify validation errors for missing fields, wrong types, and invalid ranges.
- Tests verify that a successful analysis returns the required top-level output fields.
- Tests verify that recommendations are generated from detected issues or weak metrics.
- Test commands and expected setup are documented in the repository.
