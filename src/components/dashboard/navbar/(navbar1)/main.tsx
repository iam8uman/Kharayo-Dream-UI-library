import React from "react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/shared/CodeBlock";
import Example, { actualCodeString } from "./NavbarOne";
import { ScrollArea } from "@radix-ui/react-scroll-area";

function NavbarOne() {
  return (
    <div className={cn("p-6 bg-black text-white dark:bg-white ")}>
      {/* Demo Section */}
      <div className="mt-4">
        <Example />
      </div>
    </div>
  );
}

const CodexOne = () => {
  return (
    <div className="dark:bg-slate-200 bg-slate-900 p-8  overflow-x-auto overflow-hidden">
      <CodeBlock code={`${actualCodeString}`} />
    </div>
  );
};

export { NavbarOne, CodexOne };
