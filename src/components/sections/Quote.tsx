import Markdown from "markdown-to-jsx";
import React, { useContext } from "react";
import { LanguageContext } from "../..";
import { useData } from "../hooks/useData";

interface QuoteProps {}

const Quote: React.FC<QuoteProps> = () => {
  const [language] = useContext(LanguageContext);
  const [markdown, loading] = useData(`/${language}/quote.md`);

  return (
    <div className="quote">
      {!loading && <Markdown options={{ wrapper: "div" }}>{markdown}</Markdown>}
    </div>
  );
};

export default Quote;
