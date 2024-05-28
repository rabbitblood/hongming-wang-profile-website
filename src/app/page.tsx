import dynamic from "next/dynamic";
import "./home.css";

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
      <div className="home-page">
        <div className="banner">
          <div className="text-section">
            <h1 className="title">Hongming Wang</h1>
            <h2 className="sub-title">Game/Web Dev</h2>
          </div>
          <My3dModel />
          <ParticleBackground />
        </div>
      </div>
      <h1>2232323</h1>
      <h1>2232323</h1>
      <h1>2232323</h1>
      <h1>2232323</h1>
      <h1>2232323</h1>
      <h1>2232323</h1>
      <h1>2232323</h1>
      <h1>2232323</h1>
      <h1>2232323</h1>
      <h1>2232323</h1>
      <h1>2232323</h1>
      <h1>2232323</h1>
      <h1>2232323</h1>
      <h1>2232323</h1>
      <h1>2232323</h1>
      <h1>2232323</h1>
    </main>
  );
}
