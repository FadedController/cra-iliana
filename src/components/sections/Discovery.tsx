import Markdown from "markdown-to-jsx";
import React, { useContext } from "react";
import { LanguageContext } from "../..";
import { openCalendlyPopup } from "../hooks/openCalendlyPopup";
import { useData } from "../hooks/useData";
import Bold from "../layout/Bold";
import ContentSection from "../layout/ContentSection";
import Cta from "../layout/Cta";
import Heading2 from "../layout/Heading2";
import Heading3 from "../layout/Heading3";
import ListElement from "../layout/ListElement";
import Logo from "../layout/Logo";
import Paragraph from "../layout/Paragraph";

interface DiscoveryProps {}

const Discovery: React.FC<DiscoveryProps> = () => {
  const [language] = useContext(LanguageContext);
  const [markdown, loading] = useData(`/${language}/discovery.md`);

  return (
    <div>
      <ContentSection className="md:space-x-6 md:space-y-0 flex-col-reverse md:flex-row px-4 lg:px-4">
        <div className="flex-2 videoconference-2 min-h-[20rem] mt-4 md:mt-0"></div>
        {!loading && (
          <Markdown
            options={{
              wrapper: ({ children }) => {
                return (
                  <div className="flex flex-3 flex-col space-y-2">
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
                li: {
                  component: ListElement,
                },
                p: {
                  component: Paragraph,
                },
                strong: {
                  component: Bold,
                  props: {
                    className: "pl-7",
                  },
                },
                h3: {
                  component: ({ children }) => {
                    if (language === "en")
                      return <Heading3 className="ml-7">{children}</Heading3>;
                    return (
                      <div className="ml-7">
                        <Logo />
                      </div>
                    );
                  },
                },
                a: {
                  component: Cta,
                  props: {
                    onClick: () => openCalendlyPopup(language),
                    className: "mt-3 ml-7",
                  },
                },
              },
            }}
          >
            {markdown}
          </Markdown>
        )}
      </ContentSection>
    </div>
  );
};

export default Discovery;
