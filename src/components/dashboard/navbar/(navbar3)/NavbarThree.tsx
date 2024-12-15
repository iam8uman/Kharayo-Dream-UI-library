import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/dark-mode";
import Link from "next/link";

const Example =  () => {
  return (
    <div className="flex items-end justify-end">
      <div className="container flex  border-none justify-center">
        <nav className="shadow-lg flex items-center justify-between gap-20 lg:gap-3 px-3 lg:py-0 bg-slate-200 dark:bg-slate-950 border border-slate-500 font-semibold text-sky-500 rounded-full">
          <div className=" logo px-2 cursor-pointer ">
            <Image
              height={400}
              width={400}
              src="/SUI.png"
              className="rounded-3xl border w-10 h-10 border-none  shadow-lg"
              alt="Company Logo"
            />
            <span className="sr-only">Company Logo</span>
          </div>
          <ul className="lg:flex flex-row items-center gap-2 p-1 hidden ">
            <li>
              <Link href="/">
                <button className="p-2 rounded-full text-sky-500  hover:text-black hover:dark:text-white transition flex flex-row gap-2">
                  Dashboard
                </button>
              </Link>
            </li>
            <li>
              <a
                href="#feature"
                className="px-2 backdrop:blur-md  text-sky-500  hover:text-black hover:dark:text-white ease-in-out rounded-full transition-all cursor-pointer"
              >
                Activity
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="px-3 backdrop:blur-md  text-sky-500  hover:text-black hover:dark:text-white ease-in-out rounded-full transition-all cursor-pointer"
              >
                Pricing
              </a>
            </li>
            <div>
              <ModeToggle />
            </div>
          </ul>
          <div className="lg:hidden">
            <ModeToggle />
            <span className="sr-only">Mobile Menubar Icon</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Example;

export const actualCodeString = `

import React, { useState } from "react";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/dark-mode";
import Link from "next/link";

const Example = async () => {
  return (
    <div className="flex items-end justify-end">
      <div className="container flex  border-none justify-center z-20 fixed top-2  ">
        <nav className="shadow-lg flex items-center justify-between gap-20 lg:gap-3 px-3 lg:py-0 bg-slate-200 dark:bg-slate-950 border border-slate-500 font-semibold text-sky-500 rounded-full">
          <div className=" logo px-2 cursor-pointer ">
            <Image
              height={400}
              width={400}
              src="/Kharayo.png"
              className="rounded-3xl border w-10 h-10 border-none  shadow-lg"
              alt="Company Logo"
            />
            <span className="sr-only">Company Logo</span>
          </div>
          <ul className="lg:flex flex-row items-center gap-2 p-1 hidden ">
            <li>
              <Link
                href="/"
                className="p-2 rounded-full text-sky-500  hover:text-black hover:dark:text-white transition flex flex-row gap-2"
              >
                <button className="p-2 rounded-full text-sky-500  hover:text-black hover:dark:text-white transition flex flex-row gap-2">
                  Dashboard
                </button>
              </Link>
            </li>
            <li>
              <a
                href="#feature"
                className="px-2 backdrop:blur-md  text-sky-500  hover:text-black hover:dark:text-white ease-in-out rounded-full transition-all cursor-pointer"
              >
                Activity
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="px-3 backdrop:blur-md  text-sky-500  hover:text-black hover:dark:text-white ease-in-out rounded-full transition-all cursor-pointer"
              >
                Pricing
              </a>
            </li>
            <div>
              <ModeToggle />
            </div>
          </ul>
          <div className="lg:hidden">
            <ModeToggle />
            <span className="sr-only">Mobile Menubar Icon</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Example;
`;

const InstallationStep: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    {children}
  </div>
);

interface InstallationPageProps {
  steps: {
    title: string;
    content: React.ReactNode;
  }[];
}

export function InstallationPage({ steps }: InstallationPageProps) {
  return (
    <div className="min-h-screen pt-6 mt-16">
      <h1 className="text-3xl font-bold mb-6">Installation</h1>

      <Tabs defaultValue="manual" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="cli">CLI</TabsTrigger>
          <TabsTrigger value="manual">Manual</TabsTrigger>
        </TabsList>

        <TabsContent value="cli">
          {/* CLI content here */}
          <p>CLI installation instructions will go here.</p>
        </TabsContent>

        <TabsContent value="manual">
          <Card className="bg-gray-100 border-gray-300 dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="pt-6">
              {steps.map((step, index) => (
                <InstallationStep key={index} title={step.title}>
                  {step.content}
                </InstallationStep>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
