import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  code: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => (
  <div className="mt-4 bg-gray-900 p-4 rounded-md">
    <SyntaxHighlighter language="tsx" style={solarizedlight}>
      {code}
    </SyntaxHighlighter>
    <button
      className="mt-2 bg-blue-600 text-white px-2 py-1 rounded"
      onClick={() => navigator.clipboard.writeText(code)}
    >
      Copy Code
    </button>
  </div>
);
