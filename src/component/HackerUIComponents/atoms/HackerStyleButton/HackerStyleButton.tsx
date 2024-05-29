import style from "./HackerStyleButton.module.css";

const normalButtonSvg = (
  <svg
    className={style["svg-bg"]}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-80 0 160 50"
    preserveAspectRatio="none"
  >
    {" "}
    <defs>
      <radialGradient id="myGradient">
        <stop offset="0%" stopColor="#8ff8ea" />
        <stop offset="100%" stopColor="#306e51" />
      </radialGradient>
    </defs>
    <path d="M 0 0 L 0 0 L 80 0 L 80 50 L -80 50 L -80 0 L 0 0" />
  </svg>
);

const upButtonSvg = (
  <svg
    className={style["svg-bg"]}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-80 0 160 50"
    preserveAspectRatio="none"
  >
    {" "}
    <defs>
      <radialGradient id="myGradient">
        <stop offset="0%" stopColor="#8ff8ea" />
        <stop offset="100%" stopColor="#306e51" />
      </radialGradient>
    </defs>
    <path d="M 0 0 L 0 0 L 50 0 L 80 50 L -80 50 L -50 0 L 0 0" />
  </svg>
);

const DownButtonSvg = (
  <svg
    className={style["svg-bg"]}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-80 0 160 50"
    preserveAspectRatio="none"
  >
    {" "}
    <defs>
      <radialGradient id="myGradient">
        <stop offset="0%" stopColor="#8ff8ea" />
        <stop offset="100%" stopColor="#306e51" />
      </radialGradient>
    </defs>
    <path d="M 0 50 L 0 50 L 50 50 L 80 0 L -80 0 L -50 50 L 0 50" />
  </svg>
);

export interface HackerStyleButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  button_direction?: "normal" | "up" | "down";
  marginx?: "none" | "half" | "full" | "extra";
  bg?: "solid" | "half-transparent" | "transparent";
  active?: boolean;
}

export default function HackerStyleButton({
  children,
  marginx,
  button_direction,
  bg,
  active,
  ...props
}: HackerStyleButtonProps) {
  if (!button_direction) button_direction = "normal";
  if (!marginx) marginx = "half";
  if (!bg) bg = "half-transparent";

  return (
    <div
      className={
        style["hacker-style-button-container"] +
        " " +
        style[`margin-${marginx}`] +
        " " +
        style[bg] +
        (active ? " " + style["active"] : "")
      }
      {...props}
    >
      <div className={style["button-content"]}>{children}</div>
      {button_direction === "normal" && normalButtonSvg}
      {button_direction === "up" && upButtonSvg}
      {button_direction === "down" && DownButtonSvg}
    </div>
  );
}
