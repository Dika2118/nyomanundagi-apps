import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import id from "./locales/id";
import en from "./locales/en";

const savedLang = localStorage.getItem("nyomanundagi_lang") || "id";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      id: { translation: id },
      en: { translation: en },
    },
    lng: savedLang,
    fallbackLng: "id",
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("nyomanundagi_lang", lng);
});

export default i18n;
