import React, { useContext, useState } from "react";
import { LanguageContext } from "../..";
import { openCalendlyPopup } from "../hooks/openCalendlyPopup";
import ContentSection from "../layout/ContentSection";
import Logo from "../layout/Logo";
import Language from "../ui/Language";
import NavigationLink from "../ui/NavLink";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const [mobileNavState, setMobileNavState] = useState(false);
  const [language] = useContext(LanguageContext);

  const esLinks = (
    <>
      <NavigationLink
        onClick={() => setMobileNavState(false)}
        navLink={{
          text: "Para quien",
          href: "#about",
          state: true,
        }}
      ></NavigationLink>
      <NavigationLink
        onClick={() => setMobileNavState(false)}
        navLink={{
          text: "Manifestar",
          href: "#manifest",
          state: false,
        }}
      ></NavigationLink>
      <NavigationLink
        onClick={() => setMobileNavState(false)}
        navLink={{
          text: "100% Funciona",
          href: "#benefits",
          state: false,
        }}
      ></NavigationLink>
      <NavigationLink
        onClick={() => setMobileNavState(false)}
        navLink={{
          text: "Conóceme",
          href: "#me",
          state: false,
        }}
      ></NavigationLink>
      <NavigationLink
        navLink={{ state: false, text: "Consulta Gratis", href: "#value" }}
        onClick={() => {
          openCalendlyPopup(language);
          setMobileNavState(false);
        }}
      ></NavigationLink>
    </>
  );
  const enLinks = (
    <>
      <NavigationLink
        onClick={() => setMobileNavState(false)}
        navLink={{
          text: "For who",
          href: "#about",
          state: true,
        }}
      ></NavigationLink>
      <NavigationLink
        onClick={() => setMobileNavState(false)}
        navLink={{
          text: "Manifest",
          href: "#manifest",
          state: false,
        }}
      ></NavigationLink>
      <NavigationLink
        onClick={() => setMobileNavState(false)}
        navLink={{
          text: "100% Works",
          href: "#benefits",
          state: false,
        }}
      ></NavigationLink>
      <NavigationLink
        onClick={() => setMobileNavState(false)}
        navLink={{
          text: "Meet Me",
          href: "#me",
          state: false,
        }}
      ></NavigationLink>
      <NavigationLink
        navLink={{ state: false, text: "Free Appointment", href: "#value" }}
        onClick={() => {
          openCalendlyPopup(language);
          setMobileNavState(false);
        }}
      ></NavigationLink>
    </>
  );

  return (
    <div className="flex flex-col sticky top-0 w-full bg-white z-30">
      <ContentSection className="p-4">
        <Logo href="#" />
        <div className="flex flex-1 items-center justify-end space-x-3">
          <div className="hidden lg:flex space-x-3">
            {language === "en" ? enLinks : esLinks}
          </div>
          <Language />
          <span
            onClick={() => setMobileNavState((e) => !e)}
            className="material-icons-outlined text-3xl pb-1 lg:hidden cursor-pointer"
          >
            menu
          </span>
        </div>
      </ContentSection>
      <div
        className={`transition-all flex flex-col items-start justify-evenly px-8 lg:hidden bg-white  ${
          mobileNavState ? "h-44" : "h-0"
        } overflow-hidden`}
      >
        {language === "en" ? enLinks : esLinks}
      </div>
    </div>
  );
};

export { Navigation };
