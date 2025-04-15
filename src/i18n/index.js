import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEn from "./en.json";
import translationIt from "./it.json";
import translationEs from "./es.json";
import translationUa from "./ua.json";

const resources = {
  en: {
    translation: translationEn,
  },
  it: {
    translation: translationIt,
  },
  es: {
    translation: translationEs,
  },
  ua: {
    translation: translationUa,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
