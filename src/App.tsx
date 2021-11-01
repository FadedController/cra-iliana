import { useEffect, useState } from "react";
import { initCalendlyPopup } from "./components/hooks/initCalendlyPopup";
import ContentSection from "./components/layout/ContentSection";
import Discovery from "./components/sections/Discovery";
import ForYou from "./components/sections/ForYou";
import HeroSection from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import IntroVideo from "./components/sections/IntroVideo";
import Manifest from "./components/sections/Manifest";
import Mastermind from "./components/sections/Mastermind";
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
    initCalendlyPopup(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      <div className="app">
        <HeroSection></HeroSection>
        <IntroVideo></IntroVideo>
        <ContentSection className="md:space-x-2 flex-col md:flex-row py-4 px-2 lg:px-4">
          <div className="flex-2 quote-bg">
            <Quote></Quote>
          </div>
          <div className="flex flex-col space-y-4 flex-3">
            <ForYou></ForYou>
            <WhyUs></WhyUs>
          </div>
        </ContentSection>
        <ContentSection className="flex-col space-y-4">
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
        </ContentSection>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
