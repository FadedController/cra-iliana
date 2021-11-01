import Markdown from "markdown-to-jsx";
import React, { useContext } from "react";
import { LanguageContext } from "../..";
import { openCalendlyPopup } from "../hooks/openCalendlyPopup";
import { useData } from "../hooks/useData";
import ContentSection from "../layout/ContentSection";
import Heading2 from "../layout/Heading2";
import Step from "../ui/Step";

interface StepsProps {}

const Steps: React.FC<StepsProps> = () => {
  const [language] = useContext(LanguageContext);
  const [markdown, loading] = useData(`/${language}/steps/title.md`);

  return (
    <div>
      <ContentSection className="flex-col space-y-4 pt-4 px-4">
        {!loading && (
          <Markdown
            options={{
              overrides: {
                h2: {
                  component: Heading2,
                },
              },
            }}
          >
            {markdown}
          </Markdown>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Step
            onClick={() => openCalendlyPopup(language)}
            step="step-1"
          ></Step>
          <Step step="step-2"></Step>
          <Step step="step-3"></Step>
        </div>
      </ContentSection>
    </div>
  );
};

export default Steps;
