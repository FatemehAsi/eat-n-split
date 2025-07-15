import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationFA from "./locales/fa/translation.json";

export default i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    fa: { translation: translationFA },
  },
  lng: "fa",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
