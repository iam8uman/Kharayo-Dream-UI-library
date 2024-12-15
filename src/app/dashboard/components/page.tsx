// src/app/dashboard/navbar/page.tsx
import React from "react";
import { Blockquote } from "@/components/ui/backquote";
import OptimizedHero from "@/components/dashboard/hero/optimized-hero";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

import ImageMouseTrail from "@/components/ui/mouse-trails";

const images = [
  "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1584043204475-8cc101d6c77a?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1518599904199-0ca897819ddb?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1709949908219-fd9046282019?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format",
];

const Page: React.FC = () => {
  return (
    <div className="p-4">
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
              <BreadcrumbPage>Components</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-4xl text-start items-top mt-6">Components</div>
        <div className="text-sm text-slate-500 text-start items-top mb-4">
          A collection of links for navigating websites.
        </div>
      </div>
      <Separator className="bg-gradient-to-r from-indigo-500 to-sky-500 my-6" />
      <section>
        <ImageMouseTrail
          items={images}
          maxNumberOfImages={5}
          distance={25}
          imgClass="sm:w-40 w-28 sm:h-48 h-36"
        >
          <article className="relative z-50 mix-blend-difference">
            <h1 className="lg:text-4xl md:text-3xl text-xl text-center font-semibold mix-blend-difference">
              ✨ Experience Interactive Designs with <br />
              Dynamic Mouse Trails
            </h1>
          </article>
        </ImageMouseTrail>
      </section>

      <Blockquote className="bg-slate-900  text-slate-50 border-slate-100 border my-6">
        Hero today, legend tomorrow!
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500  text-end">
          CEO @whysumancode.com
        </div>
      </Blockquote>
    </div>
  );
};

export default Page;
