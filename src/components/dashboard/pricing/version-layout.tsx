"use client"

import React, { useCallback, useMemo } from "react"
import { useParams } from "next/navigation"
import componentData from "@/lib/componentData"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodexOnePricing, InstallationOnePricing, PricingOne } from "./(pricing1)/main"

const navbarComponents = {
  "1": PricingOne
}

const codexComponents = {
  "1": CodexOnePricing,
}

const installationComponents = {
  "1": InstallationOnePricing
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

