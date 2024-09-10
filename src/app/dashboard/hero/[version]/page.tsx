import React from "react";
import { Blockquote, BlockquoteAuthor } from "@/components/ui/backquote";

const Page = () => {
  return (
    <div className="px-4">
      <Blockquote className="my-10">
        Be a hero in a world full of sidekicks.
        <div className="space-x-1 flex justify-end items-center text-lg font-semibold">
          <div className="font-semibold text-gray-100">Suman Sharma</div>
          <svg
            width={3}
            height={3}
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="fill-gray-900"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500 ">
            CEO @whysumancode.com
          </div>
        </div>
      </Blockquote>
    </div>
  );
};

export default Page;
