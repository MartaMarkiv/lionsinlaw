import "./style.scss";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import config from "../../config";

export default function LanguagesList() {
  const { i18n, t } = useTranslation();
  const changeLanguage = (language) => {
    console.log("change language: ", language);
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-wrapper">
      {config.regionsList.map((item, index) => (
        <Button
          key={`${item.language}-${index}`}
          className="language-btn"
          onClick={() => changeLanguage(item.language)}
        >
          {t(item.language)}
        </Button>
      ))}
    </div>
  );
}
