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
            <a href="https://www.linkedin.com/in/hongming-wang-1a2b3c4d5e6f7g8h9i0j/">
              <img
                className="social-medias-icon"
                src="https://img.icons8.com/?size=100&id=3869&format=png"
                alt="linkedin"
              />
            </a>
            <a href="https://www.linkedin.com/in/hongming-wang-1a2b3c4d5e6f7g8h9i0j/">
              <img
                className="social-medias-icon"
                src="https://img.icons8.com/?size=100&id=nXgKLCSNhAWG&format=png"
                alt="github"
              />
            </a>
            <a href="https://www.linkedin.com/in/hongming-wang-1a2b3c4d5e6f7g8h9i0j/">
              <img
                className="social-medias-icon"
                src={xIcon.src}
                alt="twitterx--v1"
              />
            </a>
            <a href="https://www.linkedin.com/in/hongming-wang-1a2b3c4d5e6f7g8h9i0j/">
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
