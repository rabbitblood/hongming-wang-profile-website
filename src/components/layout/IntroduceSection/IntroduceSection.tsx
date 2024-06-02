"use client";

import "./IntroduceSection.css";

import HackerStyleButton from "@/components/HackerUIComponents/atoms/HackerStyleButton/HackerStyleButton";
import HackerStyleContainer from "@/components/HackerUIComponents/atoms/HackerStyleContainer/HackerStyleContainer";
import { useState } from "react";

import BIO from "./BIO/BIO";
import SKILL from "./SKILL/SKILL";
import STACK from "./STACK/STACK";

type IntroTabSelections = "bio" | "stack" | "skill";

export default function IntroduceSection() {
  const [introTab, setIntroTab] = useState<IntroTabSelections>("bio");

  const handleTabChange = (tab: IntroTabSelections) => {
    setIntroTab(tab);
  };

  return (
    <div id="introduce-section">
      <div className="display-tabs-container">
        <HackerStyleButton
          button_direction="up"
          marginx="none"
          bg="transparent"
          additionalClass="display-tab-button"
          active={introTab === "bio"}
          onClick={() => handleTabChange("bio")}
        >
          BIO
        </HackerStyleButton>{" "}
        <HackerStyleButton
          button_direction="down"
          marginx="none"
          bg="transparent"
          additionalClass="display-tab-button"
          active={introTab === "stack"}
          onClick={() => handleTabChange("stack")}
        >
          STACK
        </HackerStyleButton>{" "}
        <HackerStyleButton
          button_direction="up"
          marginx="none"
          bg="transparent"
          additionalClass="display-tab-button"
          active={introTab === "skill"}
          onClick={() => handleTabChange("skill")}
        >
          SKILL
        </HackerStyleButton>{" "}
      </div>
      <HackerStyleContainer additionalClass="introduce-content-container">
        <BIO hide={introTab !== "bio"} />
        <STACK hide={introTab !== "stack"} />
        <SKILL hide={introTab !== "skill"} />
      </HackerStyleContainer>
    </div>
  );
}
