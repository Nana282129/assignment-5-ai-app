import { describe, it, expect } from 'vitest';
import { validateDataset } from '../src/features/validation/validateDataset.js';

describe('validateDataset', () => {
  it('returns true for valid dataset data', () => {
    const data = {
      name: 'Community Program',
      status: 'On Track',
      budget: 10000
    };

    expect(validateDataset(data)).toBe(true);
  });

  it('throws an error for invalid dataset data', () => {
    expect(() => validateDataset(null)).toThrow('Dataset is missing or invalid.');
  });

  it('throws an error when required name or status fields are missing', () => {
    const data = {
      budget: 10000
    };

    expect(() => validateDataset(data)).toThrow('Dataset must include name and status fields.');
  });
});
