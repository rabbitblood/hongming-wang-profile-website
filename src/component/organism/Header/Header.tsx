"use client";
import OpenHeaderButton from "./OpenHeaderButton/OpenHeaderButton";
import React from "react";
import HackerStyleContainer from "@/component/HackerUIComponents/atoms/HackerStyleContainer/HackerStyleContainer";
import "./Header.css";

export default function Header() {
  const [isHeaderOpen, setIsHeaderOpen] = React.useState(false);
  return (
    <>
      <header className="header">
        <HackerStyleContainer
          bg="solid"
          additionalClass={`header-container ${isHeaderOpen ? "" : "hide"}`}
        >
          <OpenHeaderButton
            onClick={() => {
              setIsHeaderOpen(!isHeaderOpen);
            }}
          />
          <nav className="nav">
            <li className="nav-link">
              <a href="/">Home</a>
            </li>
            <li className="nav-link">
              <a href="/blogs">Blogs</a>
            </li>
          </nav>
        </HackerStyleContainer>
      </header>
    </>
  );
}
