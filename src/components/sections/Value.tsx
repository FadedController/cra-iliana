import Markdown from "markdown-to-jsx";
import React, { useContext } from "react";
import { LanguageContext } from "../..";
import { openCalendlyPopup } from "../hooks/openCalendlyPopup";
import { useData } from "../hooks/useData";
import Bold from "../layout/Bold";
import ContentSection from "../layout/ContentSection";
import Cta from "../layout/Cta";
import Heading2 from "../layout/Heading2";
import ListElement from "../layout/ListElement";
import Paragraph from "../layout/Paragraph";

interface ValueProps {}

const Value: React.FC<ValueProps> = () => {
  const [language] = useContext(LanguageContext);
  const [markdown, loading] = useData(`/${language}/value.md`);

  return (
    <div>
      <ContentSection className="md:space-x-6 space-y-4 md:space-y-0 flex-col md:flex-row py-4 px-4 lg:px-4">
        {!loading && (
          <Markdown
            options={{
              wrapper: ({ children }) => {
                return (
                  <div className="flex flex-3 flex-col space-y-3">
                    {children}
                  </div>
                );
              },
              overrides: {
                h2: {
                  component: Heading2,
                  props: {
                    className: "ml-7",
                  },
                },
                ul: {
                  component: ({ children }) => {
                    return (
                      <ul className="flex flex-col space-y-2">{children}</ul>
                    );
                  },
                },
                p: {
                  component: Paragraph,
                },
                li: {
                  component: ListElement,
                },
                strong: {
                  component: Bold,
                },
                a: {
                  component: Cta,
                  props: {
                    onClick: () => openCalendlyPopup(language),
                    className: "ml-7",
                  },
                },
              },
            }}
          >
            {markdown}
          </Markdown>
        )}
        <div className="flex-2 flex items-center justify-center">
          <div className="for-you-img w-full min-h-[26rem] max-h-[32rem] h-full"></div>
        </div>
      </ContentSection>
    </div>
  );
};

export default Value;
