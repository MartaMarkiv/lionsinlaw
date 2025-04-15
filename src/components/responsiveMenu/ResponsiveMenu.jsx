import { Flex, Button } from "antd";
import "./style.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  BANK_ACCOUNT_ROUTE,
  COMPANY_REGISTRATION_ROUTE,
  CRYPTO_LICENSE_ROUTE,
  FINANCIAL_LICENSE_ROUTE,
  JURISDICTIONS_ROUTE,
  MERCHANT_ACCOUNTS_ROUTE,
  TRADEMARK_REGISTRATION_ROUTE,
} from "../../routes/routes";
import Icon from "../iconComponent/Icon";

export default function ResponsiveMenu({ closeClick }) {
  const { t } = useTranslation();
  return (
    <div className="responsive-menu-wrapper">
      <Flex
        className="menu-header-wrapper"
        justify="space-between"
        align="center"
      >
        <p>{t("services")}</p>
        <Button icon={<Icon name="close" />} onClick={closeClick} />
      </Flex>
      <Flex vertical={true} className="menu-links-wrapper">
        <Link to={`${COMPANY_REGISTRATION_ROUTE}/default`}>
          {t("registr_companies")}
        </Link>
        <Link to={BANK_ACCOUNT_ROUTE}>{t("open_bank_accaunts")}</Link>
        <Link to={MERCHANT_ACCOUNTS_ROUTE}>{t("open_merchant_accaunts")}</Link>
        <Link to={TRADEMARK_REGISTRATION_ROUTE}>{t("registr_trademarks")}</Link>
        <Link to={CRYPTO_LICENSE_ROUTE}>{t("cryptoconsulting")}</Link>
        <Link to={FINANCIAL_LICENSE_ROUTE}>{t("open_financial_licenses")}</Link>
        <Link to={JURISDICTIONS_ROUTE}>{t("jurisdictions")}</Link>
      </Flex>
    </div>
  );
}
