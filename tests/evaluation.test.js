import { describe, it, expect } from 'vitest';
import { runInsightAssistant } from '../src/runInsightAssistant.js';

describe('evaluation cases', () => {
  it('handles an at-risk delayed project', () => {
    const result = runInsightAssistant('./evaluation/cases/case1-at-risk.json');
    expect(result.analysis.summary).toContain('At Risk');
  });

  it('handles an on-track project', () => {
    const result = runInsightAssistant('./evaluation/cases/case2-on-track.json');
    expect(result.analysis.summary).toContain('On Track');
  });

  it('flags low progress concerns', () => {
    const result = runInsightAssistant('./evaluation/cases/case3-low-progress.json');
    expect(result.analysis.risks.length).toBeGreaterThan(0);
  });

  it('handles budget pressure cases', () => {
    const result = runInsightAssistant('./evaluation/cases/case4-budget-pressure.json');
    expect(result.analysis.risks.length).toBeGreaterThan(0);
  });

  it('handles near-complete projects', () => {
    const result = runInsightAssistant('./evaluation/cases/case5-near-complete.json');
    expect(result.analysis.summary).toContain('On Track');
  });
});