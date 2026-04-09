import { loadDataset } from './features/input/loadDataset.js';
import { validateDataset } from './features/validation/validateDataset.js';
import { analyzeDataset } from './features/analysis/analyzeDataset.js';
import { buildInsightText } from './features/insights/buildInsightText.js';
import { formatResult } from './features/output/formatResult.js';

function runInsightAssistant(filePath) {
  const data = loadDataset(filePath);

  validateDataset(data);

  const analysis = analyzeDataset(data);

  const insightText = buildInsightText(analysis);

  const result = formatResult(analysis, insightText);

  return result;
}

export { runInsightAssistant };
