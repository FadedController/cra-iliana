import Markdown from "markdown-to-jsx";
import React, { useContext } from "react";
import { LanguageContext } from "../..";
import { useData } from "../hooks/useData";
import Bold from "../layout/Bold";
import Heading2 from "../layout/Heading2";
import ListElement from "../layout/ListElement";

interface WhyUsProps {}

const WhyUs: React.FC<WhyUsProps> = () => {
  const [language] = useContext(LanguageContext);
  const [markdown, loading] = useData(`/${language}/why-us.md`);

  return (
    <div className="why-us">
      {!loading && (
        <Markdown
          options={{
            wrapper: "div",
            overrides: {
              h2: {
                component: Heading2,
                props: { className: "ml-8", blue: true },
              },
              li: {
                component: ListElement,
                props: {
                  blue: true,
                },
              },
              strong: {
                component: Bold,
              },
            },
          }}
        >
          {markdown}
        </Markdown>
      )}
    </div>
  );
};

export default WhyUs;
