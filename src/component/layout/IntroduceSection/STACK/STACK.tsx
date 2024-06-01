import React, { use, useCallback } from "react";
import "./STACK.css";
import gameIcon from "@/assets/images/half-game-icon.png";
import webIcon from "@/assets/images/half-server-icon.png";
import redx from "@/assets/icons/rex-x.png";
import { Variants, animate, motion } from "framer-motion";
import { transform } from "next/dist/build/swc";

interface STACKProps extends React.HTMLAttributes<HTMLDivElement> {
  hide?: boolean;
}

type StackDisplay = "none" | "web" | "game";

export default function STACK(props: STACKProps) {
  const [stackDisplay, setStackDisplay] = React.useState<StackDisplay>("none");
  const [canChangeStackDisplay, setCanChangeStackDisplay] =
    React.useState(true);
  const [animationState, setAnimationState] = React.useState({
    gameIcon: "idle",
    webIcon: "idle",
  });

  const gameIconVariants: Variants = {
    initial: {
      scale: 1,
      transition: {
        repeat: 0,
        duration: 1,
        ease: "easeInOut",
      },
    },
    idle: {
      scale: [1, 1.1, 1],
      transition: {
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut",
        repeatType: "reverse",
      },
    },
    open: {
      scale: 1,
      transform: "translateX(-50vw)",
      transition: {
        repeat: 0,
        duration: 1,
        ease: "easeInOut",
      },
      transitionEnd: {
        scale: 1,
      },
    },
  };

  const webIconVariants: Variants = {
    idle: {
      scale: [1.1, 1, 1.1],
      transition: {
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut",
      },
      transitionEnd: {
        scale: 1,
      },
    },
    open: {
      scale: 1,
      transform: "translateX(50vw)",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
      transitionEnd: {
        scale: 1,
      },
    },
  };

  const handleGameIconClick = useCallback(() => {
    if (canChangeStackDisplay) {
      setStackDisplay("game");
      setAnimationState({
        gameIcon: "open",
        webIcon: "open",
      });
      setCanChangeStackDisplay(false);
      setTimeout(() => {
        setCanChangeStackDisplay(true);
      }, 1000);
    }
  }, [canChangeStackDisplay]);

  const handleWebIconClick = useCallback(() => {
    if (canChangeStackDisplay) {
      setStackDisplay("web");
      setAnimationState({
        gameIcon: "open",
        webIcon: "open",
      });
      setCanChangeStackDisplay(false);
      setTimeout(() => {
        setCanChangeStackDisplay(true);
      }, 1000);
    }
  }, [canChangeStackDisplay]);

  const handleBackButtonClick = useCallback(() => {
    if (!canChangeStackDisplay) return;
    setAnimationState({
      gameIcon: "idle",
      webIcon: "idle",
    });
    setStackDisplay("none");
  }, [canChangeStackDisplay]);

  return (
    <div id="stack" className={`${props.hide ? "hide" : ""}`}>
      <div className="stack-container">
        <h1 className="stack-title">STACK</h1>
        <div className="stack-content">
          <motion.img
            className={`back-button ${stackDisplay === "none" ? "hide" : ""}`}
            onClick={handleBackButtonClick}
            src={redx.src}
            alt=""
          />
          <div
            className={`game-web-icon-container ${
              stackDisplay !== "none" ? "open" : ""
            }`}
          >
            <motion.img
              variants={gameIconVariants}
              initial="initial"
              animate={animationState.gameIcon}
              onClick={handleGameIconClick}
              className="game-icon"
              src={gameIcon.src}
              alt=""
            />
            <motion.img
              variants={webIconVariants}
              initial="initial"
              onClick={handleWebIconClick}
              animate={animationState.webIcon}
              className="web-icon"
              src={webIcon.src}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
