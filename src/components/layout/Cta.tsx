import React from "react";

interface CtaProps {
  link: string;
  target?: string;
  onClick?: () => void;
  className?: string;
}

const Cta: React.FC<CtaProps> = ({
  children,
  link,
  target,
  className,
  onClick,
}) => {
  return (
    <span className="flex">
      <a
        href={link}
        target={target}
        onClick={onClick}
        className={`flex cursor-pointer transform transition-transform hover:scale-105 text-2xl text-gray-50 px-8 py-3 font-semibold bg-gradient-to-br from-[#6ed4cd] to-[#256c7d] rounded-sm shadow-lg text-center ${className}`}
      >
        {children}
      </a>
    </span>
  );
};

export default Cta;
