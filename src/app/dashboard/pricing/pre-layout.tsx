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
  { href: "/dashboard/pricing/1", label: "One" },
  { href: "/dashboard/pricing/2", label: "Two" },
  { href: "/dashboard/pricing/3", label: "Three" },
  { href: "/dashboard/pricing/4", label: "Four" },
  { href: "/dashboard/pricing/5", label: "Five" },
  { href: "/dashboard/pricing/6", label: "Six" },
  { href: "/dashboard/pricing/7", label: "Seven" },
];

const PreLayout: React.FC = () => {
  const currentPath = usePathname();

  return (
    <div className="p-6 flex-1">
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
            <BreadcrumbPage>pricing</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="text-4xl text-start items-top mt-6">pricing Section </div>
      <div className="text-sm text-slate-500 text-start items-top">
        A collections of pricing sections. Each pricing section is a different and powered by @shadcn and Tailwind CSS.
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