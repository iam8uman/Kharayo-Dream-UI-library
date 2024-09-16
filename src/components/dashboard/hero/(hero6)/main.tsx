import React from "react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/shared/CodeBlock";
import Example, { actualCodeString, InstallationPage } from "./HeroSix";

function HeroSix() {
  return (
    <div className={cn("p-6 bg-black text-white dark:bg-white ")}>
      {/* Demo Section */}
      <div className="">
        <Example />
      </div>
    </div>
  );
}

const CodexSix = () => {
  return (
    <div className="dark:bg-slate-200 bg-slate-900 p-8">
      <CodeBlock code={`${actualCodeString}`} />
    </div>
  );
};

const steps = [
  {
    title: "📍 Add following code in style.ts",
    content: (
      <CodeBlock
        code={`
//style.ts
const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  
  export default styles;`}
      />
    ),
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
  {
    title: "📍 Add the following code in tailwind.config.js file",
    content: (
      <CodeBlock
        code={`
  /** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        primary: "#00040f", // Your primary background color
        secondary: "#00f6ff", // Your secondary accent color
        dimWhite: "rgba(255, 255, 255, 0.7)", // A dimmed white color
        dimBlue: "rgba(9, 151, 124, 0.1)", // A dimmed blue color
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Use the Poppins font family
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  // ...
};
          `}
      />
    ),
  },
];

const InstallationSix = () => {
  return <InstallationPage steps={steps} />;
};

export { HeroSix, CodexSix, InstallationSix };
