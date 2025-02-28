import { Flex } from "antd";
import "./style.scss";
import Icon from "../../components/iconComponent/Icon";

export default function IrelandCompany() {
  return <section className="ireland-company-wrapper">
    <section className="ireland-company-header">
      <Flex>
        <Flex vertical={true}>
          <p className="sub-title">Започаткуйте свою офшорну компанію в Ірландії з </p>
          <p className="title">LionsInLaw</p>
          <p className="description">Ефективні рішення для міжнародного бізнесу та надійна підтримка на кожному кроці</p>
        </Flex>
        <div className="secondary-banner"></div>
      </Flex>
      <Flex>
        <div className="mountain-banner"></div>
        <div>
          <p className="description">
            Ефективне обслуговування вашої офшорної компанії на 1 або 2 роки з <span className="selected-text"> LionsInLaw</span>
          </p>
          <Flex align="center" justify="space-between">
            <span>Тарифи</span>
            <Icon name="tariff" />
          </Flex>
        </div>
      </Flex>
    </section>
  </section>
}