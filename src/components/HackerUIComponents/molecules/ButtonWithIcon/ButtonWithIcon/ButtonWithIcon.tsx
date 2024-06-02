import HackerStyleButton from "../../../atoms/HackerStyleButton/HackerStyleButton";
import { HackerStyleButtonProps } from "../../../atoms/HackerStyleButton/HackerStyleButton";
import "./ButtonWithIcon.css";

import Image from "next/image";

interface ButtonWithIconProps extends HackerStyleButtonProps {
  icon?: string;
  children: React.ReactNode;
}

export default function ButtonWithIcon({
  icon,
  children,
  ...props
}: ButtonWithIconProps) {
  return (
    <HackerStyleButton marginx="extra" {...props}>
      {icon && (
        <Image
          className="hacker-style-button-icon"
          src={icon}
          alt="Token Icon"
          width={0}
          height={0}
        />
      )}
      {children}
    </HackerStyleButton>
  );
}
