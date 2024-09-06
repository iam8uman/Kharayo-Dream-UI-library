import React from "react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/shared/CodeBlock";
import Example, { actualCodeString, InstallationPage } from "./NavbarThree";

function NavbarThree() {
  return (
    <div className={cn("p-6 bg-black text-white dark:bg-white ")}>
      {/* Demo Section */}
      <div className="mt-4">
        <Example />
      </div>
    </div>
  );
}

const CodexThree = () => {
  return (
    <div className="dark:bg-slate-200 bg-slate-900 p-8">
      <CodeBlock code={`${actualCodeString}`} />
    </div>
  );
};

const steps = [
  {
    title: "📍 Install dependencies",
    content: <CodeBlock code={`pnpm add next-themes`} />,
  },
  {
    title: "📍 Add dark-mode file",
    content: (
      <>
        <p className="mb-2">components/ui/dark-mode</p>
        <CodeBlock
          code={`
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="shrink-0 rounded-full transition"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
          `}
        />
      </>
    ),
  },
  {
    title: "📍 Add the ThemeProvider to your root layout",

    content: (
      <>
        <p className="mb-2">app/layout.tsx </p>
        <CodeBlock
          code={`
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
             `}
        />
      </>
    ),
  },
];

const InstallationThree = () => {
  return <InstallationPage steps={steps} />;
};

export { NavbarThree, CodexThree, InstallationThree };
