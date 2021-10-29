import React from "react";

interface Heading2Props {
  className?: string;
  blue?: boolean;
}

const Heading2: React.FC<Heading2Props> = ({ children, className, blue }) => {
  return (
    <h2 className={`${blue ? "heading-2-blue" : "heading-2"} ${className}`}>
      {children}
    </h2>
  );
};

export default Heading2;
