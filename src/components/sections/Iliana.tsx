import Markdown from "markdown-to-jsx";
import React, { useContext } from "react";
import { LanguageContext } from "../..";
import { openCalendlyPopup } from "../hooks/openCalendlyPopup";
import { useData } from "../hooks/useData";
import ContentSection from "../layout/ContentSection";
import Cta from "../layout/Cta";
import Heading2 from "../layout/Heading2";
import Paragraph from "../layout/Paragraph";

interface IlianaProps {}

const Iliana: React.FC<IlianaProps> = () => {
  const [language] = useContext(LanguageContext);
  const [markdown, loading] = useData(`/${language}/iliana.md`);

  return (
    <div>
      <div
        id="me"
        className="transform -translate-y-64 lg:-translate-y-24"
      ></div>
      <ContentSection className="lg:space-x-4 lg:space-y-0 space-y-4 flex-col lg:flex-row p-4">
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
                },
                p: {
                  component: Paragraph,
                },
                blockquote: {
                  component: () => null,
                },
              },
            }}
          >
            {markdown}
          </Markdown>
        )}
        <div className="flex-2 flex flex-col items-center justify-center space-y-4">
          <div className="iliana-img min-h-[24rem] w-full"></div>
          <div>
            {!loading && (
              <Markdown
                options={{
                  overrides: {
                    h2: {
                      component: () => null,
                    },
                    blockquote: {
                      component: ({ children }) => {
                        return (
                          <blockquote>
                            <p className="font-light text-center">
                              {children["0"].props.children[0]}
                            </p>
                          </blockquote>
                        );
                      },
                    },
                    p: {
                      component: () => null,
                    },
                  },
                }}
              >
                {markdown}
              </Markdown>
            )}
          </div>
          <Cta onClick={() => openCalendlyPopup(language)}>
            {language === "en"
              ? "Book a Free Consultation"
              : "Agenda una consulta"}
          </Cta>
        </div>
      </ContentSection>
    </div>
  );
};

export default Iliana;
