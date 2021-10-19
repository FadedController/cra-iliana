import React from "react";

interface BoldProps {}

const Bold: React.FC<BoldProps> = ({ children }) => {
  return <strong className="font-semibold">{children}</strong>;
};

export default Bold;
