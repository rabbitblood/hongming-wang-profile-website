import React from "react";
import "./HackerStyleParagraph.css";

interface HackerStyleParagraphProps {
  attributes: any;
  children: React.ReactNode;
}

export default function HackerStyleParagraph(props: HackerStyleParagraphProps) {
  return (
    <p className="hacker-paragraph" {...props.attributes}>
      {props.children}
    </p>
  );
}
