"use client"

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import VersionLayout from "./version-layout"

import {
  NavbarOne,
  NavbarTwo,
  NavbarThree,
  NavbarFour,
  NavbarFive,
  NavbarSix,
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
} from "@/components/dashboard/navbar"

export const NavbarVersions = [
  { id: "1", component: NavbarThree, codex: CodexThree, installation: InstallationThree, label: "One" },
  { id: "2", component: NavbarTwo, codex: CodexTwo, installation: InstallationTwo, label: "Two" },
  { id: "3", component: NavbarOne, codex: CodexOne, installation: InstallationOne, label: "Three" },
  { id: "4", component: NavbarFour, codex: CodexFour, installation: InstallationFour, label: "Four" },
  { id: "5", component: NavbarFive, codex: CodexFive, installation: InstallationFive, label: "Five" },
  { id: "6", component: NavbarSix, codex: CodexSix, installation: InstallationSix, label: "Six" },
]

const NavbarVersionsPage: React.FC = () => {
  return (
    <Tabs defaultValue="1" className="w-full">
      <TabsList className="flex flex-wrap gap-2">
        {NavbarVersions.map((version) => (
          <TabsTrigger key={version.id} value={version.id} asChild>
            <Badge
              className="cursor-pointer bg-white text-black dark:bg-black dark:text-white border border-slate-500 hover:bg-sky-500 hover:text-white data-[state=active]:bg-sky-500 data-[state=active]:text-white"
            >
              {version.label}
            </Badge>
          </TabsTrigger>
        ))}
      </TabsList>
      {NavbarVersions.map((version) => (
        <TabsContent key={version.id} value={version.id}>
          <VersionLayout />
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default NavbarVersionsPage

