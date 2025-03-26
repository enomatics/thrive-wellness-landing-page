// import ActionButton from "../components/ActionButton";
import IntroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutEbookSection";
import WhoSection from "../sections/WhoSection";
import WhySection from "../sections/WhySection";
import CTA from "../sections/CTA";
import AboutThriveSection from "../sections/AboutThriveSection";

function Home() {
  return (
    <div className="my-20 flex flex-col items-center justify-center gap-10">
      <IntroSection />
      <AboutSection />
      <WhoSection />
      <WhySection />
      <CTA />
      <AboutThriveSection />
    </div>
  );
}

export default Home;
