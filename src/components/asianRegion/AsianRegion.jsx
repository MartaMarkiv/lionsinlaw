import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  MAURITIUS_COMPANY_ROUTE,
  SEYCHELLES_COMPANY_ROUTE,
} from "../../routes/routes";
import BlockElement from "../blockElement/BlockElement";
import "./style.scss";

export default function AsianRegion() {
  const {t} = useTranslation();
  return (
    <div className="asian-region-wrapper">
      <Link to={SEYCHELLES_COMPANY_ROUTE}>
        <BlockElement
          description={t("jurisdictions_55")}
          linkValue={""}
          title={t("jurisdictions_54")}
          isDark={false}
          blockClass="seychelles"
        />
      </Link>
      <Link to={MAURITIUS_COMPANY_ROUTE}>
        <BlockElement
          description={t("jurisdictions_55")}
          linkValue={""}
          title={t("jurisdictions_56")}
          isDark={false}
          blockClass="mauritius"
        />
      </Link>
    </div>
  );
}
