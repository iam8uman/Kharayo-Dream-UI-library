import React from "react";
import OptimizedNavbar from "@/components/dashboard/navbar/optimized-navbar";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
  BreadcrumbItem,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

const Page: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex-1">
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

        <div className="text-4xl text-start items-top mt-6">Navbar</div>
        <div className="text-sm text-slate-500 text-start items-top mb-4">
          A collection of links for navigating websites.
        </div>
      </div>
      <Separator className="bg-gradient-to-r from-indigo-500 to-sky-500 my-6" />

      <OptimizedNavbar />
    </div>
  );
};

export default Page;
