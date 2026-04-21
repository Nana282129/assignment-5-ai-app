export function analyzeDataset(data) {
  const risks = [];
  const trends = [];
  const recommendations = [];

  if (data.status === 'At Risk') {
    risks.push('Project status is at risk.');
  }

  if (data.timeline === 'Delayed') {
    risks.push('Timeline delays may affect delivery.');
  }

  if (typeof data.progress === 'number') {
    if (data.progress < 50) {
      risks.push('Progress is below expected range.');
      trends.push('Progress is currently low.');
      recommendations.push('Review blockers and adjust the delivery plan.');
    } else if (data.progress < 80) {
      trends.push('Progress is moderate but still needs monitoring.');
    } else {
      trends.push('Progress is strong and nearing completion.');
    }
  }

  if (typeof data.budget === 'number' && data.budget > 100000) {
    risks.push('Budget level may require closer financial monitoring.');
    recommendations.push('Review budget use and confirm resource priorities.');
  }

  if (recommendations.length === 0) {
    recommendations.push('Continue monitoring project performance and milestones.');
  }

  let summary = `${data.name} is currently ${data.status}.`;

  if (data.timeline === 'Delayed') {
    summary += ' The timeline is delayed.';
  }

  if (typeof data.progress === 'number') {
    summary += ` Current progress is ${data.progress}%.`;
  }

  return {
    summary,
    risks,
    trends,
    recommendations
  };
}