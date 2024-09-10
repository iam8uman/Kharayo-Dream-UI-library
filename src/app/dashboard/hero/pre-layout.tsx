"use client";

// src/app/dashboard/navbar/page.tsx
import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard/hero/1", label: "One" },
  { href: "/dashboard/hero/2", label: "Two" },
  { href: "/dashboard/hero/3", label: "Three" },
  { href: "/dashboard/hero/4", label: "Four" },
  { href: "/dashboard/hero/5", label: "Five" },
  { href: "/dashboard/hero/6", label: "Six" },
  { href: "/dashboard/hero/7", label: "Seven" },
];

const PreLayout: React.FC = () => {
  const currentPath = usePathname();

  return (
    <div className="p-4 flex-1">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Hero</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="text-4xl text-start items-top mt-6">Hero Section </div>
      <div className="text-sm text-slate-500 text-start items-top">
        A collections of hero sections. Each hero section is a different and powered by @shadcn and Tailwind CSS.
      </div>
      <div className="flex flex-row justify-start items-center gap-4 mt-2">
        {links.map((link) => (
          <Badge
            key={link.href}
            className={`${
              currentPath === link.href
                ? "bg-sky-500 text-white hover:bg-sky-600"
                : "bg-white text-black dark:bg-black dark:text-white border border-slate-500"
            }`}
          >
            <Link href={link.href}>{link.label}</Link>
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default PreLayout;