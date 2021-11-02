import React, { useContext, useState } from "react";
import { LanguageContext } from "../..";

/**
 * Language Selector UI component
 */

const Language: React.FC = () => {
  const [selectedState, setSelectedState] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useContext(LanguageContext);

  const handleOnHover = () => {
    setSelectedState(true);
    setIsMenuOpen(true);
  };
  const handleOutHover = () => {
    setSelectedState(false);
    setIsMenuOpen(false);
  };

  const toggleState = () => {
    setIsMenuOpen((e) => !e);
    setSelectedState((e) => !e);
  };

  // Set default language depending on client
  // useEffect(() => {
  //   var language = window.navigator.language;
  //   if (language.includes("es")) {
  //     setLanguage("es");
  //   }
  // }, []);

  return (
    <>
      <div
        onMouseEnter={handleOnHover}
        onMouseLeave={handleOutHover}
        className="relative lg:block hidden"
      >
        <div className="flex flex-col items-center cursor-pointer">
          <span className="material-icons-outlined pb-1">language</span>
          <div
            className={`${
              selectedState ? "opacity-90 w-4" : "opacity-0 w-0"
            } h-0.5 transition-all bg-gradient-to-b from-[#e0c571] to-[#aa8939] rounded-sm`}
          ></div>
        </div>
        <div
          className={`${
            isMenuOpen ? "h-20 px-8 py-2" : "h-0"
          } transition-all overflow-hidden flex flex-col items-center justify-evenly absolute top-6 right-0 bg-gray-100 shadow-2xl rounded-sm cursor-pointer`}
        >
          <ul className="font-semibold uppercase tracking-wide">
            <li
              onClick={() => {
                setSelectedState(false);
                setLanguage("es");
              }}
              className={`hover:underline ${
                language === "es" &&
                "text-transparent bg-clip-text bg-gradient-to-b from-[#e0c571] to-[#aa8939]"
              }`}
            >
              Español
            </li>
            <li
              onClick={() => {
                setSelectedState(false);
                setLanguage("en");
              }}
              className={`hover:underline ${
                language === "en" &&
                "text-transparent bg-clip-text bg-gradient-to-b from-[#e0c571] to-[#aa8939]"
              }`}
            >
              English
            </li>
          </ul>
        </div>
      </div>
      <div onClick={toggleState} className="relative lg:hidden block">
        <div className="flex flex-col items-center cursor-pointer">
          <span className="material-icons-outlined pb-1">language</span>
          <div
            className={`${
              selectedState ? "opacity-90 w-4" : "opacity-0 w-0"
            } h-0.5 transition-all bg-gradient-to-b from-[#e0c571] to-[#aa8939] rounded-sm`}
          ></div>
        </div>
        <div
          className={`${
            isMenuOpen ? "h-20 px-8 py-2" : "h-0"
          } transition-all overflow-hidden flex flex-col items-center justify-evenly absolute top-6 right-0 bg-gray-100 shadow-2xl rounded-sm cursor-pointer`}
        >
          <ul className="font-semibold uppercase tracking-wide">
            <li
              onClick={() => {
                setSelectedState(false);
                setLanguage("es");
              }}
              className={`hover:underline ${
                language === "es" &&
                "text-transparent bg-clip-text bg-gradient-to-b from-[#e0c571] to-[#aa8939]"
              }`}
            >
              Español
            </li>
            <li
              onClick={() => {
                setSelectedState(false);
                setLanguage("en");
              }}
              className={`hover:underline ${
                language === "en" &&
                "text-transparent bg-clip-text bg-gradient-to-b from-[#e0c571] to-[#aa8939]"
              }`}
            >
              English
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Language;
