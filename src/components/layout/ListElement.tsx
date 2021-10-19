import React from "react";
import Paragraph from "./Paragraph";

interface ListElementProps {}

const ListElement: React.FC<ListElementProps> = ({ children }) => {
  return (
    <li className="flex items-center space-x-2">
      <span className="material-icons-outlined gold-text-gradient">
        check_circle
      </span>
      <Paragraph>{children}</Paragraph>
    </li>
  );
};

export default ListElement;
