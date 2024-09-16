"use client";

import React, { useEffect, useCallback, useMemo, memo } from "react";
import { useParams } from "next/navigation";
import componentData from "@/lib/componentData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodexOnePricing, InstallationOnePricing, PricingOne } from "@/components/dashboard/pricing";

const VersionLayout: React.FC = memo(() => {
  const version = useParams().version;

  useEffect(() => {
    // Scroll to the top whenever the version changes
    window.scrollTo(0, 0);
  }, [version]);

  const renderNavbar = useCallback(
    function renderNavbar() {
      switch (version) {
        case "1":
          return <PricingOne />;

        default:
          return (
            <div className="p-6 bg-slate-200 text-white">
              <p className="text-3xl bg-slate-900 p-4 rounded-md h-52 items-center justify-center flex text-sky-500">
                Coming Soon...
              </p>
            </div>
          );
      }
    },
    [version]
  );

  const renderPreview = useCallback(() => {
    switch (version) {
      case "1":
        return <CodexOnePricing />;
      default:
        return <p>Component Coming Soon!!!</p>;
    }
  }, [version]);

  const renderInstallation = useCallback(() => {
    switch (version) {
      case "1":
        return <InstallationOnePricing />;
      default:
        return <p>Component Coming soon!</p>;
    }
  }, [version]);

  const componentInfo = useMemo(() => {
    return componentData.navbar[version as keyof typeof componentData.navbar];
  }, [version]);

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
          <div className="demo">{renderNavbar()}</div>
        </TabsContent>
        <TabsContent value="codex">
          <div className="demo">{renderPreview()}</div>
          <pre className="code-snippet mt-4">
            <code>{componentInfo?.codex}</code>
          </pre>
        </TabsContent>
      </Tabs>
      <div className="demo">{renderInstallation()}</div>
    </div>
  );
});

VersionLayout.displayName = "VersionLayout";

export default VersionLayout;
