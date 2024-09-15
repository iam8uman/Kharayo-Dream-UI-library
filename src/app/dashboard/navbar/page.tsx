// src/app/dashboard/navbar/page.tsx
import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Blockquote, BlockquoteAuthor } from "@/components/ui/backquote";

const Page: React.FC = () => {
  return (
    <div className="p-6">
      <Blockquote className="bg-slate-900 dark:bg-slate-100 text-slate-50 dark:text-slate-900">
        Happiness lies not in the mere possession of money; it lies in the joy
        of achievement, in the thrill of creative effort.
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500  text-end">
          CEO @whysumancode.com
        </div>
      </Blockquote>
    </div>
  );
};

export default Page;
