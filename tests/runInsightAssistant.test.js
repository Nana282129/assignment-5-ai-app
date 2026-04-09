import { describe, it, expect } from 'vitest';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { runInsightAssistant } from '../src/runInsightAssistant.js';

describe('runInsightAssistant', () => {
  it('returns a structured result for a valid dataset file', () => {
    const result = runInsightAssistant('./data/sampleDataset.json');

    expect(result).toHaveProperty('analysis');
    expect(result).toHaveProperty('insightText');
  });

  it('throws a validation error for a dataset file missing required fields', () => {
    const tempFilePath = path.join(os.tmpdir(), `invalid-dataset-${Date.now()}.json`);

    fs.writeFileSync(tempFilePath, JSON.stringify({ name: 'Incomplete Dataset' }));

    expect(() => runInsightAssistant(tempFilePath)).toThrow(
      'Dataset must include name and status fields.'
    );

    fs.unlinkSync(tempFilePath);
  });
});
