# Product Requirements Document

## Product Name

Insight Assistant

## 1. Purpose

Insight Assistant is a local-file analysis app that ingests small structured datasets and produces grounded, AI-assisted insights to support project, program, and business decision-making.

The product is intended for classroom or prototype use, not enterprise deployment. Its primary value is turning a small JSON dataset into a structured assessment that highlights summary information, risks, trends, and recommendations.

## 2. Problem Statement

Small teams often have project or performance data in simple local files, but that data is not immediately useful for fast decision-making. Users need a lightweight tool that can:

- read a small structured dataset
- validate that the data is usable
- calculate meaningful signals from the input
- generate plain-language insights in a consistent structure

Without this workflow, users must manually inspect fields and interpret whether the dataset suggests healthy performance, emerging risk, or a need for action.

## 3. Goals

- Analyze small local structured files without requiring external databases or user accounts.
- Produce four core outputs: summary, risks, trends, and recommendations.
- Ground generated insights in deterministic signals derived from the dataset.
- Return outputs in a structured format that can be inspected, displayed, or reused.

## 4. Non-Goals

- Real-time analytics
- User authentication or multi-user collaboration
- Large-scale enterprise deployment
- General-purpose chat with arbitrary files
- Complex dashboards or BI-style visual exploration
- External system integrations

## 5. Target Users

- Students building a prototype analytics assistant
- Small teams reviewing local project or performance snapshots
- Users who want a quick structured assessment from a small dataset

## 6. V1 Scope

V1 supports analysis of a single small JSON file at a time. The system accepts one of three simple domain templates:

- project dataset
- program dataset
- business performance dataset

Each dataset is expected to match a known schema similar to the sample files in `data/raw/`.

V1 will not support arbitrary schema mapping. If an uploaded file does not match one of the expected templates, the system should return a validation error rather than guessing.

## 7. Supported User Tasks

- Summarize project, program, or business data
- Identify risks based on explicit field thresholds and issues in the file
- Identify trends or directional signals from metric values
- Generate recommendations tied directly to detected risks or weak signals

## 8. User Stories

- As a user, I want to upload a small local JSON file so the app can analyze it.
- As a user, I want the app to tell me what the dataset says in plain language.
- As a user, I want the app to identify the most important risks from the data.
- As a user, I want recommendations that are clearly tied to the detected issues.
- As a user, I want structured output so I can review or reuse the results.

## 9. Input Requirements

### 9.1 Supported Format

- JSON files only in V1

### 9.2 File Size and Shape

- Single local file
- Small dataset only
- Expected to contain a compact structured object rather than a large table

### 9.3 Expected V1 Schemas

#### Project Schema

- `name`: string
- `budget`: number
- `timeline_weeks`: number
- `completion_percent`: number from 0 to 100
- `issues`: string
- `team_size`: number

#### Program Schema

- `name`: string
- `participants`: number
- `completion_rate`: number from 0 to 100
- `satisfaction`: number from 0 to 100
- `issues`: string

#### Business Schema

- `name`: string
- `locations`: number
- `budget`: number
- `sales_growth`: number
- `issues`: string

## 10. Functional Requirements

### FR1. File Ingestion

The system shall allow the user to load one local JSON file for analysis.

### FR2. Schema Validation

The system shall detect whether the file matches one of the supported schemas.

The system shall reject files that:

- are not valid JSON
- are missing required fields
- use invalid value types
- contain metric values outside expected ranges where applicable

### FR3. Deterministic Signal Generation

Before invoking the AI layer, the system shall compute analysis signals from the input data.

Examples:

- low completion percent indicates project delivery risk
- low satisfaction indicates program quality risk
- low sales growth indicates weak business performance
- populated issues field indicates a reported concern

### FR4. Insight Generation

The system shall generate the following outputs:

- `summary`
- `risks`
- `trends`
- `recommendations`

The AI layer shall use validated input plus deterministic signals, not raw data alone.

### FR5. Grounded Recommendations

Every recommendation shall be traceable to at least one detected risk, weak metric, or reported issue.

