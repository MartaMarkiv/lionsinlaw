import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    lang: "en",
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {translation:{
        global_corporate_services: "Global Corporate Services"
      }},
      it: {translation:{
        global_corporate_services: "Servizi aziendali globali"
      }},
      ua: {translation:{
        global_corporate_services: "Глобальні корпоративні послуги"
      }}
    }
  });

  export default i18n;