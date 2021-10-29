import React from "react";

interface ParagraphProps {
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
  return <p className={"paragraph " + className}>{children}</p>;
};

export default Paragraph;
