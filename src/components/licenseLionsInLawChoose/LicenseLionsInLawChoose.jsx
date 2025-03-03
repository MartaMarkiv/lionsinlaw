import { Flex } from "antd";
import "./style.scss";
import Icon from "../iconComponent/Icon";

export default function LicenseLionsInLawChoose({
  blockType = "crypto",
  description,
}) {
  return (
    <div className="license-choose-wrapper">
      <Flex vertical={true} align="flex-end">
        <p className="main-title in-end">
          Чому Обрати <span className="selected-text">LinonsInLaw</span>
        </p>
        <p className="main-title centered">
          {blockType === "crypto"
            ? "для Ліцензування Криптовалюти?"
            : "для Фінансового Ліцензування?"}
        </p>
      </Flex>
      <p className="description">{description}</p>
      <Flex justify="space-between">
        <Flex
          vertical={true}
          className="license-advantages-item"
          align="center"
        >
          <Icon name="legal-expertise" />
          <p className="title">Юридична експертиза:</p>
          <p className="description">
            Наша команда – це досвідчені юристи з експертизою у сфері
            блокчейн-технологій та регулювання криптовалют у різних юрисдикціях
          </p>
        </Flex>
        <Flex
          vertical={true}
          className="license-advantages-item"
          align="center"
        >
          <Icon name="global-network" />
          <p className="title">Глобальна мережа</p>
          <p className="description">
            Lionsinlaw використовує свою мережу та партнерські зв'язки для
            ефективного отримання криптовалютних ліцензій по всьому світу.
          </p>
        </Flex>
        <Flex
          vertical={true}
          className="license-advantages-item"
          align="center"
        >
          <Icon name="ind-solutions" />
          <p className="title">Індивідуальні рішення</p>
          <p className="description">
            Ми розуміємо унікальні виклики сектору криптовалют і пропонуємо
            індивідуальні рішення, які відповідають вашим конкретним
            бізнес-цілям і нормативним вимогам.
          </p>
        </Flex>
      </Flex>
    </div>
  );
}
