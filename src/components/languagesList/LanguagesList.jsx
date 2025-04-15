import "./style.scss";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import config from "../../config";
import Icon from "../iconComponent/Icon";

export default function LanguagesList() {
  const {i18n} = useTranslation();
  const changeLanguage = (language) => {
    console.log("change language: ", language);
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-wrapper">
      {config.regionsList.map((item, index) => (
        <Button
          key={`${item.name}-${index}`}
          className="language-btn"
          icon={<Icon name={item.flagName} />}
          onClick={()=>changeLanguage(item.language)}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
}
