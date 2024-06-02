import React from "react";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import HackerStyleContainer from "@/components/HackerUIComponents/atoms/HackerStyleContainer/HackerStyleContainer";

interface PageProps {
  params: {
    blogid: string[];
  };
}

export default async function Page(props: PageProps) {
  const content = await builder
    .get("blog-page", {
      userAttributes: {
        urlPath: "/blogs/" + (props?.params?.blogid || ""),
      },
    })
    .toPromise();

  console.log(content);

  return (
    <HackerStyleContainer>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={"blog-page"} />
    </HackerStyleContainer>
  );
}
