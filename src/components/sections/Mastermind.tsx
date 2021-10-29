import Markdown from "markdown-to-jsx";
import React, { useContext } from "react";
import { LanguageContext } from "../..";
import { useData } from "../hooks/useData";
import Bold from "../layout/Bold";
import ContentSection from "../layout/ContentSection";
import Heading2 from "../layout/Heading2";
import Paragraph from "../layout/Paragraph";

interface MastermindProps {}

const Mastermind: React.FC<MastermindProps> = () => {
  const [language] = useContext(LanguageContext);
  const [markdown, loading] = useData(`/${language}/mastermind.md`);

  return (
    <div>
      {language === "es" && (
        <ContentSection className="md:space-x-6 flex-col-reverse md:flex-row py-4 px-4 lg:px-4">
          <div className="flex-2 videoconference min-h-[24rem] mt-4 md:mt-0"></div>
          {!loading && (
            <Markdown
              options={{
                wrapper: ({ children }) => (
                  <div className="flex flex-col flex-3 space-y-3">
                    {children}
                  </div>
                ),
                overrides: {
                  h2: {
                    component: Heading2,
                  },
                  p: {
                    component: Paragraph,
                  },
                  strong: {
                    component: Bold,
                  },
                },
              }}
            >
              {markdown || ""}
            </Markdown>
          )}
        </ContentSection>
      )}
    </div>
  );
};

export default Mastermind;
