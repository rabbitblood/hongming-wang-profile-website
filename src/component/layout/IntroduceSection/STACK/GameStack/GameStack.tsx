import React from "react";
import "./GameStack.css";
import { motion } from "framer-motion";

interface GameStackProps extends React.HTMLAttributes<HTMLDivElement> {
  hide?: boolean;
}

export default function GameStack(props: GameStackProps) {
  return (
    <div className="game-stack" {...props}>
      <div className="game-stack-text">
        <h1 className="title">Game Development</h1>
        <p>
          I have been developing games since 2018. I have experience in
          developing games with mostly Unity3D. I am prioritizing in pixel art
          games.
        </p>
        <ul>
          <li>Unity3D</li>
          <li>Unreal Engine</li>
          <li>Phaser.js</li>
          <li>Blender</li>
          <li>Photoshop</li>
        </ul>
      </div>
    </div>
  );
}
