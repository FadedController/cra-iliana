import { useEffect, useState } from "react";
import { initCalendlyPopup } from "./components/hooks/initCalendlyPopup";
import { openCalendlyPopup } from "./components/hooks/openCalendlyPopup";
import ContentSection from "./components/layout/ContentSection";
import Discovery from "./components/sections/Discovery";
import Footer from "./components/sections/Footer";
import ForYou from "./components/sections/ForYou";
import HeroSection from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import Iliana from "./components/sections/Iliana";
import IntroVideo from "./components/sections/IntroVideo";
import Manifest from "./components/sections/Manifest";
import Marie from "./components/sections/Marie";
import Mastermind from "./components/sections/Mastermind";
import { Navigation } from "./components/sections/Navigation";
import Quote from "./components/sections/Quote";
import Stages from "./components/sections/Stages";
import Steps from "./components/sections/Steps";
import Value from "./components/sections/Value";
import WhyUs from "./components/sections/WhyUs";
import Card from "./components/ui/Card";
import { LanguageContext } from "./index";

function App() {
  const [language, setLanguage] = useState<"en" | "es">("es");

  useEffect(() => {
    if (window.location.href.includes("calendly")) openCalendlyPopup(language);
  });

  useEffect(() => {
    initCalendlyPopup(language);
    if (language === "en") document.title = "Iliana Hegewisch - Manifest Coach";
    if (language === "es")
      document.title = "Iliana Hegewisch - Coach de Manifestación";
  }, [language]);

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      <div className="app">
        <Navigation></Navigation>
        <HeroSection></HeroSection>
        <IntroVideo></IntroVideo>
        <ContentSection className="lg:space-x-2 flex-col lg:flex-row py-4 px-2 lg:px-4">
          <div className="flex-2 quote-bg">
            <Quote></Quote>
          </div>
          <div className="flex flex-col space-y-4 flex-3">
            <ForYou></ForYou>
            <WhyUs></WhyUs>
          </div>
        </ContentSection>
        <ContentSection className="flex-col mb-6 space-y-4">
          <Manifest></Manifest>
          <Stages>
            <Card stage="stage-1" toogleBg></Card>
            <Card stage="stage-2"></Card>
            <Card stage="stage-3"></Card>
            <Card stage="stage-4" toogleBg></Card>
          </Stages>
          <Mastermind></Mastermind>
          <Value></Value>
          <Discovery></Discovery>
          <Steps></Steps>
          <HowItWorks></HowItWorks>
          <Iliana></Iliana>
          <Marie></Marie>
        </ContentSection>
        <Footer></Footer>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
