import "./HackerStyleContainer.css";

interface HackerStyleContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  bg?: "transparent" | "half-transparent" | "solid";

  additionalClass?: string;
  children: React.ReactNode;
}

export default function HackerStyleContainer({
  children,
  bg,
  additionalClass,
  ...props
}: HackerStyleContainerProps) {
  if (!bg) {
    bg = "half-transparent";
  }

  return (
    <div
      className={`hacker-style-container ${bg} ${additionalClass}`}
      {...props}
    >
      {children}
    </div>
  );
}
