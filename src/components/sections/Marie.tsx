import Markdown from "markdown-to-jsx";
import React, { useContext } from "react";
import { LanguageContext } from "../..";
import { useData } from "../hooks/useData";
import Bold from "../layout/Bold";
import ContentSection from "../layout/ContentSection";
import Heading2 from "../layout/Heading2";
import Paragraph from "../layout/Paragraph";

interface MarieProps {}

const Marie: React.FC<MarieProps> = () => {
  const [language] = useContext(LanguageContext);
  const [markdown, loading] = useData(`/${language}/marie.md`);

  return (
    <div>
      {language === "en" && (
        <ContentSection className="lg:space-x-6 flex-col-reverse lg:flex-row py-4 px-4 lg:px-4">
          <div className="flex-2 marie-img min-h-[24rem] mt-4 lg:mt-0"></div>
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

export default Marie;
