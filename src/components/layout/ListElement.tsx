import React from "react";
import Paragraph from "./Paragraph";

interface ListElementProps {
  blue?: boolean;
}

const ListElement: React.FC<ListElementProps> = ({ children, blue }) => {
  return (
    <li className="flex items-center space-x-2">
      <span
        className={`material-icons-outlined transform translate-y-2 text-center ${
          blue ? "blue-text-gradient" : "gold-text-gradient"
        }`}
      >
        check_circle
      </span>

      <Paragraph>{children}</Paragraph>
    </li>
  );
};

export default ListElement;
