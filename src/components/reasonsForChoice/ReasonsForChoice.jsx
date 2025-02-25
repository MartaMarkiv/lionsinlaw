import { Flex } from "antd";
import "./style.scss";
import Icon from "../iconComponent/Icon";

export default function ReasonsForChoice() {
  return <div className="choice-reasons-wrapper">
    <p className="title">
      Чому обрати LionsInLaw
    </p>
    <p className="description">
      Професійні послуги з реєстрації компаній та експертна підтримка на кожному етапі
    </p>
    <Flex align="start" justify="space-between" className="reasons-list">
      <Flex vertical={true} align="center" justify="space-between" className="reason-item">
        <Icon name="individual-choise" />
        <p className="title">Індивідуальні рішення</p>
        <p className="description">
        ми налаштовуємо наші послуги відповідно до ваших конкретних бізнес-цілей і вимог до відповідності, забезпечуючи ефективні та дієві рішення.
        </p>
      </Flex>
      <Flex vertical={true} align="center" justify="space-between" className="reason-item">
        <Icon name="komplex" />
        <p className="title">Комплексна підтримка</p>
        <p className="description">
        від початкової консультації до постійного управління відповідністю наша спеціальна команда надає постійну підтримку для задоволення ваших потреб, що постійно змінюються.
        </p>
      </Flex>
      <Flex vertical={true} align="center" justify="space-between" className="reason-item">
        <Icon name="expert" />
        <p className="title">Експертне керівництво</p>
        <p className="description">
        скористайтеся нашим багатим досвідом і знаннями щодо створення офшорних компаній і структурування міжнародного бізнесу.
        </p>
      </Flex>
    </Flex>
  </div>
}