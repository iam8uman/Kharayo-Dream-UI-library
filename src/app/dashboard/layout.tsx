import { Metadata } from "next";
import Sidebar from "@/lib/layout/Sidebar";
import Topbar from "@/lib/layout/Topbar";

export const metadata: Metadata = {
  title: "SUI Dashboard | Dream UI Components for Web Development",
  description:
    "Explore and manage your UI components with SUI Dashboard. Built with Next.js, Tailwind CSS, and Framer Motion for efficient web development.",
  keywords:
    "UI dashboard, component management, Next.js, Tailwind CSS, Framer Motion, web development tools",
  openGraph: {
    title: "SUI Dashboard | UI Component Management",
    description:
      "Streamline your web development process with SUI Dashboard. Manage and customize UI components effortlessly.",
    type: "website",
    url: "https://sui.whysumancode.com/dashboard",
    images: "https://sui.whysumancode.com/dashboard-og-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "SUI Dashboard | Web UI Tools",
    description:
      "Powerful dashboard for managing modern UI components. Built for developers, by developers.",
    images: "https://sui.whysumancode.com/dashboard-twitter-image.jpg",
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-slate-100 dark:bg-slate-900">
    <header className="sr-only">
      <h1>SUI Dashboard</h1>
    </header>
    <section>
      <div className="flex min-h-screen h-full w-full">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Topbar />
          {children}
        </div>
      </div>
    </section>
  </div>
  );
}
