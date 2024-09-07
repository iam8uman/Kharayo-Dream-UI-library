import React from "react";
import Head from "next/head";
import VersionLayout from "./versionLayout";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function DashboardLayout({
  children,
  title = "Navbar | SUI The DREAM UI",
  description = "Experience the future of UI design with SUI - The DREAM UI. Streamline your development process with our innovative and intuitive components.",
}: DashboardLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sui.whysumancode.com" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sui.whysumancode.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <section className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <VersionLayout />
          {children}
        </main>
      </section>
    </>
  );
}
