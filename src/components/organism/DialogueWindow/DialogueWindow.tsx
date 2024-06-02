"use client";

import "./DialogueWindow.css";

import HackerStyleContainer from "@/components/HackerUIComponents/atoms/HackerStyleContainer/HackerStyleContainer";
import DialogueMessage, {
  DialogueMessageProps,
} from "./DialogueMessage/DialogueMessage";
import HackerStyleButton from "@/components/HackerUIComponents/atoms/HackerStyleButton/HackerStyleButton";
import HackerDropDown from "@/components/HackerUIComponents/molecules/HackerDropDown/HackerDropDown";
import { useEffect, useRef, useState } from "react";
import HackerStyleInput from "@/components/HackerUIComponents/atoms/HackerStyleInput/HackerStyleInput";

export default function DialogueWindow() {
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<DialogueMessageProps[]>([
    {
      content: `Hi, I'm Hongming Wang, a game/web developer. I have a passion
          for creating games and websites that are both fun and engaging. I
          have experience working with a variety of technologies, including
          Unity, Unreal Engine, React, and Node.js. I'm always looking
          for new challenges and opportunities to learn and grow as a
          developer.`,
      position: "left",
      timeBeforeShow: 0,
    },
    {
      content: `If you have any questions to ask, feel free to ask me!`,
      position: "left",
      timeBeforeShow: 0,
    },
  ]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [GPTThreadID, setGPTThreadID] = useState<string>("");
  const [canInput, setCanInput] = useState<boolean>(true);

  const handleSendMessageButton = () => {
    if (!inputMessage) return;
    setCanInput(false);
    setInputMessage("");

    // user message
    newMessage({
      content: inputMessage,
      position: "right",
      timeBeforeShow: 600,
    });
    scrollToChatBottom();

    setTimeout(() => {
      // gpt message placeholder
      newMessage({
        content: "Thinking...",
        position: "left",
        timeBeforeShow: "infinity",
      });
      scrollToChatBottom();

      // gpt message
      fetch("/api/hongming-gpt/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          threadId: GPTThreadID as string,
          message: inputMessage,
        }),
      }).then((res) => {
        res.json().then((data) => {
          removeLastMessage();
          newMessage({
            content: data[0].text.value,
            position: "left",
          });
          setCanInput(true);
          scrollToChatBottom();
        });
      });
    }, 500);
  };

  const newMessage = (message: DialogueMessageProps) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const removeLastMessage = () => {
    setMessages((prevMessages) =>
      prevMessages.slice(0, prevMessages.length - 1)
    );
  };

  const scrollToChatBottom = () => {
    setTimeout(() => {
      if (messageContainerRef.current) {
        messageContainerRef.current.scrollTop =
          messageContainerRef.current.scrollHeight;
        messageContainerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  useEffect(() => {
    // get thread
    fetch("/api/hongming-gpt/new-thread").then((res) => {
      res.json().then((data) => {
        //console.log(data);
        setGPTThreadID(data);
      });
    });
  }, []);

  return (
    <HackerStyleContainer additionalClass="dialogue-window">
      <div className="messages" ref={messageContainerRef}>
        {messages.map((message, index) => (
          <DialogueMessage
            key={index}
            position={message.position}
            content={message.content}
            timeBeforeShow={message.timeBeforeShow}
          />
        ))}
      </div>
      <div className="input-area">
        <HackerStyleInput
          rounded
          onChange={(e) => {
            setInputMessage(e.target.value);
          }}
          onBlur={(e) => {
            setInputMessage(e.target.value);
          }}
          placeholder="Ask me something!"
          value={inputMessage}
          disabled={!canInput}
          additionalClass="gpt-input"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              canInput && handleSendMessageButton();
            }

            if (e.key === "ArrowUp") {
              setInputMessage("What is your favorite sport?");
            }

            if (e.key === "ArrowDown") {
              setInputMessage("What is your favorite animal?");
            }

            if (e.key === "ArrowLeft") {
              setInputMessage("What is your favorite color?");
            }

            if (e.key === "ArrowRight") {
              setInputMessage("What is your favorite food?");
            }

            if (e.key === "Escape") {
              setInputMessage("");
            }

            if (e.key === "Tab") {
              e.preventDefault();
              setInputMessage("");
            }
          }}
        />
        <HackerStyleButton
          marginx="extra"
          additionalClass="send-message-button"
          onClick={() => {
            canInput && handleSendMessageButton();
          }}
          disabled={!canInput}
        >
          Send Message
        </HackerStyleButton>
      </div>
    </HackerStyleContainer>
  );
}
