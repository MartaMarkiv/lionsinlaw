import { Link, useLocation } from "react-router-dom";
import { Flex, Button, Popover } from "antd";
import "./style.scss";
import Icon from "../iconComponent/Icon";
import ServicesMenu from "../servicesMenu/ServicesMenu";

export default function Header() {
  return (
    <header className="header">
      <Flex align="center" justify="space-between">
        <Icon name="logo" />
        <Flex align="center" className="header-menu-wrapper">
          <Popover content={<ServicesMenu />}>
            <Button className="menu-item" icon={<Icon name="drop" />}>
              Послуги
            </Button>
          </Popover>
          <Link to={""}>Блог</Link>
          <Link to={""}>Контакти</Link>
          <a href="mailto:info@Lionsinlaw.com" className="email-wrapper">
            <Icon name="envelop" />
            <span>info@Lionsinlaw.com</span>
          </a>
          <Button icon={<Icon name="language" />} />
        </Flex>
      </Flex>
    </header>
  );
}
