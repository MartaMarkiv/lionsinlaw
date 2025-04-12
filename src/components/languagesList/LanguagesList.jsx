import "./style.scss";
import { Button } from "antd";
import config from "../../config";
import Icon from "../iconComponent/Icon";

export default function LanguagesList() {
  const changeLanguage = () => {};

  return <div className="language-wrapper">
  {config.regionsList.map((item, index) => (
    <Button
      key={`${item.name}-${index}`}
      className="language-btn"
      icon={<Icon name={item.flagName} />}
      onClick={changeLanguage}
    >
      {item.name}
      </Button>
  ))}
</div>
}