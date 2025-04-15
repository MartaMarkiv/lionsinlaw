import { Flex, Button } from "antd";
import "./style.scss";
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
import Icon from "../iconComponent/Icon";

export default function ResponsiveMenu({ closeClick }) {
  return (
    <div className="responsive-menu-wrapper">
      <Flex
        className="menu-header-wrapper"
        justify="space-between"
        align="center"
      >
        <p>Послуги</p>
        <Button icon={<Icon name="close" />} onClick={closeClick} />
      </Flex>
      <Flex vertical={true} className="menu-links-wrapper">
        <Link to={`${COMPANY_REGISTRATION_ROUTE}/default`}>
          Реєстрація Компаній
        </Link>
        <Link to={BANK_ACCOUNT_ROUTE}>Відкриття Банківських Рахунків</Link>
        <Link to={MERCHANT_ACCOUNTS_ROUTE}>відкриття мерчант рахунків</Link>
        <Link to={TRADEMARK_REGISTRATION_ROUTE}>
          реєстрація товарних знаків
        </Link>
        <Link to={CRYPTO_LICENSE_ROUTE}>криптоконсалтинг</Link>
        <Link to={FINANCIAL_LICENSE_ROUTE}>відкриття фінансових ліцензій</Link>
        <Link to={JURISDICTIONS_ROUTE}>юрисдикції</Link>
      </Flex>
    </div>
  );
}
