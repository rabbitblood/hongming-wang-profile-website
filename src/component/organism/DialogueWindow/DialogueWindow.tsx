"use client";

import "./DialogueWindow.css";

import HackerStyleContainer from "@/component/HackerUIComponents/atoms/HackerStyleContainer/HackerStyleContainer";
import DialogueMessage from "./DialogueMessage/DialogueMessage";
import HackerStyleButton from "@/component/HackerUIComponents/atoms/HackerStyleButton/HackerStyleButton";
import HackerDropDown from "@/component/HackerUIComponents/molecules/HackerDropDown/HackerDropDown";
import { useEffect, useRef, useState } from "react";

type MessageType = {
  content: string;
  position: "left" | "right";
};

export default function DialogueWindow() {
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    handleNewMessage({
      content: `Hi, I'm Hongming Wang, a game/web developer. I have a passion
            for creating games and websites that are both fun and engaging. I
            have experience working with a variety of technologies, including
            Unity, Unreal Engine, React, and Node.js. I'm always looking
            for new challenges and opportunities to learn and grow as a
            developer.`,
      position: "left",
    });
  }, []);

  const handleNewMessage = (message: MessageType) => {
    setMessages([
      ...messages,
      {
        content: message.content,
        position: message.position,
      },
    ]);

    // scroll to bottom
    setTimeout(() => {
      if (messageContainerRef.current) {
        messageContainerRef.current.scrollTop =
          messageContainerRef.current.scrollHeight;
        messageContainerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <HackerStyleContainer additionalClass="dialogue-window">
      <div className="messages" ref={messageContainerRef}>
        {messages.map((message, index) => (
          <DialogueMessage key={index} dialoguePosition={message.position}>
            {message.content}
          </DialogueMessage>
        ))}
      </div>
      <div className="input-area">
        <HackerStyleButton
          onClick={() =>
            handleNewMessage({
              content: "new message",
              position: Math.random() > 0.5 ? "left" : "right",
            })
          }
        >
          new message
        </HackerStyleButton>
      </div>
    </HackerStyleContainer>
  );
}
