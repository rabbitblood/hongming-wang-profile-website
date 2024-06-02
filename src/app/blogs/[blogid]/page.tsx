import React from "react";
import "./BlogId.css";

interface BlogIdProps {
  params: {
    blogid: string;
  };
}

export default function BlogId({ params }: BlogIdProps) {
  console.log(params);
  return (
    <div className="blog-id-page">
      <h1>BlogId</h1>
      <p>Coming soon...</p>
    </div>
  );
}
