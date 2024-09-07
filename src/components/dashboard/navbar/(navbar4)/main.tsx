import React from "react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/shared/CodeBlock";
import Example, { actualCodeString, InstallationPage } from "./NavbarFour";

function NavbarFour() {
  return (
    <div className={cn("p-6 bg-black text-white dark:bg-white ")}>
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
    content: <CodeBlock code={`pnpm dlx shadcn@latest add navigation-menu`} />,
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
];

const InstallationFour = () => {
  return <InstallationPage steps={steps} />;
};

export { NavbarFour, CodexFour, InstallationFour };
