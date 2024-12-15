"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  HeroOne,
  HeroTwo,
  HeroThree,
  HeroFour,
  HeroFive,
  HeroSix,
  CodexOne,
  CodexTwo,
  CodexThree,
  CodexFour,
  CodexFive,
  CodexSix,
  InstallationOne,
  InstallationTwo,
  InstallationThree,
  InstallationFour,
  InstallationFive,
  InstallationSix,
} from "@/components/dashboard/hero"
import VersionLayout from "./version-layout";

export const HeroVersions = [
  { id: "1", component: HeroOne, codex: CodexOne, installation: InstallationOne, label: "One" },
  { id: "2", component: HeroTwo, codex: CodexTwo, installation: InstallationTwo, label: "Two" },
  { id: "3", component: HeroThree, codex: CodexThree, installation: InstallationThree, label: "Three" },
  { id: "4", component: HeroFour, codex: CodexFour, installation: InstallationFour, label: "Four" },
  { id: "5", component: HeroFive, codex: CodexFive, installation: InstallationFive, label: "Five" },
  { id: "6", component: HeroSix, codex: CodexSix, installation: InstallationSix, label: "Six" },
]

const HeroVersionsPage: React.FC = () => {
  return (
    <Tabs defaultValue="1" className="w-full">
      <TabsList className="flex flex-wrap gap-2">
        {HeroVersions.map((version) => (
          <TabsTrigger key={version.id} value={version.id} asChild>
            <Badge className="cursor-pointer bg-white text-black dark:bg-black dark:text-white border border-slate-500 hover:bg-sky-500 hover:text-white data-[state=active]:bg-sky-500 data-[state=active]:text-white">
              {version.label}
            </Badge>
          </TabsTrigger>
        ))}
      </TabsList>
      {HeroVersions.map((version) => (
        <TabsContent key={version.id} value={version.id}>
          <VersionLayout />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default HeroVersionsPage;
