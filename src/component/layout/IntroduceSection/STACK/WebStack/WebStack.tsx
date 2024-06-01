import React from "react";
import "./WebStack.css";

interface WebStackProps extends React.HTMLAttributes<HTMLDivElement> {
  hide?: boolean;
}

export default function WebStack(props: WebStackProps) {
  return (
    <div className="web-stack" {...props}>
      <div className="web-stack-text">
        <h1 className="title">Web Development</h1>
        <p>
          I have been developing websites since 2019. I have experience in
          developing websites with mostly React Next.js. I am prioritizing in
          making websites with good user experience.
        </p>
        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>Phaser.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Three.js/React-three-fiber</li>
          <li>Framer motion</li>
          <li>Sass</li>
          <li>Typescript</li>
          <li>Redux</li>
          <li>prisma</li>
          <li>AWS EC2</li>
        </ul>
      </div>
    </div>
  );
}
