import React from "react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/shared/CodeBlock";
// import { Toggle } from "@/components/shared/Toggle";

function NavbarOne() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div
      className={cn(
        "p-6",
        darkMode ? "bg-black text-white" : "bg-white text-black"
      )}
    >
      {/* Demo Section */}
      <div className="mt-4">
        {/* Replace this with your actual navbar code */}
        <nav className="bg-gray-800 p-4 rounded-md">
          <div className="flex items-center justify-between">
            <div className="text-white text-xl">Brand</div>
            <div className="space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                Home
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                About
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

const CodexOne = () => {
  return (
    <div className="bg-white p-8">
      <CodeBlock
        code={`<nav className="bg-gray-800 p-4 rounded-md">
<div className="flex items-center justify-between">
  <div className="text-white text-xl">Brand</div>
  <div className="space-x-4">
    <a href="#" className="text-white hover:text-gray-300">Home</a>
    <a href="#" className="text-white hover:text-gray-300">About</a>
    <a href="#" className="text-white hover:text-gray-300">Contact</a>
  </div>
</div>
</nav>`}
      />
    </div>
  );
};

export { NavbarOne, CodexOne };
