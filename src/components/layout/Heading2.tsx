import React from "react";

interface Heading2Props {
  className?: string;
}

const Heading2: React.FC<Heading2Props> = ({ children, className }) => {
  return <h2 className={`heading-2 ${className}`}>{children}</h2>;
};

export default Heading2;
