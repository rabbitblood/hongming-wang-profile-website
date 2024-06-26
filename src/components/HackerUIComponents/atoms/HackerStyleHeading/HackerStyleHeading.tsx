import React from "react";
import "./HackerStyleHeading.css";

interface HackerStyleHeadingProps {
  children: React.ReactNode;
  className?: string;
  headingNumber?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  attributes?: any;
}

export default function HackerStyleHeading(props: HackerStyleHeadingProps) {
  return React.createElement(
    props.headingNumber ?? "h1",
    {
      ...props.attributes,
      className: `${props.className} ${"hacker-" + props.headingNumber}`,
    },
    props.children
  );
}
