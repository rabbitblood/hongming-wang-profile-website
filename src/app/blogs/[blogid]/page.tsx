import React from "react";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import HackerStyleContainer from "@/components/HackerUIComponents/atoms/HackerStyleContainer/HackerStyleContainer";
import HackerStyleHeading from "@/components/HackerUIComponents/atoms/HackerStyleHeading/HackerStyleHeading";
import "./BlogId.css";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: {
    blogid: string;
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const content = await builder
    .get("blog-page", {
      userAttributes: {
        urlPath: "/blogs/" + (params?.blogid || ""),
      },
    })
    .toPromise();

  return {
    title: `${content.data.title} | ${new Date(
      content.data.blogDate
    ).toLocaleDateString()} | Hongming Wang - Game/Web Dev`,
    description: content.data.shortDesc,
  };
}
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
