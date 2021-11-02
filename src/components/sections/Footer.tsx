import React, { useContext } from "react";
import { LanguageContext } from "../..";
import ContentSection from "../layout/ContentSection";
import Logo from "../layout/Logo";
import WhatsApp from "../ui/Whatsapp";
import Youtube from "../../assets/img/logos/youtube.png";
import Linkedin from "../../assets/img/logos/linkedin.png";
import Instagram from "../../assets/img/logos/instagram.png";
import Facebook from "../../assets/img/logos/facebook.png";

const Footer: React.FC = () => {
  const [language] = useContext(LanguageContext);

  return (
    <div className="bg-gray-900">
      <ContentSection className="flex-col px-4 pt-4 pb-16 space-y-2">
        <div className="flex lg:flex-row flex-col space-y-4 lg:items-center lg:space-y-0">
          <div>
            <Logo />
          </div>
          <div className="flex-1 flex lg:justify-end space-x-5 items-center">
            <p className="font-semibold text-xl text-gray-100">
              {language === "es"
                ? "Sigue mis redes sociales"
                : "Follow me on social media"}
            </p>
            <div className="flex space-x-3 justify-end w-full lg:w-auto">
              <a
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCWVi9lcxTO7hKQYCxPxpQlQ"
                target="_blank"
                className="flex items-center justify-center"
              >
                <img alt="youtube logo" src={Youtube} className="w-7" />
              </a>
              <a
                rel="noreferrer"
                href="https://ca.linkedin.com/in/ilianahegewisch"
                target="_blank"
              >
                <img alt="linkedin logo" src={Linkedin} className="w-6 h-6" />
              </a>
              <a
                rel="noreferrer"
                href="https://www.instagram.com/ilianahegewisch/"
                target="_blank"
              >
                <img alt="instagram logo" src={Instagram} className="w-6 h-6" />
              </a>
              <a
                rel="noreferrer"
                href="https://www.facebook.com/ilianamaria.hegewisch"
                target="_blank"
              >
                <img alt="facebook logo" src={Facebook} className="w-6 h-6" />
              </a>
              <a
                rel="noreferrer"
                href="https://wa.me/+16043129115"
                target="_blank"
              >
                <WhatsApp className="h-6 w-6 fill-current text-gray-100" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex py-4 lg:flex-row flex-col lg:space-y-0 space-y-6">
          <div className="flex flex-col flex-1 space-y-2">
            <h5 className="text-2xl font-semibold text-gray-100">
              {language === "es" ? "Contáctanos" : "Contact us"}
            </h5>
            <div className="h-0.5 w-10 bg-gradient-to-tl from-[#e0c571] to-[#aa8939]"></div>
            <ul className="flex flex-col space-y-1 font-light text-gray-100">
              <li className="flex space-x-2 items-center">
                <WhatsApp className="h-5 w-5 fill-current text-gray-100" />
                <p>+1 (604) 312-9115</p>
              </li>
              <li className="flex space-x-2">
                <span className="material-icons">mail</span>
                <p>smartheartmastermind@gmail.com</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col flex-1 space-y-2">
            <h5 className="text-2xl font-semibold text-gray-100">
              {language === "es"
                ? "Más acerca de Iliana"
                : "More about Illiana"}
            </h5>
            <div className="h-0.5 w-10 bg-gradient-to-tl from-[#e0c571] to-[#aa8939]"></div>
            <ul className="flex flex-col space-y-1 font-light text-gray-100">
              <li>
                <a href="#me" className="hover:underline">
                  Meet Me
                </a>
              </li>
              <li>
                <a href="#mastermind" className="hover:underline">
                  Masterminds
                </a>
              </li>
              <li>
                <a href="#manifest" className="hover:underline">
                  Coaching
                </a>
              </li>
              <li>
                <a
                  target="new"
                  href="https://www.youtube.com/channel/UCWVi9lcxTO7hKQYCxPxpQlQ"
                  className="hover:underline"
                >
                  {language === "en" ? "Youtube Channel" : "Canal de Youtube"}
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col flex-1 space-y-2">
            <h5 className="text-2xl font-semibold text-gray-100">
              {language === "es" ? "Nuestros Sponsors" : "Our Sponsors"}
            </h5>
            <div className="h-0.5 w-10 bg-gradient-to-tl from-[#e0c571] to-[#aa8939]"></div>
            <ul className="flex flex-col space-y-1 font-light text-gray-100">
              <li>
                <a
                  rel="noreferrer"
                  href="https://www.instagram.com/praana_vida/"
                  target="_blank"
                  className="hover:underline"
                >
                  PRANA
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="http://linkedin.com/in/sof%C3%ADa-barrero-lifestyle-biz-coach-58112221"
                >
                  Introsphera
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  className="hover:underline"
                  href="https://www.instagram.com/starnet_mx/"
                  target="_blank"
                >
                  Starnet
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="hover:underline"
                  href="https://axel-padilla.vercel.app"
                >
                  Axel Padilla
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col flex-1 space-y-2">
            <h5 className="text-2xl font-semibold text-gray-100">
              {language === "es" ? "Otros Enlaces" : "Other Links"}
            </h5>
            <div className="h-0.5 w-10 bg-gradient-to-tl from-[#e0c571] to-[#aa8939]"></div>
            <ul className="flex flex-col space-y-1 font-light text-gray-100">
              <li>
                <a
                  href="privacy-policy.html"
                  target="_blank"
                  className="hover:underline"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  className="hover:underline"
                  href="https://axel-padilla.vercel.app"
                  target="_blank"
                >
                  Contact the developer
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-900 flex flex-col justify-center space-y-2">
          <p className="text-sm text-gray-50 text-center font-light">
            Copyright by Iliana Hegewisch. All rights reserved. ©2021{" "}
          </p>
        </div>
      </ContentSection>
    </div>
  );
};

export default Footer;
