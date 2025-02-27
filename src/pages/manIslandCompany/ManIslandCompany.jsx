import { Flex } from "antd";
import "./style.scss";

export default function ManIslandCompany() {
  return (
    <div className="isle-man-company">
      <Flex justify="space-between" className="banner-wrapper">
        <div>
          <Flex vertical={true}>
            <p>Створіть вашу офшорну компанію на </p>
            <p>острові Мен</p>
          </Flex>
          <p>
            Оптимізуйте свій бізнес з нашими експертними послугами реєстрації
            компаній на Острові Мен. Глобальні можливості, податкові переваги та
            надійний партнер
          </p>
        </div>
        <div>
          <p>LionsInLaw</p>
          <div>
            <p>1000+</p>
            <p>задоволених клієнтів</p>
          </div>
        </div>
      </Flex>
    </div>
  );
}
