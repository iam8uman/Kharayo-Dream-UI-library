import React from "react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/shared/CodeBlock";
import Example, { actualCodeString, InstallationPage } from "./NavbarFive";

function NavbarFive() {
  return (
    <div className={cn("p-6 bg-black text-white dark:bg-white ")}>
      {/* Demo Section */}
      <div className="mt-4">
        <Example />
      </div>
    </div>
  );
}

const CodexFive = () => {
  return (
    <div className="dark:bg-slate-200 bg-slate-900 p-8">
      <CodeBlock code={`${actualCodeString}`} />
    </div>
  );
};

const steps = [
  {
    title: "📍 Install dependencies",
    content: <CodeBlock code={`pnpm dlx shadcn@latest add navigation-menu`} />,
  },
  {
    title: "📍 Add Javascript",
    content: (
      <>
        {/* <p className="mb-2">lib/utils.ts</p> */}
        <CodeBlock
          code={`
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('myCartDropdownButton1').click();
});
          `}
        />
      </>
    ),
  },
  {
    title: "📍 Add tailwind.config.js",
    content: (
      <>
        <p className="mb-2">tawild.config.ts</p>
        <CodeBlock
          code={`
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      }
    },
    fontFamily: {
      'body': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ],
      'sans': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ]
    }
  }
}
          `}
        />
      </>
    ),
  },
];

const InstallationFive = () => {
  return <InstallationPage steps={steps} />;
};

export { NavbarFive, CodexFive, InstallationFive };
