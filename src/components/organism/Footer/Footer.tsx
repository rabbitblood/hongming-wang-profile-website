import HackerStyleContainer from "@/components/HackerUIComponents/atoms/HackerStyleContainer/HackerStyleContainer";
import HackerStyleParagraph from "@/components/HackerUIComponents/atoms/HackerStyleParagraph/HackerStyleParagraph";
import React from "react";
import "./Footer.css";

import xIcon from "@/assets/icons/icons8-twitterx.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <HackerStyleContainer>
          <div className="social-medias">
            <a href="https://www.linkedin.com/in/hongming-wang-dev/">
              <img
                className="social-medias-icon"
                src="https://img.icons8.com/?size=100&id=3869&format=png"
                alt="linkedin"
              />
            </a>
            <a href="https://github.com/rabbitblood">
              <img
                className="social-medias-icon"
                src="https://img.icons8.com/?size=100&id=nXgKLCSNhAWG&format=png"
                alt="github"
              />
            </a>
            <a href="https://x.com/wang_hong_ming">
              <img
                className="social-medias-icon"
                src={xIcon.src}
                alt="twitterx--v1"
              />
            </a>
            <a href="https://t.me/+17788611008">
              <img
                className="social-medias-icon"
                src="https://img.icons8.com/?size=100&id=CYghN6YMk6Za&format=png"
                alt="telegram"
              />
            </a>
          </div>
          <HackerStyleParagraph>
            © 2024 Hongming Wang. All rights reserved.
          </HackerStyleParagraph>
        </HackerStyleContainer>
      </div>
    </footer>
  );
}
