// src/app/dashboard/navbar/page.tsx
import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Blockquote, BlockquoteAuthor } from "@/components/ui/backquote";

const Page: React.FC = () => {
  return (
    <div className="p-4">
      <Blockquote className="bg-slate-900 dark:bg-slate-100 text-slate-50 dark:text-slate-900">
        Hero today, legend tomorrow!
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500  text-end">
          CEO @whysumancode.com
        </div>
      </Blockquote>
    </div>
  );
};

export default Page;
