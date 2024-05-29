import { useEffect, useState } from "react";
import "./DialogueMessage.css";
import HackerStyleContainer from "@/component/HackerUIComponents/atoms/HackerStyleContainer/HackerStyleContainer";
import { TypeAnimation } from "react-type-animation";

interface DialogueMessageProps {
  children: React.ReactNode;
  dialoguePosition: "left" | "right";
}

export default function DialogueMessage(props: DialogueMessageProps) {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const showMessageTimeout = setTimeout(() => {
      setShowMessage(true);
    }, 1500);

    return () => {
      clearTimeout(showMessageTimeout);
    };
  }, []);
  return (
    <div className="message-container">
      <HackerStyleContainer
        additionalClass={`message ${props.dialoguePosition}`}
      >
        {showMessage ? (
          props.children
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
