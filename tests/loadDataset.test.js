import { describe, it, expect } from 'vitest';
import { loadDataset } from '../src/features/input/loadDataset.js';

describe('loadDataset', () => {
  it('loads and parses a JSON dataset file', () => {
    const data = loadDataset('./data/sampleDataset.json');

    expect(data).toHaveProperty('name');
    expect(data).toHaveProperty('status');
  });
});
