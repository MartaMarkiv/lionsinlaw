import { Flex } from "antd";
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
import "./style.scss";

export default function ServicesMenu() {
  const { t } = useTranslation();
  return (
    <div className="services-menu">
      <div className="title">{t("services")}</div>
      <Flex className="links-menu-wrapper">
        <Flex vertical={true} align="flex-start">
          <Link to={`${COMPANY_REGISTRATION_ROUTE}/default`}>
            {t("registr_companies")}
          </Link>
          <Link to={BANK_ACCOUNT_ROUTE}>{t("open_bank_accaunts")}</Link>
          <Link to={MERCHANT_ACCOUNTS_ROUTE}>
            {t("open_merchant_accaunts")}
          </Link>
        </Flex>
        <Flex vertical={true} align="flex-start">
          <Link to={TRADEMARK_REGISTRATION_ROUTE}>
            {t("registr_trademarks")}
          </Link>
          <Link to={CRYPTO_LICENSE_ROUTE}>{t("cryptoconsulting")}</Link>
          <Link to={FINANCIAL_LICENSE_ROUTE}>
            {t("open_financial_licenses")}
          </Link>
        </Flex>
        <Flex vertical={true} align="flex-start">
          <Link to={JURISDICTIONS_ROUTE}>{t("jurisdictions")}</Link>
        </Flex>
      </Flex>
    </div>
  );
}
