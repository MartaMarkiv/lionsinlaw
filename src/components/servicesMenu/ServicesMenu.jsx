import { Flex } from "antd";
import { Link } from "react-router-dom";
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
  return (
    <div className="services-menu">
      <div className="title">Послуги</div>
      <Flex className="links-menu-wrapper">
        <Flex vertical={true} align="flex-start">
          <Link to={`${COMPANY_REGISTRATION_ROUTE}/default`}>
            рестрація компаній
          </Link>
          <Link to={BANK_ACCOUNT_ROUTE}>відкриття банківських рахунків</Link>
          <Link to={MERCHANT_ACCOUNTS_ROUTE}>відкриття мерчант рахунків</Link>
        </Flex>
        <Flex vertical={true} align="flex-start">
          <Link to={TRADEMARK_REGISTRATION_ROUTE}>
            реєстрація товарних знаків
          </Link>
          <Link to={CRYPTO_LICENSE_ROUTE}>криптоконсалтинг</Link>
          <Link to={FINANCIAL_LICENSE_ROUTE}>
            відкриття фінансових ліцензій
          </Link>
        </Flex>
        <Flex vertical={true} align="flex-start">
          <Link to={JURISDICTIONS_ROUTE}>Юрисдикції</Link>
        </Flex>
      </Flex>
    </div>
  );
}
