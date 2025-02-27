import { Flex } from "antd";
import "./style.scss";
import Icon from "../iconComponent/Icon";
import LinkComponent from "../linkComponent/LinkComponent";

export default function ConsultingOffshoreComp() {
  return (
    <div className="consulting-offshore-comp-wrapper">
      <p className="header">
        Отримайте експертну консультацію щодо створення офшорної компанії
      </p>
      <Flex justify="space-between">
        <Flex vertical={true}>
          <p>Підтримка</p>
          <div>
            <span>24/</span>
            <span>7</span>
          </div>
        </Flex>
        <Flex vertical={true}>
          <div>
            <span>$0</span>
            <span>/ Місяць</span>
          </div>
          <div>
            <Flex align="center">
              <Icon name="ok-rounded-white" />
              <p>Виконаня протягом 2 дня</p>
            </Flex>
            <Flex align="center">
              <Icon name="ok-rounded-white" />
              <p>100 % успішність</p>
            </Flex>
            <Flex align="center">
              <Icon name="ok-rounded-white" />
              <p>
                Швидко, легко та з max конфіденційністю через захищені системи
              </p>
            </Flex>
          </div>
        </Flex>
        <Flex vertical={true} justify="space-between">
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
