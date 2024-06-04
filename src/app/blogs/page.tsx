import HackerStyleContainer from "@/components/HackerUIComponents/atoms/HackerStyleContainer/HackerStyleContainer";
import { builder } from "@builder.io/sdk";
import Link from "next/link";
import BlogCard from "@/components/molecule/BlogCard/BlogCard";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Blogs() {
  const allPages = await builder.getAll("blog-page", {
    options: {
      noTargeting: true,
    },
  });

  return (
    <HackerStyleContainer parentSize additionalClass="blogs-page">
      <h1>Blogs</h1>
      {allPages.map((page) => (
        <BlogCard
          key={page.id}
          title={page?.data?.title}
          shortDesc={page?.data?.shortDesc}
          link={`/blogs/${page?.data?.blogId}`}
        />
      ))}
    </HackerStyleContainer>
  );
}
