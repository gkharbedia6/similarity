"use client";

import { FC } from "react";
import SimpleBar from "simplebar-react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import Code from "@/components/Code";
import { nodejs, python } from "@/helpers/documentation-code";

const DocumentationTabs: FC = () => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs">
        <SimpleBar>
          <Code language="javascript" code={nodejs} show animated />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="python">
        <Code language="javascript" code={python} show animated />
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
