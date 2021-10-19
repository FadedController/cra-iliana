import React from "react";

interface Heading3Props {}

const Heading3: React.FC<Heading3Props> = ({ children }) => {
  return <h3 className="heading-3">{children}</h3>;
};

export default Heading3;
