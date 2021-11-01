import { en, es } from "../../data/calendly.json";

export const openCalendlyPopup = (language: "en" | "es" | null) => {
  if (language === "en") {
    //@ts-ignore
    Calendly.showPopupWidget(en);
  } else {
    //@ts-ignore
    Calendly.showPopupWidget(es);
  }
};
