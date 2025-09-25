import "./style.scss";
import { useTranslation } from "react-i18next";
import BlockElement from "../blockElement/BlockElement";
import { Link } from "react-router-dom";
import {
  BELIZE_COMPANY_ROUTE,
  CANADA_COMPANY_ROUTE,
  CURACAO_COMPANY_ROUTE,
  PANAMA_COMPANY_ROUTE,
  USA_COMPANY_ROUTE,
} from "../../routes/routes";

export default function AmericanRegion() {
  const { t } = useTranslation();
  return (
    <div className="american-region-wrapper">
      <Link to={USA_COMPANY_ROUTE}>
        <BlockElement
          description={t("jurisdictions_44")}
          linkValue={""}
          title={t("jurisdictions_43")}
          isDark={false}
          hasLink={false}
          blockClass="usa"
        />
      </Link>
      <BlockElement
        description={t("jurisdictions_46")}
        linkValue={PANAMA_COMPANY_ROUTE}
        title={t("jurisdictions_45")}
        isDark={true}
      />
      <div className="image-wrapper">
        <div className="american-region"></div>
      </div>
      <Link to={CURACAO_COMPANY_ROUTE} className="curacao-link">
        <BlockElement
          description={t("jurisdictions_49")}
          linkValue={""}
          title={t("jurisdictions_48")}
          isDark={false}
          hasLink={false}
          blockClass="curacao"
        />
      </Link>
      <Link to={BELIZE_COMPANY_ROUTE} className="beliz-link">
        <BlockElement
          description={t("jurisdictions_51")}
          linkValue={""}
          hasLink={false}
          title={t("jurisdictions_50")}
          isDark={true}
          blockClass="beliz"
        />
      </Link>
      <Link to={CANADA_COMPANY_ROUTE}>
        <BlockElement
          description={t("jurisdictions_53")}
          linkValue={""}
          title={t("jurisdictions_52")}
          isDark={false}
          blockClass="canada"
        />
      </Link>
    </div>
  );
}
