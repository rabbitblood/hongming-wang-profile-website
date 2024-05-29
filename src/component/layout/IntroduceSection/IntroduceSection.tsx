"use client";

import HackerStyleButton from "@/component/HackerUIComponents/atoms/HackerStyleButton/HackerStyleButton";
import HackerStyleContainer from "@/component/HackerUIComponents/atoms/HackerStyleContainer/HackerStyleContainer";
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
          style={{ marginBottom: 0 }}
          active={introTab === "bio"}
          onClick={() => handleTabChange("bio")}
        >
          BIO
        </HackerStyleButton>{" "}
        <HackerStyleButton
          button_direction="down"
          marginx="none"
          bg="transparent"
          style={{ marginBottom: 0 }}
          active={introTab === "stack"}
          onClick={() => handleTabChange("stack")}
        >
          STACK
        </HackerStyleButton>{" "}
        <HackerStyleButton
          button_direction="up"
          marginx="none"
          bg="transparent"
          style={{ marginBottom: 0 }}
          active={introTab === "skill"}
          onClick={() => handleTabChange("skill")}
        >
          SKILL
        </HackerStyleButton>{" "}
      </div>
      <HackerStyleContainer style={{ margin: 0, flexGrow: 1 }}>
        {introTab === "bio" && <BIO />}
        {introTab === "stack" && <STACK />}
        {introTab === "skill" && <SKILL />}
      </HackerStyleContainer>
    </div>
  );
}
