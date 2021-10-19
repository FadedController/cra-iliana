import React from "react";

interface CtaProps {
  link: string;
}

const Cta: React.FC<CtaProps> = ({ children, link }) => {
  return (
    <span className="flex">
      <a
        href={link}
        className="flex transform transition-transform hover:scale-105 text-2xl text-gray-50 px-8 py-3 font-semibold bg-gradient-to-br from-[#6ed4cd] to-[#256c7d] rounded-sm shadow-lg"
      >
        {children}
      </a>
    </span>
  );
};

export default Cta;
