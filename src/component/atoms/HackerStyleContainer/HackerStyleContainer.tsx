import "./HackerStyleContainer.css";

interface HackerStyleContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  bg?: "transparent" | "half-transparent" | "solid";
  children: React.ReactNode;
}

export default function HackerStyleContainer({
  children,
  bg,
  ...props
}: HackerStyleContainerProps) {
  if (!bg) {
    bg = "half-transparent";
  }

  return (
    <div className={"hacker-style-container " + bg} {...props}>
      {children}
    </div>
  );
}
