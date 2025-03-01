import { Flex } from "antd";
import "./style.scss";
import Icon from "../iconComponent/Icon";

export default function CompanyDescriptionGrid({
  taxesDescr,
  imageRef,
  title,
  company = "",
  subDescr,
  financialDescr,
  riskDescr,
  businessDescr,
  businessImage,
}) {
  return (
    <section className="company-description-grid grid-wrapper">
      <Flex vertical={true} className="taxes-wrapper">
        <Flex className="cell-header" align="center">
          <div className="icon-wrapper">
            <Icon name="bank-dollar" />
          </div>
          <span>Оподаткування</span>
        </Flex>
        <p>{taxesDescr}</p>
      </Flex>
      <div className="image-wrapper image-taxes">
        <img src={imageRef} alt="Company's taxes" />
      </div>
      <Flex vertical={true} align="flex-end" className="grid-main-col">
        <p className="title">{title}</p>
        {company !== "" && <p className="company-name">{company}</p>}
      </Flex>
      <Flex align="center" justify="center" className="sub-description">
        <p>{subDescr}</p>
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
      <Flex vertical={true} className="risk-wrapper">
        <Flex className="cell-header" align="center">
          <div className="icon-wrapper">
            <Icon name="attention" />
          </div>
          <span>Ризики і обмеження.</span>
        </Flex>
        <p>{riskDescr}</p>
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
      <div className="image-wrapper">
        <img src={businessImage} alt="Business" />
      </div>
    </section>
  );
}
