import Markdown, { MarkdownToJSX } from "markdown-to-jsx";
import React, { useContext, useState } from "react";
import { LanguageContext } from "../..";
import { useData } from "../hooks/useData";
import Bold from "../layout/Bold";
import Paragraph from "../layout/Paragraph";

interface CardProps {
  stage: string;
  toogleBg?: boolean;
}

const outsideMarkdownOptions: MarkdownToJSX.Options = {
  wrapper: ({ children }) => (
    <div className="flex flex-col space-y-2">{children}</div>
  ),
  overrides: {
    h4: {
      component: ({ children }) => (
        <h4 className="text-4xl font-semibold">{children}</h4>
      ),
    },
    p: Paragraph,
  },
};

const insideMarkdownOptions: MarkdownToJSX.Options = {
  wrapper: ({ children }) => (
    <div className="flex flex-col space-y-2">{children}</div>
  ),
  overrides: {
    h4: {
      component: ({ children }) => (
        <h4 className="font-semibold text-gray-50 text-2xl">{children}</h4>
      ),
    },
    p: {
      component: Paragraph,
      props: {
        className: "text-gray-50",
      },
    },
  },
};

const Card: React.FC<CardProps> = ({ stage, toogleBg }) => {
  const [language] = useContext(LanguageContext);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [insideMarkdown, loadingInsideMarkdown] = useData(
    `/${language}/stages/${stage}/inside.md`
  );
  const [outsideMarkdown, loadingOutsideMarkdown] = useData(
    `/${language}/stages/${stage}/outside.md`
  );

  const handleMouseEnter = () => setIsCardOpen(true);
  const handleMouseLeave = () => setIsCardOpen(false);

  return (
    <div
      className="relative card-inside overflow-hidden cursor-default"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`text-center absolute transition-all bottom-0 right-0 left-0 
        ${toogleBg ? "overlay-1" : "overlay-2"} 
        ${isCardOpen ? "top-full opacity-0" : "top-0"}`}
      >
        <div className="w-full h-full flex flex-col items-center space-y-3 justify-center px-3 bg-[#ffffff7c]">
          {!loadingOutsideMarkdown && (
            <Markdown options={outsideMarkdownOptions}>
              {outsideMarkdown}
            </Markdown>
          )}
          <div className="flex items-center justify-center">
            <span className="material-icons-outlined">touch_app</span>
            <Bold>Haz clic aquí</Bold>
          </div>
        </div>
      </div>
      {!loadingInsideMarkdown && (
        <Markdown options={insideMarkdownOptions}>{insideMarkdown}</Markdown>
      )}
    </div>
  );
};

export default Card;
