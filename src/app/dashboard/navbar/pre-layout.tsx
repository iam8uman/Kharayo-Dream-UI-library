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
import { SlashIcon } from "lucide-react";

const PreLayout: React.FC = () => {
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
            <BreadcrumbPage>Navbar</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="text-4xl text-start items-top mt-4">Navbar </div>
      <div className="text-sm text-slate-500 text-start items-top">
        A collection of links for navigating websites.
      </div>
      <div className="flex flex-row justify-start items-center gap-4 mt-2">
        <Badge className="bg-white text-black aria-selected:bg-sky-500 aria-selected:text-white">
          <Link href="/dashboard/navbar/one">One</Link>
        </Badge>
        <Badge className="bg-red-500 text-white">
          <Link href="/dashboard/navbar/two">Two</Link>
        </Badge>
      </div>
    </div>
  );
};

export default PreLayout;
