import Markdown from "markdown-to-jsx";
import React, { useContext } from "react";
import { LanguageContext } from "../..";
import { useData } from "../hooks/useData";
import Heading2 from "../layout/Heading2";
import ListElement from "../layout/ListElement";

interface ForYouProps {}

const ForYou: React.FC<ForYouProps> = () => {
  const [language] = useContext(LanguageContext);
  const [markdown, loading] = useData(`/${language}/for-you.md`);

  return (
    <div className="for-you">
      {!loading && (
        <Markdown
          options={{
            wrapper: "div",
            overrides: {
              h2: {
                component: Heading2,
                props: { className: "ml-8" },
              },
              li: {
                component: ListElement,
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

export default ForYou;
