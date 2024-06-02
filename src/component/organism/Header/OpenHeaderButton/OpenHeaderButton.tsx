import React from "react";
import "./OpenHeaderButton.css";
import HackerStyleButton from "@/component/HackerUIComponents/atoms/HackerStyleButton/HackerStyleButton";

interface OpenHeaderButtonProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function OpenHeaderButton(props: OpenHeaderButtonProps) {
  return (
    <div className="open-header-button-container" {...props}>
      <HackerStyleButton
        marginx="extra"
        button_direction="up"
        additionalClass="open-header"
      >
        <button className="open-header-button">| | |</button>
      </HackerStyleButton>
    </div>
  );
}
