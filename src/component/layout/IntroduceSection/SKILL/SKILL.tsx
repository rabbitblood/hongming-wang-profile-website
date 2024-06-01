import React from "react";
import "./SKILL.css";
import skillIcons from "@/assets/images/skill-icons";

interface SKILLProps extends React.HTMLAttributes<HTMLDivElement> {
  hide?: boolean;
}

interface skill {
  title: string;
  icon: string;
  desc: string;
}

const hardSkillList = [
  {
    title: "Full-Stack",
    icon: skillIcons.fullStack.src,
    desc: "React, Next.js, Three.js, WebGL, Webpack, Babel, HTML, CSS, SCSS",
  },
  {
    title: "Agile",
    icon: skillIcons.agile.src,
    desc: "Scrum, Kanban, Jira, Trello, Slack",
  },
  {
    title: "Automation",
    icon: skillIcons.automation.src,
    desc: "Jest, Mocha, Chai, Puppeteer, Selenium",
  },
];

const softSkillList = [
  {
    title: "Communication",
    icon: skillIcons.communication.src,
    desc: "I have experience working in teams and communicating with clients.",
  },
  {
    title: "Problem Solving",
    icon: skillIcons.problemSolving.src,
    desc: "I enjoy solving problems and finding creative solutions.",
  },
  {
    title: "Adaptability",
    icon: skillIcons.adaptability.src,
    desc: "I am adaptable and able to learn new technologies quickly.",
  },
  {
    title: "Time Management",
    icon: skillIcons.timeManagement.src,
    desc: "I am able to manage my time effectively and meet deadlines.",
  },
];

export default function SKILL(props: SKILLProps) {
  return (
    <div id="skill" className={`${props.hide ? "hide" : ""}`}>
      <div className="skill-container">
        <div className="skill-content">
          <h1 className="skill-title">SKILL</h1>
          <div className="skill-group-container">
            <h2 className="skill-group-title">Hard Skill</h2>
            <div className="skill-group">
              {hardSkillList.map((skill, index) => (
                <div key={index} className="skill-container">
                  <img className="skill-icon" src={skill.icon} alt="" />
                  <h3 className="skill-name">{skill.title}</h3>
                </div>
              ))}
            </div>
            <h2 className="skill-group-title">Soft Skill</h2>
            <div className="skill-group">
              {softSkillList.map((skill, index) => (
                <div key={index} className="skill-container">
                  <img className="skill-icon" src={skill.icon} alt="" />
                  <h3 className="skill-name">{skill.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
