import { en, es } from "../../data/calendly.json";

export const initCalendlyPopup = (language: "en" | "es" | null) => {
  if (language === "en") {
    //@ts-ignore
    Calendly.initBadgeWidget({
      url: en,
      text: "Book a Free Consultation",
      color: "#aa8939",
      textColor: "#ffffff",
    });
  } else {
    //@ts-ignore
    Calendly.initBadgeWidget({
      url: es,
      text: "Agenda una Reunión Gratuita",
      color: "#aa8939",
      textColor: "#ffffff",
    });
  }
};
