import React, { useContext } from "react";
import { LanguageContext } from "../..";
import es_logo from "../../assets/img/logos/es_logo.png";
import en_logo from "../../assets/img/logos/en_logo.png";

interface logoProps {
  className?: string;
  height?: string;
  width?: string;
  href?: string;
}

/**
 * @param className The css classes applied to the image tag
 * @param height The height of the image in the dom, no css
 * @param width The width of the image in the dom, no css
 * @default className: "h-16"
 */

const Logo: React.FC<logoProps> = ({ className, height, width, href }) => {
  const [language] = useContext(LanguageContext);

  if (href) {
    return (
      <a href={href}>
        <img
          src={language === "en" ? en_logo : es_logo}
          alt="Logo"
          className={className ? className : "h-12 lg:h-16 cursor-pointer"}
          height={height ? height : "3rem"}
          width={width}
        />
      </a>
    );
  }

  return (
    <img
      src={language === "en" ? en_logo : es_logo}
      alt="Logo"
      className={className ? className : "h-12 lg:h-16 cursor-pointer"}
      height={height ? height : "3rem"}
      width={width}
    />
  );
};

export default Logo;
