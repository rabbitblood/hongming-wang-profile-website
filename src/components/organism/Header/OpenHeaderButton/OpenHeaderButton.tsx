import React from "react";
import "./OpenHeaderButton.css";
import HackerStyleButton from "@/components/HackerUIComponents/atoms/HackerStyleButton/HackerStyleButton";
import {
  motion,
  useAnimate,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { init } from "next/dist/compiled/webpack/webpack";

interface OpenHeaderButtonProps {
  onClick: () => void;
}

export default function OpenHeaderButton(props: OpenHeaderButtonProps) {
  const [scope, animate] = useAnimate();
  const { scrollY } = useScroll();

  const animateValues = {
    initial: { opacity: 0.2 },
    show: { opacity: 1 },
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) {
      animate(scope.current, animateValues.show);
    } else {
      animate(scope.current, animateValues.initial);
    }
  });

  return (
    <motion.div
      initial={scrollY?.get() > 0 ? animateValues.show : animateValues.initial}
      transition={{ duration: 0.1, delay: 0 }}
      ref={scope}
      className="open-header-button-container"
      onClick={props.onClick}
    >
      <HackerStyleButton
        marginx="extra"
        button_direction="up"
        additionalClass="open-header"
      >
        <button className="open-header-button">| | |</button>
      </HackerStyleButton>
    </motion.div>
  );
}
