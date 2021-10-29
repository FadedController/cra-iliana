import Markdown from "markdown-to-jsx";
import React, { useContext } from "react";
import { LanguageContext } from "../..";
import { useData } from "../hooks/useData";
import Bold from "../layout/Bold";
import ContentSection from "../layout/ContentSection";
import Heading2 from "../layout/Heading2";
import Paragraph from "../layout/Paragraph";

interface ManifestProps {}

const Manifest: React.FC<ManifestProps> = () => {
  const [language] = useContext(LanguageContext);
  const [markdown, loading] = useData(`/${language}/manifest.md`);

  return (
    <div className="manifest">
      <ContentSection className="md:space-x-2 flex-col md:flex-row p-4">
        {!loading && (
          <Markdown
            options={{
              wrapper: "div",
              overrides: {
                h2: {
                  component: Heading2,
                },
                strong: {
                  component: Bold,
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
      </ContentSection>
    </div>
  );
};

export default Manifest;
