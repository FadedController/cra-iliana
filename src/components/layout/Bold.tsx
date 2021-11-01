import React from "react";

interface BoldProps {
  className?: string;
}

const Bold: React.FC<BoldProps> = ({ children, className }) => {
  return <strong className={`font-semibold ${className}`}>{children}</strong>;
};

export default Bold;
