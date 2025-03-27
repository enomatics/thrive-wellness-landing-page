// import ActionButton from "../components/ActionButton";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutEbookSection";
import WhoSection from "../sections/WhoSection";
import WhySection from "../sections/WhySection";
import CTA from "../sections/CTA";
import AboutThriveSection from "../sections/AboutThriveSection";

function Home() {
  return (
    <div className="my-20 mb-10 flex flex-col items-center justify-center gap-5 md:my-20 md:gap-10">
      <HeroSection />
      <AboutSection />
      <WhoSection />
      <WhySection />
      <CTA />
      <AboutThriveSection />
    </div>
  );
}

export default Home;