### FR6. Structured Output

The system shall return results in a structured JSON object suitable for frontend display or downstream processing.

### FR7. Error Reporting

The system shall return clear validation and processing errors when analysis cannot be completed.

## 11. Output Schema

The output should follow a predictable structure such as:

```json
{
  "dataset_type": "project",
  "summary": "Project is moderately progressed but showing delivery risk.",
  "risks": [
    {
      "title": "Schedule risk",
      "severity": "high",
      "evidence": ["completion_percent is 60", "issues mention delayed stakeholder feedback"]
    }
  ],
  "trends": [
    {
      "title": "Execution progress is incomplete",
      "direction": "mixed",
      "evidence": ["completion_percent below completion target"]
    }
  ],
  "recommendations": [
    {
      "title": "Tighten stakeholder review cadence",
      "rationale": "Delayed feedback is slowing progress."
    }
  ]
}
```

## 12. Processing Flow

The application should follow this sequence:

1. User selects a local JSON file.
2. System parses the file.
3. System validates schema and values.
4. System computes deterministic signals and flags.
5. System builds an analysis prompt from validated data plus signals.
6. AI generates structured insight text.
7. System returns formatted output to the user.

This separation is required so the app remains explainable and testable.

## 13. Architecture Requirements

V1 should use a simple modular architecture with four layers:

- ingestion layer
- validation layer
- analysis layer
- output formatting layer

### Recommended Responsibilities

- Ingestion layer: file loading and JSON parsing
- Validation layer: schema detection, field checks, value checks
- Analysis layer: deterministic risk and trend signals plus AI prompt generation
- Output formatting layer: normalized JSON response for display

The AI model should be used primarily for explanation, synthesis, and recommendation phrasing. It should not be the sole source of risk detection logic.

## 14. Decision Rules for V1

To keep the prototype consistent, V1 should use simple explicit rules. Example rules:

- Project risk if `completion_percent < 70`
- Program risk if `completion_rate < 75`
- Program concern if `satisfaction < 75`
- Business concern if `sales_growth < 10`
- Additional risk if `issues` is non-empty and descriptive of a blocker

These thresholds can be refined later, but they should exist in code rather than being implied by prompt wording alone.

## 15. Non-Functional Requirements

- Fast response on small local files
- Clear and predictable validation behavior
- Outputs should be readable by non-technical users
- Results should be reproducible for the same input and rule set, aside from limited wording variation in AI-generated text
- Code structure should be simple enough for an academic assignment

## 16. Risks and Constraints

### Product Risks

- If schemas are too flexible, analysis quality will collapse.
- If the AI is allowed to infer everything from raw input, outputs will be inconsistent.
- Recommendations may sound useful but lack evidence unless tightly grounded.

### Technical Constraints

- Local files only
- Small datasets only
- No real-time or streaming inputs
- No persistent user management

## 17. Success Criteria

The product will be considered successful for V1 if:

- it correctly accepts the provided sample JSON files
- it rejects malformed or unsupported files with clear errors
- it returns all four required insight sections
- each recommendation can be linked to a detected issue or weak metric
- outputs are structured and understandable enough to support basic decision-making

## 18. Acceptance Criteria

- User can analyze one supported local JSON file in a single flow.
- System identifies dataset type correctly for the provided sample files.
- System returns `summary`, `risks`, `trends`, and `recommendations`.
- System produces at least one evidence-backed risk when weak metrics or issues are present.
- System returns a validation error for unsupported schema or invalid field types.
- Recommendations are not generic filler and reference detected problems.

## 19. Future Enhancements

- Support CSV input
- Support multiple records and comparative trend analysis
- Add configurable thresholds
- Add charts or lightweight dashboard views
- Add export options for reports
- Add domain-specific templates beyond the initial three schemas

## 20. Open Questions

- Should V1 support only JSON, or should CSV be included from the start?
- Should thresholds be global, or vary by dataset type?
- Should the app output confidence or evidence scores?
- Should executive-summary formatting remain out of scope, or be layered on top of the core outputs later?
