import "./HackerStyleContainer.css";

interface HackerStyleContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  bg?: "transparent" | "half-transparent" | "solid";
  parentSize?: boolean;
  additionalClass?: string;
  children: React.ReactNode;
}

export default function HackerStyleContainer({
  children,
  bg,
  additionalClass,
  parentSize,
  ...props
}: HackerStyleContainerProps) {
  if (!bg) {
    bg = "half-transparent";
  }

  return (
    <div
      className={`hacker-style-container ${bg} ${additionalClass} ${
        parentSize ? "parent-size" : ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
}
