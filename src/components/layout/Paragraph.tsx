import React from "react";

interface ParagraphProps {}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <p className="paragraph">{children}</p>;
};

export default Paragraph;
