import Markdown from "markdown-to-jsx";
import React, { useContext } from "react";
import { LanguageContext } from "../..";
import { useData } from "../hooks/useData";
import Paragraph from "../layout/Paragraph";

interface StepProps {
  step: string;
  onClick?: () => void;
}

const Step: React.FC<StepProps> = ({ step, onClick }) => {
  const [language] = useContext(LanguageContext);
  const [markdown, loading] = useData(`/${language}/steps/${step}.md`);

  return (
    <div
      onClick={onClick}
      className={`transform hover:scale-105 transition-transform flex-1 flex flex-col space-y-2 px-4 py-8 rounded-md bg-gradient-to-bl from-[#6ed4cd] to-[#256c7d] ${
        onClick !== undefined && "cursor-pointer"
      }`}
    >
      {!loading && (
        <Markdown
          options={{
            wrapper: ({ children }) => {
              return <div className="flex flex-col space-y-2">{children}</div>;
            },
            overrides: {
              h3: {
                component: ({ children }) => {
                  return (
                    <h3 className="text-3xl font-semibold text-gray-50">
                      {children}
                    </h3>
                  );
                },
              },
              p: {
                component: Paragraph,
                props: {
                  className: "text-gray-50",
                },
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

export default Step;
