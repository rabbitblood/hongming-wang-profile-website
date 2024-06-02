import HackerStyleContainer from "@/components/HackerUIComponents/atoms/HackerStyleContainer/HackerStyleContainer";
import { builder } from "@builder.io/sdk";
import Link from "next/link";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Blogs() {
  const allPages = await builder.getAll("blog-page", {
    options: {
      noTargeting: true,
    },
  });

  return (
    <div className="blogs-page">
      <HackerStyleContainer>
        <h1>Blogs</h1>
        {allPages.map((page) => (
          <Link href={`/blogs/${page?.data?.blogId}`} key={page.id}>
            <div>
              <h2>{page?.data?.title}</h2>
              <p>{page?.data?.body}</p>
            </div>
          </Link>
        ))}
      </HackerStyleContainer>
    </div>
  );
}
