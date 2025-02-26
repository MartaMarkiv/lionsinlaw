import { Flex } from "antd";
import { Link } from "react-router-dom";
import { BANK_ACCOUNT_ROUTE, JURISDICTIONS_ROUTE } from "../../routes/routes";
import "./style.scss";

export default function ServicesMenu() {
  return (
    <div className="services-menu">
      <div className="title">Послуги</div>
      <Flex className="links-menu-wrapper">
        <Flex vertical={true} align="flex-start">
          <Link to={""}>рестрація компаній</Link>
          <Link to={BANK_ACCOUNT_ROUTE}>відкриття банківських рахунків</Link>
          <Link to={""}>відкриття мерчант рахунків</Link>
        </Flex>
        <Flex vertical={true} align="flex-start">
          <Link to={""}>реєстрація товарних знаків</Link>
          <Link to={""}>криптоконсалтинг</Link>
          <Link to={""}>відкриття фінансових ліцензій</Link>
        </Flex>
        <Flex vertical={true} align="flex-start">
          <Link to={""}>Консультаційні послуги</Link>
          <Link to={""}>Ціни</Link>
          <Link to={""}>Питання відповідь</Link>
        </Flex>
        <Flex vertical={true} align="flex-start">
          <Link to={JURISDICTIONS_ROUTE}>Юрисдикції</Link>
        </Flex>
      </Flex>
    </div>
  );
}
