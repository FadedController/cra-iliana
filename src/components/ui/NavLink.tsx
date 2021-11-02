import React, { useState } from "react";

export interface navLink {
  href?: string;
  text: string;
  state: boolean;
}

interface navigationLinkProps {
  navLink: navLink;
  onClick?: () => void;
}

/**
 * @param navLink Contains the component href, text and state in an object
 */

const NavigationLink: React.FC<navigationLinkProps> = ({
  navLink,
  onClick,
}) => {
  const { href, text, state } = navLink;
  const [selectedState, setSelectedState] = useState(state);

  const handleOnHover = () => setSelectedState(true);
  const handleOutHover = () => setSelectedState(false);

  return (
    <div
      className="flex flex-col lg:items-center"
      onMouseEnter={handleOnHover}
      onMouseLeave={handleOutHover}
      onClick={onClick}
    >
      <a href={href} className="tracking-wide font-semibold uppercase pb-1">
        {text}
      </a>
      <div
        className={`${
          selectedState ? "opacity-90 w-8" : "opacity-0 w-0"
        } h-0.5 transition-all bg-gradient-to-b from-[#e0c571] to-[#aa8939] rounded-sm`}
      ></div>
    </div>
  );
};

export default NavigationLink;
