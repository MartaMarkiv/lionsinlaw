import { useTranslation } from "react-i18next";
import "./style.scss";
import { Link } from "react-router-dom";

export default function GetConsultation() {
  const { t } = useTranslation();
  return (
    <div className="page-content-wrapper get-consultation-wrapper">
      <div className="banner-wrapper">
        <div className="banner-gradient" />
        <p className="title">
          {t("jurisdictions_16")}
          <span className="selected-text"> LionsInLaw</span>
        </p>
        <p className="description">{t("jurisdictions_18")}</p>
        <Link>{t("jurisdictions_19")}</Link>
      </div>
    </div>
  );
}
