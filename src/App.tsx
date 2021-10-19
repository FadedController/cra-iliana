import { useState } from "react";
import ContentSection from "./components/layout/ContentSection";
import ForYou from "./components/sections/ForYou";
import HeroSection from "./components/sections/Hero";
import IntroVideo from "./components/sections/IntroVideo";
import WhyUs from "./components/sections/WhyUs";
import { LanguageContext } from "./index";

function App() {
  const [language, setLanguage] = useState<"en" | "es">("es");

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      <div className="app">
        <HeroSection></HeroSection>
        <IntroVideo></IntroVideo>
        <ContentSection>
          <ForYou></ForYou>
          <WhyUs></WhyUs>
        </ContentSection>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
