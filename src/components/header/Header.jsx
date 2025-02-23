import { Link } from "react-router-dom";
import { Flex } from "antd";
import "./style.scss";
import Icon from "../iconComponent/Icon";

export default function Header() {
  return <header>
    <Flex align="center" justify="space-between">
      <Icon name="logo" />
      <Flex align="center" className="header-menu-wrapper">
        <span>Послуги</span>
        <Link>Блог</Link>
        <Link>Контакти</Link>
        <Link>
          <Icon name="envelop" />
          <span>info@lionsinlaw.com</span>
        </Link>
      </Flex>
    </Flex>
  </header>
}