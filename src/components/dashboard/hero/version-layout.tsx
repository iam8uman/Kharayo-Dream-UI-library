"use client"

import React, { useCallback, useMemo } from "react"
import { useParams } from "next/navigation"
import componentData from "@/lib/componentData"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodexOne, HeroOne, InstallationOne } from "./(hero1)/main"
import { CodexTwo, HeroTwo, InstallationTwo } from "./(hero2)/main"
import { CodexThree, HeroThree, InstallationThree } from "./(hero3)/main"
import { CodexFour, HeroFour, InstallationFour } from "./(hero4)/main"
import { CodexFive, HeroFive, InstallationFive } from "./(hero5)/main"
import { CodexSix, HeroSix, InstallationSix } from "./(hero6)/main"
const navbarComponents = {
  "1": HeroOne,
  "2": HeroTwo,
  "3": HeroThree,
  "4": HeroFour,
  "5": HeroFive,
  "6": HeroSix,
}

const codexComponents = {
  "1": CodexOne,
  "2": CodexTwo,
  "3": CodexThree,
  "4": CodexFour,
  "5": CodexFive,
  "6": CodexSix,
}

const installationComponents = {
  "1": InstallationOne,
  "2": InstallationTwo,
  "3": InstallationThree ,
  "4": InstallationFour,
  "5": InstallationFive,
  "6": InstallationSix,
}

const VersionLayout: React.FC = () => {
  const version = useParams().version as string

  const NavbarComponent = useMemo(() => {
    return navbarComponents[version as keyof typeof navbarComponents] || (() => (
      <div className="p-6 bg-slate-200 text-white">
        <p className="text-3xl bg-slate-900 p-4 rounded-md h-52 items-center justify-center flex text-sky-500">
          Coming Soon...
        </p>
      </div>
    ))
  }, [version])

  const CodexComponent = useMemo(() => {
    return codexComponents[version as keyof typeof codexComponents] || (() => <p>Component Coming Soon!!!</p>)
  }, [version])

  const InstallationComponent = useMemo(() => {
    return installationComponents[version as keyof typeof installationComponents] || (() => <p>Component Coming soon!</p>)
  }, [version])

  const componentInfo = useMemo(() => {
    return componentData.navbar[version as keyof typeof componentData.navbar]
  }, [version])

  return (
    <div className="px-6 mt-6 w-full flex-1">
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="border-sky-600 border py-5 px-2">
          <TabsTrigger value="preview" className="py-1.5 px-3">
            Preview
          </TabsTrigger>
          <TabsTrigger value="codex" className="py-1.5 px-3">
            CodeX
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="demo">
            <NavbarComponent />
          </div>
        </TabsContent>
        <TabsContent value="codex">
          <div className="demo">
            <CodexComponent />
          </div>
          <pre className="code-snippet mt-4">
            <code>{componentInfo?.codex}</code>
          </pre>
        </TabsContent>
          <div className="demo">
            <InstallationComponent />
          </div>
      </Tabs>
    </div>
  )
}

export default VersionLayout

