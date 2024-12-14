"use client"

import React, { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
import componentData from "@/lib/componentData"

const navbarVersions = [
  { id: "1", component: NavbarOne, codex: CodexOne, installation: InstallationOne, label: "One" },
  { id: "2", component: NavbarTwo, codex: CodexTwo, installation: InstallationTwo, label: "Two" },
  { id: "3", component: NavbarThree, codex: CodexThree, installation: InstallationThree, label: "Three" },
  { id: "4", component: NavbarFour, codex: CodexFour, installation: InstallationFour, label: "Four" },
  { id: "5", component: NavbarFive, codex: CodexFive, installation: InstallationFive, label: "Five" },
  { id: "6", component: NavbarSix, codex: CodexSix, installation: InstallationSix, label: "Six" },
]

const OptimizedNavbar: React.FC = () => {
  const [activeVersion, setActiveVersion] = useState("1")

  return (
    <div className="w-full">
      <Tabs value={activeVersion} onValueChange={setActiveVersion} className="w-full">
        <TabsList className="flex flex-wrap gap-2 mb-4 justify-start  dark:bg-slate-900 bg-slate-100">
          {navbarVersions.map((version) => (
            <TabsTrigger key={version.id} value={version.id} asChild>
              <Badge
                className="cursor-pointer bg-white text-black dark:bg-black dark:text-white border border-slate-500 hover:bg-sky-500 hover:text-white data-[state=active]:bg-sky-500 dark:data-[state=active]:bg-sky-500 rounded-full data-[state=active]:text-white rounfu"
              >
                {version.label}
              </Badge>
            </TabsTrigger>
          ))}
        </TabsList>
        
        {navbarVersions.map((version) => (
          <TabsContent key={version.id} value={version.id}>
            <Card>
              <CardContent>
                <Tabs defaultValue="preview" className="w-full">
                  <TabsList className="border-sky-600 border py-5 px-2 my-4">
                    <TabsTrigger value="preview" className="py-1.5 px-3">Preview</TabsTrigger>
                    <TabsTrigger value="codex" className="py-1.5 px-3">CodeX</TabsTrigger>
                  </TabsList>

                  <TabsContent value="preview">
                    <div className="demo">
                      <version.component />
                    </div>
                  </TabsContent>
                  <TabsContent value="codex">
                    <div className="demo">
                      <version.codex />
                    </div>
                    <pre className="code-snippet mt-4">
                      <code>{componentData.navbar[version.id as keyof typeof componentData.navbar]?.codex}</code>
                    </pre>
                  </TabsContent>
                    <div className="demo">
                      <version.installation />
                    </div>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default OptimizedNavbar

