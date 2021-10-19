import React from "react";

interface Heading1Props {
  lastWord?: boolean;
}

const Heading1: React.FC<Heading1Props> = ({ children, lastWord }) => {
  if (lastWord) {
    const lastIndex = children?.toString().lastIndexOf(" ");
    const text = children?.toString().substring(0, lastIndex);

    return (
      <h1 className="heading-1-wrapper">
        <span className="heading-1-text">{text}</span>
        <span className="heading-1">
          {children?.toString().split(" ").slice(-1)}
        </span>
      </h1>
    );
  }

  return <h1 className="heading-1">{children}</h1>;
};

export default Heading1;
