import dynamic from "next/dynamic";
import "./home.css";

// three.js and react-three-fiber are not supported in server-side rendering
const ParticleBackground = dynamic(
  () => import("../component/atoms/ParticleBackground/ParticleBackground"),
  {
    ssr: false,
  }
);
const My3dModel = dynamic(
  () => import("../component/atoms/My3dModel/My3dModel"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main>
      <div id="background-particle-effect">
        <ParticleBackground
          style={{
            position: "fixed",
            height: "100%",
            width: "100%",
            zIndex: -1,
          }}
          particleAmount={1000}
          color="blue"
        />{" "}
        <ParticleBackground
          style={{
            position: "fixed",
            height: "100%",
            width: "100%",
            zIndex: -1,
          }}
          particleAmount={1000}
          color="red"
        />{" "}
        <ParticleBackground
          style={{
            position: "fixed",
            height: "100%",
            width: "100%",
            zIndex: -1,
          }}
          particleAmount={1000}
          color="white"
        />
      </div>
      <div className="home-page">
        <div className="banner">
          <div className="text-section">
            <h1 className="title">Hongming Wang</h1>
            <h1 className="sub-title">Game/Web Dev</h1>
          </div>
          <My3dModel />
        </div>
        <div>hi</div>
      </div>
    </main>
  );
}
