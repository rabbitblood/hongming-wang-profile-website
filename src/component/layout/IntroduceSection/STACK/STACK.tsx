import React, { use, useCallback, useEffect, useMemo } from "react";
import "./STACK.css";
import gameIcon from "@/assets/images/half-game-icon.png";
import webIcon from "@/assets/images/half-server-icon.png";
import redx from "@/assets/icons/rex-x.png";
import {
  Variants,
  motion,
  useAnimate,
  AnimationSequence,
  DOMKeyframesDefinition,
} from "framer-motion";
import WebStack from "./WebStack/WebStack";
import GameStack from "./GameStack/GameStack";

interface STACKProps extends React.HTMLAttributes<HTMLDivElement> {
  hide?: boolean;
}

type StackDisplay = "none" | "web" | "game";

export default function STACK(props: STACKProps) {
  const [stackDisplay, setStackDisplay] = React.useState<StackDisplay>("none");
  const [scope, animate] = useAnimate();
  const [canChangeStackDisplay, setCanChangeStackDisplay] =
    React.useState(true);

  //useMemo

  const animations = useMemo(() => {
    const init: DOMKeyframesDefinition = {
      scale: 1,
      opacity: 0.5,
      x: 0,
    };

    const idle: DOMKeyframesDefinition = {
      scale: [1, 1.05, 1],
      opacity: 0.5,
    };

    const gameOpen: DOMKeyframesDefinition = {
      scale: 1,
      opacity: 0,
      x: "-100%",
    };

    const webOpen: DOMKeyframesDefinition = {
      scale: 1,
      opacity: 0,
      x: "100%",
    };

    return {
      idle: idle,
      gameOpen: gameOpen,
      webOpen: webOpen,
      init: init,
    };
  }, []);

  //useCallbacks
  const openStackAnimation = useCallback(() => {
    animate(".game-icon", animations.gameOpen, { duration: 0.5, delay: 0 });
    animate(".web-icon", animations.webOpen, { duration: 0.5, delay: 0 });
  }, [animate, animations.gameOpen, animations.webOpen]);

  const handleGameIconClick = useCallback(() => {
    if (canChangeStackDisplay) {
      setStackDisplay("game");
      openStackAnimation();
      setCanChangeStackDisplay(false);
      setTimeout(() => {
        setCanChangeStackDisplay(true);
      }, 1000);
    }
  }, [canChangeStackDisplay, openStackAnimation]);

  const handleWebIconClick = useCallback(() => {
    if (canChangeStackDisplay) {
      setStackDisplay("web");
      openStackAnimation();
      setCanChangeStackDisplay(false);
      setTimeout(() => {
        setCanChangeStackDisplay(true);
      }, 1000);
    }
  }, [canChangeStackDisplay, openStackAnimation]);

  const handleBackButtonClick = useCallback(() => {
    if (!canChangeStackDisplay) return;
    setStackDisplay("none");

    animate(".game-icon", animations.init, {
      duration: 0.5,
      repeat: 0,
      delay: 0,
    }).then(() => {
      animate(".game-icon", animations.idle, {
        delay: 0.5,
        repeat: Infinity,
        duration: 2,
      });
    });

    animate(".web-icon", animations.init, {
      duration: 0.5,
      repeat: 0,
      delay: 0,
    }).then(() => {
      animate(".web-icon", animations.idle, {
        delay: 0.5,
        repeat: Infinity,
        duration: 2,
      });
    });
  }, [animate, animations.idle, animations.init, canChangeStackDisplay]);

  //useEffect
  //init
  useEffect(() => {
    animate(".game-icon", animations.idle, {
      repeat: Infinity,
      duration: 2,
    });
    animate(".web-icon", animations.idle, { repeat: Infinity, duration: 2 });
  }, []);

  return (
    <div ref={scope} id="stack" className={`${props.hide ? "hide" : ""}`}>
      <div className="stack-container">
        <h1 className="stack-title">STACK</h1>
        <div className="stack-content">
          <motion.img
            className={`back-button ${stackDisplay === "none" ? "hide" : ""}`}
            onClick={() => handleBackButtonClick()}
            src={redx.src}
            alt=""
          />
          <div
            className={`game-web-icon-container ${
              stackDisplay !== "none" ? "open" : ""
            }`}
          >
            <motion.img
              onClick={() => {
                handleGameIconClick();
              }}
              className="game-icon"
              whileHover={{ opacity: 1 }}
              src={gameIcon.src}
              alt=""
            />
            <motion.img
              onClick={() => {
                handleWebIconClick();
              }}
              whileHover={{ opacity: 1 }}
              className="web-icon"
              src={webIcon.src}
              alt=""
            />
          </div>
          <div className="stack-info-container">
            {
              {
                none: <></>,
                web: <WebStack />,
                game: <GameStack />,
              }[stackDisplay]
            }
          </div>
        </div>
      </div>
    </div>
  );
}
