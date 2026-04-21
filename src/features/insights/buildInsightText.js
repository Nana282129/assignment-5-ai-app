export function buildInsightText(analysis) {
  return [
    `Summary: ${analysis.summary}`,
    analysis.risks.length
      ? `Risks: ${analysis.risks.join(' ')}`
      : 'Risks: No major risks identified.',
    analysis.trends.length
      ? `Trends: ${analysis.trends.join(' ')}`
      : 'Trends: No major trends identified.',
    analysis.recommendations.length
      ? `Recommendations: ${analysis.recommendations.join(' ')}`
      : 'Recommendations: Continue monitoring.'
  ].join('\n');
}