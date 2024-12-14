"use client"

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import VersionLayout from "./version-layout"

const navbarVersions = [
  { id: "1", label: "One" },
  { id: "2", label: "Two" },
  { id: "3", label: "Three" },
  { id: "4", label: "Four" },
  { id: "5", label: "Five" },
  { id: "6", label: "Six" },
]

const NavbarVersions: React.FC = () => {
  return (
    <Tabs defaultValue="1" className="w-full">
      <TabsList className="flex flex-wrap gap-2">
        {navbarVersions.map((version) => (
          <TabsTrigger key={version.id} value={version.id} asChild>
            <Badge
              className="cursor-pointer bg-white text-black dark:bg-black dark:text-white border border-slate-500 hover:bg-sky-500 hover:text-white data-[state=active]:bg-sky-500 data-[state=active]:text-white"
            >
              {version.label}
            </Badge>
          </TabsTrigger>
        ))}
      </TabsList>
      {navbarVersions.map((version) => (
        <TabsContent key={version.id} value={version.id}>
          <VersionLayout />
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default NavbarVersions

