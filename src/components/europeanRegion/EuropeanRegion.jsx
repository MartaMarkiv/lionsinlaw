import "./style.scss";
import BlockElement from "../blockElement/BlockElement";
import {
  BELGIUM_COMPANY_ROUTE,
  CZECH_COMPANY_ROUTE,
  ENGLAND_COMPANY_ROUTE,
  GIBRALTAR_COMPANY_ROUTE,
  IRELAND_COMPANY_ROUTE,
  ISLA_MAN_COMPANY_ROUTE,
  POLAND_COMPANY_ROUTE,
  SCOTLAND_COMPANY_ROUTE,
  SPAIN_COMPANY_ROUTE,
  USA_COMPANY_ROUTE,
} from "../../routes/routes";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function EuropeanRegion() {
  const { t } = useTranslation();
  return (
    <div className="european-region-wrapper">
      <Link to={ENGLAND_COMPANY_ROUTE}>
        <BlockElement
          description={t("jurisdictions_21")}
          linkValue={""}
          title={t("jurisdictions_20")}
          isDark={false}
          hasLink={false}
          blockClass="england"
        />
      </Link>
      <BlockElement
        description={t("jurisdictions_21")}
        linkValue={GIBRALTAR_COMPANY_ROUTE}
        title={t("jurisdictions_22")}
        isDark={false}
      />
      <Link className="spain-link" to={SPAIN_COMPANY_ROUTE}>
        <BlockElement
          description={t("jurisdictions_21")}
          linkValue={""}
          title={t("jurisdictions_25")}
          isDark={true}
          hasLink={false}
          blockClass="spain"
        />
      </Link>
      <BlockElement
        description={t("jurisdictions_21")}
        linkValue={ISLA_MAN_COMPANY_ROUTE}
        title={t("jurisdictions_27")}
        isDark={false}
        blockClass="men-island"
      />
      <Link to={IRELAND_COMPANY_ROUTE}>
        <BlockElement
          description={t("jurisdictions_21")}
          linkValue={IRELAND_COMPANY_ROUTE}
          hasLink={false}
          title={t("jurisdictions_30")}
          isDark={false}
          blockClass="ireland"
        />
      </Link>
      <BlockElement
        description={t("jurisdictions_21")}
        linkValue={SCOTLAND_COMPANY_ROUTE}
        title={t("jurisdictions_32")}
        isDark={true}
      />
      <Link to={USA_COMPANY_ROUTE} className="usa-link">
        <BlockElement
          description={t("jurisdictions_21")}
          linkValue={""}
          hasLink={false}
          title={t("jurisdictions_35")}
          isDark={false}
          blockClass="usa"
        />
      </Link>
      <Link to={POLAND_COMPANY_ROUTE} className="poland-link">
        <BlockElement
          description={t("jurisdictions_21")}
          linkValue={""}
          title={t("jurisdictions_37")}
          isDark={true}
          blockClass="poland"
        />
      </Link>
      <Link className="czech-link" to={CZECH_COMPANY_ROUTE}>
        <BlockElement
          description={t("jurisdictions_21")}
          linkValue={""}
          title={t("jurisdictions_39")}
          isDark={false}
          hasLink={false}
          blockClass="czech"
        />
      </Link>
      <BlockElement
        description={t("jurisdictions_21")}
        linkValue={BELGIUM_COMPANY_ROUTE}
        title={t("jurisdictions_40")}
        isDark={true}
      />
    </div>
  );
}
