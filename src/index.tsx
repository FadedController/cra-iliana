import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "tailwindcss/tailwind.css";
import "./index.css";

export const LanguageContext = createContext<
  ["en" | "es" | null, React.Dispatch<React.SetStateAction<"en" | "es">>]
>([null, () => null]);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
