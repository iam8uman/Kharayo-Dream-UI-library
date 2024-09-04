import React from "react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/shared/CodeBlock";
// import { Toggle } from "@/components/shared/Toggle";

export default function NavbarOne() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div
      className={cn(
        "p-6",
        darkMode ? "bg-black text-white" : "bg-white text-black"
      )}
    >
      <h1 className="text-3xl font-semibold">Navbar One</h1>
      <p className="mt-2 text-lg">
        This is an example of a responsive navbar component with multiple
        designs.
      </p>
      
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

      {/* Code Section */}
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

      {/* Guidelines Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Implementation Guide</h2>
        <p className="mt-2">
          Follow the steps below to integrate this component into your project:
        </p>
        <ol className="list-decimal ml-6 mt-2">
          <li>
            Install the required dependencies:{" "}
            <code>npm install framer-motion clsx tailwind-merge</code>
          </li>
          <li>
            Create a utility function in <code>lib/utils.ts</code>.
          </li>
          <li>
            Copy the NavbarOne component code and paste it into your project.
          </li>
          <li>Ensure you have TailwindCSS set up in your project.</li>
          <li>Customize the navbar according to your needs.</li>
        </ol>
      </div>
    </div>
  );
}
