import "./home.css";
import IntroduceSection from "@/components/layout/IntroduceSection/IntroduceSection";
import ProjectsSection from "@/components/layout/ProjectsSection/ProjectsSection";
import HomePageModelSection from "@/components/layout/HomePageModelSection/HomePageModelSection";
import Footer from "@/components/organism/Footer/Footer";
import Header from "@/components/organism/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home-page">
        <HomePageModelSection />
        <IntroduceSection />
        <ProjectsSection />
        <Footer />
      </div>
    </>
  );
}
