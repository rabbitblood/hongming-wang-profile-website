"use client";

import "./HomePageModelSection.css";
import My3dModel from "@/components/atoms/My3dModel/My3dModel";
// three.js and react-three-fiber are not supported in server-side rendering

export default function HomePageModelSection() {
  return (
    <div id="banner" className="banner">
      <div className="text-section">
        <h1 className="title">Hongming Wang</h1>
        <h1 className="sub-title">Game/Web Dev</h1>
      </div>
      <My3dModel />
    </div>
  );
}
