import React from "react";
import "./HackerStyleParagraph.css";

interface HackerStyleParagraphProps {
  attributes?: any;
  children: React.ReactNode;
}

export default function HackerStyleParagraph(props: HackerStyleParagraphProps) {
  return (
    <p {...props.attributes} className="hacker-paragraph">
      {props.children}
    </p>
  );
}
