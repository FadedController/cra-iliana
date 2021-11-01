import Markdown from "markdown-to-jsx";
import React, { useContext } from "react";
import { LanguageContext } from "../..";
import { useData } from "../hooks/useData";
import ContentSection from "../layout/ContentSection";
import Heading2 from "../layout/Heading2";
import Paragraph from "../layout/Paragraph";
import VideoCarousel from "../ui/VideoCarousel";

interface HowItWorksProps {}

const HowItWorks: React.FC<HowItWorksProps> = () => {
  const [language] = useContext(LanguageContext);
  const [markdown, loading] = useData(`/${language}/how-it-works.md`);

  return (
    <div>
      <ContentSection className="md:space-x-6 md:space-y-0 flex-col-reverse md:flex-row px-4 lg:px-4">
        {!loading && (
          <Markdown
            options={{
              wrapper: ({ children }) => {
                return (
                  <div className="flex-1 flex flex-col items-center justify-center space-y-2 px-12 pt-4 pb-6 border-4 border-[#aa8939] rounded-lg">
                    <span className="material-icons-outlined text-8xl text-transparent bg-clip-text bg-gradient-to-b from-[#e0c571] to-[#aa8939]">
                      trending_up
                    </span>
                    {children}
                  </div>
                );
              },
              overrides: {
                h2: {
                  component: Heading2,
                },
                p: {
                  component: Paragraph,
                },
              },
            }}
          >
            {markdown}
          </Markdown>
        )}
        <div className="flex-1">
          <VideoCarousel></VideoCarousel>
        </div>
      </ContentSection>
    </div>
  );
};

export default HowItWorks;
