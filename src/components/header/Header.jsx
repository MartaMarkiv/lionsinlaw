import { Link, useLocation } from "react-router-dom";
import { Flex, Button, Popover } from "antd";
import "./style.scss";
import Icon from "../iconComponent/Icon";
import ServicesMenu from "../servicesMenu/ServicesMenu";
import {
  CONTACTS_ROUTE,
  CZECH_COMPANY_ROUTE,
  MAIN_ROUTE,
  MERCHANT_ACCOUNTS_ROUTE,
  PANAMA_COMPANY_ROUTE,
} from "../../routes/routes";

export default function Header() {
  const location = useLocation();

  const deleteMargin =
    [PANAMA_COMPANY_ROUTE, CZECH_COMPANY_ROUTE, MAIN_ROUTE].indexOf(location.pathname) >= 0;

  const isRevert = location.pathname === MERCHANT_ACCOUNTS_ROUTE;
  return (
    <header
      className={`page-content-wrapper header ${deleteMargin && "delete-mg"} ${isRevert && "revert"}`}
    >
      <Flex
        align="center"
        justify="space-between"
        className={isRevert && "left-align-header"}
      >
        <Link to={MAIN_ROUTE}>
          <Icon name="logo" />
        </Link>
        <Flex align="center" className="header-menu-wrapper">
          <Popover content={<ServicesMenu />}>
            <Button className="menu-item" icon={<Icon name="drop" />}>
              Послуги
            </Button>
          </Popover>
          <Link to={""}>Блог</Link>
          <Link to={CONTACTS_ROUTE}>Контакти</Link>
          <a href="mailto: info@lionsinlaw.com" className="email-wrapper">
            <Icon name="envelop" />
            <span>info@Lionsinlaw.com</span>
          </a>
          <Button icon={<Icon name="language" />} />
        </Flex>
      </Flex>
    </header>
  );
}
