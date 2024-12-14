"use client"

import { CopyIcon, CheckIcon } from "lucide-react";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  nightOwl,
  vs,
  darcula,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
  code: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000); // Reset after 2 seconds
    });
  };

  return (
    <div className="bg-gray-900 rounded-md p-4 sm:p-6">
      <button
        className={`text-black rounded-none flex flex-row items-center px-2 py-1 border border-black justify-end text-end ${
          isCopied ? "bg-white text-black" : "bg-sky-500 text-white"
        }`}
        onClick={handleCopy}
      >
        {isCopied ? (
          <CheckIcon className="h-4 w-4 mr-2" />
        ) : (
          <CopyIcon className="h-4 w-4 mr-2" />
        )}
        {isCopied ? "Copied!" : "Copy"}
      </button>
      <div className="overflow-x-auto overflow-y-auto max-h-96 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-[60rem]">
        <SyntaxHighlighter language="tsx" style={nightOwl}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
