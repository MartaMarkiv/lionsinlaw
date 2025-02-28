import { Flex } from "antd";
import "./style.scss";

export default function ManIslandCompany() {
  return (
    <div className="isle-man-company">
      <Flex justify="space-between" className="banner-wrapper">
        <div className="man-company-wrapper">
          <Flex vertical={true}>
            <p className="sub-title">Створіть вашу офшорну компанію на </p>
            <p className="company-name">острові Мен</p>
          </Flex>
          <p className="description">
            Оптимізуйте свій бізнес з нашими експертними послугами реєстрації
            компаній на Острові Мен. Глобальні можливості, податкові переваги та
            надійний партнер
          </p>
        </div>
        <Flex className="company-sub-header" vertical={true} justify="space-between">
          <p className="title">LionsInLaw</p>
          <div>
            <p className="count">1000+</p>
            <p className="count-label">задоволених клієнтів</p>
          </div>
        </Flex>
        <div className="vector-wrapper"/>
      </Flex>
    </div>
  );
}
