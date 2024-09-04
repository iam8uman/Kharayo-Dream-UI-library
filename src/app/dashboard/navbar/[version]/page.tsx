"use client";

import React from "react";
import { useParams } from "next/navigation";
import { NavbarOne, CodexOne } from "@/components/dashboard/navbar/NavbarOne";
import NavbarTwo from "@/components/dashboard/navbar/NavbarTwo"; // Import this if NavbarTwo exists
import componentData from "@/lib/componentData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NavbarVersionPage: React.FC = () => {
  const version = useParams().version;

  const renderNavbar = () => {
    switch (version) {
      case "one":
        return <NavbarOne />;
      case "two":
        return <NavbarTwo />;
      default:
        return <p>Component not found</p>;
    }
  };

  const renderPreview = () => {
    switch (version) {
      case "one":
        return <CodexOne />;
      case "two":
        return <p>Preview not available for this version</p>;
      default:
        return <p>Component not found</p>;
    }
  };

  const componentInfo =
    componentData.navbar[version as keyof typeof componentData.navbar];

  return (
    <div>
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
    </div>
  );
};

export default NavbarVersionPage;