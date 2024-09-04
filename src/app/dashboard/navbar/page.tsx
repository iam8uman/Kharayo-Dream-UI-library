// src/app/dashboard/navbar/page.tsx
import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Blockquote, BlockquoteAuthor } from "@/components/ui/backquote";

const Page: React.FC = () => {
  return (
    <div>
      <Blockquote>
        Happiness lies not in the mere possession of money; it lies in the joy
        of achievement, in the thrill of creative effort.
        <BlockquoteAuthor>Suman Sharma</BlockquoteAuthor>
      </Blockquote>
    </div>
  );
};

export default Page;
