"use client";

import { useEffect, useCallback, useMemo, memo } from "react";
import { useParams } from "next/navigation";
import componentData from "@/lib/componentData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CodexFive,
  CodexFour,
  CodexOne,
  CodexSix,
  CodexThree,
  CodexTwo,
  InstallationFive,
  InstallationFour,
  InstallationOne,
  InstallationSix,
  InstallationThree,
  InstallationTwo,
  NavbarFive,
  NavbarFour,
  NavbarOne,
  NavbarSix,
  NavbarThree,
  NavbarTwo,
} from "@/components/dashboard/navbar";

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
          return <NavbarOne />;
        case "2":
          return <NavbarTwo />;
        case "3":
          return <NavbarThree />;
        case "4":
          return <NavbarFour />;
        case "5":
          return <NavbarFive />;
          case "6":
            return <NavbarSix />;
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

  const renderPreview = useCallback(
    function renderPreview() {
      switch (version) {
        case "1":
          return <CodexOne />;
        case "2":
          return <CodexTwo />;
        case "3":
          return <CodexThree />;
        case "4":
          return <CodexFour />;
        case "5":
          return <CodexFive />;
          case "6":
            return <CodexSix />;
        default:
          return <p>Component Coming Soon!!!</p>;
      }
    },
    [version]
  );

  const renderInstallation = useCallback(
    function renderInstallation() {
      switch (version) {
        case "1":
          return <InstallationOne />;
        case "2":
          return <InstallationTwo />;
        case "3":
          return <InstallationThree />;
        case "4":
          return <InstallationFour />;
        case "5":
          return <InstallationFive />;
          case "6":
            return <InstallationSix />;
        default:
          return <p>Component Coming soon!</p>;
      }
    },
    [version]
  );

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
