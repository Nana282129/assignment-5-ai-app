import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const question = body.question?.trim();

  if (!question) {
    return NextResponse.json(
      { error: 'Please enter a question.' },
      { status: 400 }
    );
  }

  return NextResponse.json({
    analysis: {
      summary: 'Dataset analyzed successfully.',
      risks: ['Budget pressure', 'Timeline uncertainty'],
      trends: ['Stable delivery progress'],
      recommendations: ['Review budget usage', 'Monitor timeline closely']
    },
    insightText: `Insight result for: ${question}`
  });
}
