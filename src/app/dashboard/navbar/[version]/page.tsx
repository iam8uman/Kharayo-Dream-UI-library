import React from "react";
import { Blockquote, BlockquoteAuthor } from "@/components/ui/backquote";
import { InstallationPage } from "@/components/dashboard/navbar/(navbar1)/NavbarOne";
import { InstallationOne } from "@/components/dashboard/navbar/(navbar1)/main";

const Page = () => {
  return (
    <div>
      <Blockquote>
        Happiness lies not in the mere possession of money; it lies in the joy
        of achievement, in the thrill of creative effort.
        <BlockquoteAuthor>Franklin Roosevelt</BlockquoteAuthor>
      </Blockquote>
    </div>
  );
};

export default Page;
