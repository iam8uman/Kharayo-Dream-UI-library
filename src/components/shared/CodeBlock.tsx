// src/components/shared/CodeBlock.tsx
import { CopyIcon } from "lucide-react";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
  code: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="bg-gray-900 rounded-md">
      <button
        className={`mt-4 text-black rounded-none flex flex-row items-center px-2 py-1 border border-black justify-end text-end ${
          isCopied ? "bg-white text-black" : "bg-sky-500 text-white"
        }`}
        onClick={handleCopy}
      >
        <CopyIcon className="mr-2 mt-1 h-4 w-4" /> Copy Code
      </button>
      <div className="overflow-x-auto overflow-y-auto max-h-96 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-[68rem] p-4 sm:p-6">
        <SyntaxHighlighter language="tsx" style={nightOwl}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
