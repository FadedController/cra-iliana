import Markdown from "markdown-to-jsx";
import React, { useContext, useState } from "react";
import { LanguageContext } from "../..";
import { useData } from "../hooks/useData";

interface CardProps {
  stage: string;
}

const Card: React.FC<CardProps> = ({ stage: dataDirectory }) => {
  const [language] = useContext(LanguageContext);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [insideMarkdown, loadingInsideMarkdown] = useData(
    `/${language}/stages/${dataDirectory}/inside.md`
  );
  const [outsideMarkdown, loadingOutsideMarkdown] = useData(
    `/${language}/stages/${dataDirectory}/outside.md`
  );

  const handleMouseEnter = () => setIsCardOpen(true);
  const handleMouseLeave = () => setIsCardOpen(false);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`absolute transition-all bottom-0 right-0 left-0 bg-red-300 opacity-70 ${
          isCardOpen ? "top-full opacity-0" : "top-0"
        }`}
      >
        {!loadingOutsideMarkdown && <Markdown>{outsideMarkdown}</Markdown>}
      </div>
      {!loadingInsideMarkdown && <Markdown>{insideMarkdown}</Markdown>}
    </div>
  );
};

export default Card;
