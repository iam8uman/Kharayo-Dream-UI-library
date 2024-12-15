import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Kharayo | Your Dream UI Library for Next.js, Tailwind CSS, ShadcnUI and Framer Motion",
  description:
    "Build responsive and accessible UI components with Kharayo - a powerful library combining Next.js, Tailwind CSS, shadcn/ui, and Framer Motion for seamless web development.",
  keywords:
    "UI library, Next.js, Tailwind CSS, shadcn/ui, Framer Motion, responsive design, accessibility, web development",
  authors: [
    { name: "Suman Sharma" },
    { name: "Why Suman Code?" },
    { name: "@whysumancode" },
    { name: "@iam8uman" },
  ],
  openGraph: {
    title: "Kharayo | Modern UI Library for Next.js and Tailwind CSS",
    description:
      "Create stunning web interfaces with Kharayo - combining Next.js, Tailwind CSS, and Framer Motion for powerful, responsive designs.",
    type: "website",
    url: "https://Kharayo.whysumancode.com",
    images: "https://Kharayo.whysumancode.com/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kharayo | Next.js UI Library",
    description:
      "Elevate your web development with Kharayo - a modern UI library for Next.js and Tailwind CSS.",
    images: "https://Kharayo.whysumancode.com/twitter-image.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://Kharayo.whysumancode.com" />
      </head>
      <body
        className={`${ubuntu.className} bg-slate-200 dark:bg-slate-950 text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
