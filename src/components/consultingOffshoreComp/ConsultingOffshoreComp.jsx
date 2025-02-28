import { Flex } from "antd";
import "./style.scss";
import Icon from "../iconComponent/Icon";
import LinkComponent from "../linkComponent/LinkComponent";

export default function ConsultingOffshoreComp() {
  return (
    <div className="consulting-offshore-comp-wrapper">
      <p className="header-block">
        Отримайте експертну консультацію щодо створення офшорної компанії
      </p>
      <Flex justify="space-between">
        <div>
          <Flex
            vertical={true}
            align="center"
            justify="center"
            className="time-block"
          >
            <p>Підтримка</p>
            <Flex>
              <span className="hours-value">24/</span>
              <span className="day-value">7</span>
            </Flex>
          </Flex>
        </div>
        <Flex vertical={true} className="tariff-wrapper">
          <Flex align="center">
            <span className="count">$0</span>
            <span>/ Місяць</span>
          </Flex>
          <div className="tariff-items-wrapper">
            <Flex align="center" className="tariff-item">
              <Icon name="ok-rounded-white" />
              <p>Виконаня протягом 2 дня</p>
            </Flex>
            <Flex className="tariff-item">
              <Icon name="ok-rounded-white" />
              <p>100 % успішність</p>
            </Flex>
            <Flex className="tariff-item">
              <Icon name="ok-rounded-white" />
              <p>
                Швидко, легко та з max конфіденційністю через захищені системи
              </p>
            </Flex>
          </div>
        </Flex>
        <Flex
          vertical={true}
          justify="space-between"
          align="flex-start"
          className="register-company-wrapper"
        >
          <p className="title">LionsInLaw</p>
          <p className="description">
            Дізнайтеся про вартість і умови реєстрації вашої майбутньої офшорної
            компанії від наших експертів
          </p>
          <LinkComponent linkLabel="Зареєструвати компанію" linkValue={"/"} />
        </Flex>
      </Flex>
    </div>
  );
}
