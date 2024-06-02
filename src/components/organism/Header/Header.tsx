"use client";
import OpenHeaderButton from "./OpenHeaderButton/OpenHeaderButton";
import React from "react";
import HackerStyleContainer from "@/components/HackerUIComponents/atoms/HackerStyleContainer/HackerStyleContainer";
import "./Header.css";
import Link from "next/link";
import HackerStyleButton from "@/components/HackerUIComponents/atoms/HackerStyleButton/HackerStyleButton";

export default function Header() {
  const [isHeaderOpen, setIsHeaderOpen] = React.useState(false);

  function handleClick() {
    setIsHeaderOpen(!isHeaderOpen);
  }
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
            <Link href={"/"} className="nav-link" onClick={handleClick}>
              <HackerStyleButton parentSize>Home</HackerStyleButton>
            </Link>
            <Link href={"/blogs"} className="nav-link" onClick={handleClick}>
              <HackerStyleButton parentSize>Blogs</HackerStyleButton>
            </Link>
          </nav>
        </HackerStyleContainer>
      </header>
    </>
  );
}
