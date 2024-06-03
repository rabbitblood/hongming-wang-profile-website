import React from "react";
import "./HackerStyleParagraph.css";

interface HackerStyleParagraphProps {
  children: React.ReactNode;
}

export default function HackerStyleParagraph(props: HackerStyleParagraphProps) {
  return <p className="hacker-paragraph">{props.children}</p>;
}
