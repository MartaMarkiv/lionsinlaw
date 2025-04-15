import { Link } from "react-router-dom";
import Icon from "../iconComponent/Icon";
import "./style.scss";
import { useTranslation } from "react-i18next";

export default function MoreLink({ linkValue = "", theme = "light" }) {
  const { t } = useTranslation();

  return (
    <Link className={`more-link ${theme}`} to={linkValue}>
      <span>{t("main_19")}</span>
      <Icon name={`more-${theme}`} />
    </Link>
  );
}
