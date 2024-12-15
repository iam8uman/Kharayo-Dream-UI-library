"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavbarVersions } from "./pricing-version";
import componentData from "@/lib/componentData";


const OptimizedPricing: React.FC = () => {
  const [activeVersion, setActiveVersion] = useState("1");

  return (
    <div className="w-full">
      <Tabs
        value={activeVersion}
        onValueChange={setActiveVersion}
        className="w-full"
      >
        <TabsList className="flex flex-wrap gap-2 mb-4 justify-start  dark:bg-slate-900 bg-slate-100">
          {NavbarVersions.map((version) => (
            <TabsTrigger key={version.id} value={version.id} asChild>
              <Badge className="cursor-pointer bg-white text-black dark:bg-black dark:text-white border border-slate-500 hover:bg-sky-500 hover:text-white data-[state=active]:bg-sky-500 dark:data-[state=active]:bg-sky-500 rounded-full data-[state=active]:text-white rounfu">
                {version.label}
              </Badge>
            </TabsTrigger>
          ))}
        </TabsList>

        {NavbarVersions.map((version) => (
          <TabsContent key={version.id} value={version.id}>
            <Card>
              <CardContent>
                <Tabs defaultValue="preview" className="w-full">
                  <TabsList className="border-sky-600 border py-5 px-2 my-4">
                    <TabsTrigger value="preview" className="py-1.5 px-3">
                      Preview
                    </TabsTrigger>
                    <TabsTrigger value="codex" className="py-1.5 px-3">
                      CodeX
                    </TabsTrigger>
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
                      <code>
                        {
                          componentData.navbar[
                            version.id as keyof typeof componentData.navbar
                          ]?.codex
                        }
                      </code>
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
  );
};

export default OptimizedPricing;
