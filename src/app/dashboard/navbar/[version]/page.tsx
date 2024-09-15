import React from "react";
import { Blockquote, BlockquoteAuthor } from "@/components/ui/backquote";

const Page = () => {
  return (
    <div className="px-6">
      <Blockquote className="my-10">
        Happiness lies not in the mere possession of money; it lies in the joy
        of achievement, in the thrill of creative effort.
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
