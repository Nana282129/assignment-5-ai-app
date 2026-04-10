import { NextResponse } from 'next/server';
import path from 'path';
import { runInsightAssistant } from '../../../../src/runInsightAssistant.js';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const question = body.question?.trim();

    if (!question) {
      return NextResponse.json(
        { error: 'Please enter a question.' },
        { status: 400 }
      );
    }

    const datasetPath = path.join(
      process.cwd(),
      '../data/sample-dataset.json'
    );

    const result = runInsightAssistant(datasetPath);

    return NextResponse.json({
      ...result,
      insightText: `${result.analysis?.summary || 'Insight generated.'} Question asked: ${question}`
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: 'Failed to generate insight' },
      { status: 500 }
    );
  }
}