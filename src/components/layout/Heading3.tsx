import React from "react";

interface Heading3Props {
  className?: string;
}

const Heading3: React.FC<Heading3Props> = ({ children, className }) => {
  return <h3 className={`heading-3 ${className}`}>{children}</h3>;
};

export default Heading3;
