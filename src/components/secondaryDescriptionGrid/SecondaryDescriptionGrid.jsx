import { Flex } from "antd";
import "./style.scss";
import Icon from "../iconComponent/Icon";

export default function SecondaryDescriptionGrid({
  taxesDescr,
  title,
  subDescr,
  financialDescr,
  riskDescr,
  businessDescr,
}) {
  return (
    <Flex justify="space-between" className="secondary-description-grid">
      <div className="grid-container grid-wrapper">
        <Flex vertical={true} className="taxes-wrapper">
          <Flex className="cell-header" align="center">
            <div className="icon-wrapper">
              <Icon name="bank-dollar" />
            </div>
            <span>Оподаткування</span>
          </Flex>
          <p>{taxesDescr}</p>
        </Flex>
        <Flex vertical={true} className="dark-cell financial-block">
          <Flex className="cell-header" align="center">
            <div className="icon-wrapper">
              <Icon name="libra" />
            </div>
            <span>Регулювання фінансового сектору</span>
          </Flex>
          <p>{financialDescr}</p>
        </Flex>
        <Flex vertical={true} className="dark-cell business-block">
          <Flex className="cell-header" align="center">
            <div className="icon-wrapper">
              <Icon name="business" />
            </div>
            <span>Преференції для бізнесу</span>
          </Flex>
          <p>{businessDescr}</p>
        </Flex>
        <Flex vertical={true} className="risk-wrapper">
          <Flex className="cell-header" align="center">
            <div className="icon-wrapper">
              <Icon name="attention" />
            </div>
            <span>Ризики і обмеження.</span>
          </Flex>
          <p>{riskDescr}</p>
        </Flex>
      </div>
      <Flex vertical={true} className="description-col">
        {title}
        <p className="description">{subDescr}</p>
      </Flex>
    </Flex>
  );
}
