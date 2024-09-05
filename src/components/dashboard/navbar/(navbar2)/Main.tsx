import React from "react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/shared/CodeBlock";
import Example, { actualCodeString } from "./NavbarTwo";

function NavbarTwo() {
  return (
    <div className={cn("p-6 bg-black text-white dark:bg-white ")}>
      {/* Demo Section */}
      <div className="mt-4">
        <Example />
      </div>
    </div>
  );
}

const CodexTwo = () => {
  return (
    <div className="dark:bg-slate-200 bg-slate-900 p-8">
      <CodeBlock code={`${actualCodeString}`} />
    </div>
  );
};

export { NavbarTwo, CodexTwo };
