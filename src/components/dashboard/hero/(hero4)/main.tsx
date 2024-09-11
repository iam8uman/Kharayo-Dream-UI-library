import React from "react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/shared/CodeBlock";
import Example, { actualCodeString, InstallationPage } from "./HeroFour";

function HeroFour() {
  return (
    <div className={cn("p-10 bg-black text-white dark:bg-white ")}>
      {/* Demo Section */}
      <div className="mt-4">
        <Example />
      </div>
    </div>
  );
}

const CodexFour = () => {
  return (
    <div className="dark:bg-slate-200 bg-slate-900 p-8">
      <CodeBlock code={`${actualCodeString}`} />
    </div>
  );
};

const steps = [
  {
    title: "📍 Install dependencies",
    content: <CodeBlock code={`pnpm i lucide-react`} />,
  },
  {
    title: "📍 Add util file",
    content: (
      <>
        <p className="mb-2">lib/utils.ts</p>
        <CodeBlock
          code={`
  import { ClassValue, clsx } from "clsx";
  import { twMerge } from "tailwind-merge";
  
  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
            `}
        />
      </>
    ),
  },
  {
    title: "📍 Add the following code in tailwind.config.js file",
    content: (
      <CodeBlock
        code={`
  const defaultTheme = require("tailwindcss/defaultTheme");
  const colors = require("tailwindcss/colors");
  
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        // Add your custom configurations here
      },
    },
    plugins: [],
  };
          `}
      />
    ),
  },
];

const InstallationFour = () => {
  return <InstallationPage steps={steps} />;
};

export { HeroFour, CodexFour, InstallationFour };
