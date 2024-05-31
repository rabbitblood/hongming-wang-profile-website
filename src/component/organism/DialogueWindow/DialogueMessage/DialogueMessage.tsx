import { useEffect, useState } from "react";
import "./DialogueMessage.css";
import HackerStyleContainer from "@/component/HackerUIComponents/atoms/HackerStyleContainer/HackerStyleContainer";
import { TypeAnimation } from "react-type-animation";

export interface DialogueMessageProps {
  content: React.ReactNode | string;
  /** left as system, right as user */
  position: "left" | "right";
  /** in ms */
  timeBeforeShow?: number | "infinity";
}

export default function DialogueMessage(props: DialogueMessageProps) {
  const timeBeforeShow = props.timeBeforeShow ?? 1000;
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (timeBeforeShow === "infinity") {
      return;
    }

    const showMessageTimeout = setTimeout(() => {
      setShowMessage(true);
    }, timeBeforeShow);

    return () => {
      clearTimeout(showMessageTimeout);
    };
  }, [timeBeforeShow]);

  return (
    <div className="message-container">
      <HackerStyleContainer additionalClass={`message ${props.position}`}>
        {showMessage ? (
          props.content
        ) : (
          <TypeAnimation
            sequence={[
              ".",
              200,
              "..",
              200,
              "...",
              200,
              "....",
              200,
              ".....",
              200,
              "......",
              200,
              ".......",
            ]}
            cursor={false}
            wrapper="span"
            repeat={Infinity}
          />
        )}
      </HackerStyleContainer>
    </div>
  );
}
