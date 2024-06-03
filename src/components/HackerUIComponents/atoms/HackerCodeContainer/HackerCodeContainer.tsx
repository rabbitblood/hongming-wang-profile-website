"use client";
import "./HackerCodeContainer.css";
import copyIcon from "@/assets/icons/copy-icon.png";

interface HackerCodeContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  attributes: any;
}

export default function HackerCodeContainer(props: HackerCodeContainerProps) {
  const copyCode = () => {
    if (!props.children) return;

    navigator.clipboard.writeText(props.children.toString());
  };
  return (
    <code className="hacker-code-container" {...props.attributes}>
      <img
        className="copy-code-button"
        src={copyIcon.src}
        alt=""
        onClick={copyCode}
      />
      {props.children}
    </code>
  );
}
