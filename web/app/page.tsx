'use client';

import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRun = async () => {
    setLoading(true);
    setResult('');

    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question })
      });

      const data = await response.json();

      if (!response.ok) {
        setResult(data.error || 'Something went wrong.');
      } else {
        setResult(data.insightText);
      }

    } catch (error) {
      setResult('Failed to connect to the app.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Insight Assistant</h1>

      <p>
        Ask a question about your project, program, or business dataset.
      </p>

      <input
        type="text"
        placeholder="Enter your question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          padding: '0.75rem',
          width: '100%',
          maxWidth: '500px',
          marginBottom: '1rem',
          display: 'block'
        }}
      />

      <button
        onClick={handleRun}
        style={{
          padding: '0.75rem 1.25rem',
          cursor: 'pointer',
          marginBottom: '1rem'
        }}
      >
        Run Insight
      </button>

      <div>
        <h2>Result</h2>

        {loading && <p>Loading...</p>}

        {!loading && result && (
          <p>{result}</p>
        )}
      </div>
    </main>
  );
}
