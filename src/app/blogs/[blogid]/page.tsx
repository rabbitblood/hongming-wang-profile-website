import React from "react";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import HackerStyleContainer from "@/components/HackerUIComponents/atoms/HackerStyleContainer/HackerStyleContainer";
import HackerStyleHeading from "@/components/HackerUIComponents/atoms/HackerStyleHeading/HackerStyleHeading";
import HackerCodeContainer from "@/components/HackerUIComponents/atoms/HackerCodeContainer/HackerCodeContainer";
import "./BlogId.css";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

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

  console.log(content.data);
  return (
    <HackerStyleContainer>
      {/* Render the Builder page */}
      <HackerStyleHeading headingNumber="h1">
        {content.data.title}
      </HackerStyleHeading>
      <p>{content.data.shortDesc}</p>
      <p>{new Date(content.data.blogDate).toLocaleDateString()}</p>
      <HackerStyleContainer id="blog-container" parentSize>
        <RenderBuilderContent content={content} model={"blog-page"} />
      </HackerStyleContainer>
    </HackerStyleContainer>
  );
}
