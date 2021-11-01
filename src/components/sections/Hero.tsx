import Markdown from "markdown-to-jsx";
import React, { useContext } from "react";
import { LanguageContext } from "../..";
import { openCalendlyPopup } from "../hooks/openCalendlyPopup";
import { useData } from "../hooks/useData";
import ContentSection from "../layout/ContentSection";
import Cta from "../layout/Cta";
import Heading1 from "../layout/Heading1";
import Heading3 from "../layout/Heading3";
import Paragraph from "../layout/Paragraph";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const [language] = useContext(LanguageContext);
  const [markdown, loading] = useData(`/${language}/hero.md`);

  return (
    <div className="hero">
      <ContentSection className="md:space-x-2 flex-col md:flex-row py-4 px-2 lg:px-4">
        {!loading && (
          <div className="hero-markdown">
            <Markdown
              options={{
                wrapper: "div",
                overrides: {
                  a: {
                    component: Cta,
                    props: {
                      onClick: () => openCalendlyPopup(language),
                    },
                  },
                  h1: {
                    component: Heading1,
                    props: {
                      lastWord: true,
                    },
                  },
                  h3: {
                    component: Heading3,
                  },
                  p: {
                    component: Paragraph,
                  },
                },
              }}
            >
              {markdown}
            </Markdown>
          </div>
        )}
        <div className="hero-pic"></div>
      </ContentSection>
    </div>
  );
};

export default HeroSection;
