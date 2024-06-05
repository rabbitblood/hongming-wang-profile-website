"use client";

import "./IntroduceSection.css";

import HackerStyleButton from "@/components/HackerUIComponents/atoms/HackerStyleButton/HackerStyleButton";
import HackerStyleContainer from "@/components/HackerUIComponents/atoms/HackerStyleContainer/HackerStyleContainer";
import { useState } from "react";
import { motion } from "framer-motion";

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
    <motion.div id="introduce-section">
      <motion.div
        className="section-inner-container"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
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
      </motion.div>
    </motion.div>
  );
}
