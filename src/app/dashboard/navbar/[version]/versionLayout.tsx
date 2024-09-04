import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const VersionLayout = () => {
  return (
    <div>
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className=" border-sky-600 border py-5 px-2 ">
          <TabsTrigger
            value="preview"
            className=" active:text-black py-1.5 px-3"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger value="codex" className=" active:text-black py-1.5 px-3">
            CodeX
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          {/* <PreviewComponent /> */}
        </TabsContent>
        <TabsContent value="codex">
          {/* <CodexComponent /> */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VersionLayout;
