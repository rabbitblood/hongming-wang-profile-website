interface SKILLProps extends React.HTMLAttributes<HTMLDivElement> {
  hide?: boolean;
}

export default function SKILL(props: SKILLProps) {
  return (
    <div id="skill" className={`${props.hide ? "hide" : ""}`}>
      <div className="skill-container">
        <div className="skill-content">
          <h1 className="skill-title">SKILL</h1>
          <div className="skill-list">
            <div className="skill-item">
              <h2 className="skill-item-title">Languages</h2>
              <ul className="skill-item-list">
                <li>JavaScript</li>
                <li>Python</li>
                <li>C#</li>
                <li>Java</li>
              </ul>
            </div>
            <div className="skill-item">
              <h2 className="skill-item-title">Frontend</h2>
              <ul className="skill-item-list">
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
            <div className="skill-item">
              <h2 className="skill-item-title">Backend</h2>
              <ul className="skill-item-list">
                <li>Node.js</li>
                <li>Express</li>
                <li>Flask</li>
                <li>Spring Boot</li>
              </ul>
            </div>
            <div className="skill-item">
              <h2 className="skill-item-title">Game Development</h2>
              <ul className="skill-item-list">
                <li>Unity</li>
                <li>Unreal Engine</li>
                <li>Godot</li>
                <li>Phaser</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
