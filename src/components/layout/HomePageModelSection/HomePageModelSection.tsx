"use client";

import dynamic from "next/dynamic";
import "./HomePageModelSection.css";
// three.js and react-three-fiber are not supported in server-side rendering

const My3dModel = dynamic(
  () => import("@/components/atoms/My3dModel/My3dModel"),
  {
    ssr: false,
  }
);

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
