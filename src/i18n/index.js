import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./en.json";
import translationIt from "./it.json";
import translationEs from "./es.json";

const resources = {
  en: {
    translation: translationEn
  },
  it: {
    translation: translationIt
  },
  es: {
    translation: translationEs
  },
}

i18n
  .use(initReactI18next)
  .init({
    lang: "en",
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

  export default i18n;