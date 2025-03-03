import { Link, useLocation } from "react-router-dom";
import { Flex, Button, Popover } from "antd";
import "./style.scss";
import Icon from "../iconComponent/Icon";
import ServicesMenu from "../servicesMenu/ServicesMenu";
import {
  CONTACTS_ROUTE,
  CZECH_COMPANY_ROUTE,
  PANAMA_COMPANY_ROUTE,
} from "../../routes/routes";

export default function Header() {
  const location = useLocation();

  const deleteMargin =
    [PANAMA_COMPANY_ROUTE, CZECH_COMPANY_ROUTE].indexOf(location.pathname) >= 0;
  return (
    <header className={`header ${deleteMargin && "delete-mg"}`}>
      <Flex align="center" justify="space-between">
        <Icon name="logo" />
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
