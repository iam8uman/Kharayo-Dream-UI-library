import React from "react";
import Head from "next/head";
import { Metadata } from "next";

interface DashboardLayoutProps {
  children: React.ReactNode;
  params: {
    version: string;
  };
  title?: string;
  description?: string;
}

export const metadata: Metadata = {
  title: "Hero | Kharayo The DREAM UI Components for Web Development",
  description:
    "Explore and manage your UI components with Kharayo Dashboard. Built with Next.js, Tailwind CSS, and Framer Motion for efficient web development.",
  keywords:
    "UI dashboard, component management, Next.js, Tailwind CSS, Framer Motion, web development tools",
  openGraph: {
    title: "Kharayo Dashboard | UI Component Management",
    description:
      "Streamline your web development process with Kharayo Dashboard. Manage and customize UI components effortlessly.",
    type: "website",
    url: "https://Kharayo.whysumancode.com/dashboard/hero",
    images: "https://Kharayo.whysumancode.com/dashboard-og-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kharayo Dashboard | Web UI Tools",
    description:
      "Powerful dashboard for managing modern UI components. Built for developers, by developers.",
    images: "https://Kharayo.whysumancode.com/dashboard-twitter-image.jpg",
  },
};

export default function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>
          {"Hero | Kharayo The DREAM UI Components for Web Development"}
        </title>
        <meta
          name="description"
          content={
            "Explore and manage your UI components with Kharayo Dashboard. Built with Next.js, Tailwind CSS, and Framer Motion for efficient web development."
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://Kharayo.whysumancode.com" />
        <meta
          property="og:title"
          content={"Navbar | Kharayo The DREAM UI Components for Web Development"}
        />
        <meta
          property="og:description"
          content={
            "Explore and manage your UI components with Kharayo Dashboard. Built with Next.js, Tailwind CSS, and Framer Motion for efficient web development."
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Kharayo.whysumancode.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={"Navbar | Kharayo The DREAM UI Components for Web Development"}
        />
        <meta
          name="twitter:description"
          content={
            "Explore and manage your UI components with Kharayo Dashboard. Built with Next.js, Tailwind CSS, and Framer Motion for efficient web development."
          }
        />
      </Head>
      <section className="min-h-screen flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
        <footer>{/* Add your footer content here */}</footer>
      </section>
    </>
  );
}
