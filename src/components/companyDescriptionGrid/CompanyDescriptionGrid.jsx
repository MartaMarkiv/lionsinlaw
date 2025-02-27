import { Flex } from "antd";
import "./style.scss";
import Icon from "../iconComponent/Icon";

export default function CompanyDescriptionGrid({taxesDescr, imageRef, title, company="", subDescr, financialDescr, riskDescr, businessDescr, businessImage}) {
  <section className="company-description-grid">
    <div className="taxes-wrapper">
      <Flex className="cell-header" align="center">
        <div className="icon-wrapper">
          <Icon name="" />
        </div>
        <span>Оподаткування</span>
      </Flex>
      <p>{taxesDescr}</p>
    </div>
    <div className="image-wrapper">
      <img src={imageRef} alt="Company's taxes" />
    </div>
    <Flex vertical={true} className="grid-main-col">
      <p className="title">{title}</p>
      {company !== "" && <p className="company-name">{company}</p>}
    </Flex>
    <Flex align="center" justify="center" className="sub-description">
      <p>{subDescr}</p>
    </Flex>
    <div className="dark-cell">
      <Flex className="cell-header" align="center">
        <div className="icon-wrapper">
          <Icon name="libra" />
        </div>
        <span>Регулювання фінансового сектору</span>
      </Flex>
      <p>{financialDescr}</p>
    </div>
    <div className="risk-wrapper">
      <Flex className="cell-header" align="center">
        <div className="icon-wrapper">
          <Icon name="attention" />
        </div>
        <span>Ризики і обмеження.</span>
      </Flex>
      <p>{riskDescr}</p>
    </div>
    <div className="dark-cell">
      <Flex className="cell-header" align="center">
        <div className="icon-wrapper">
          <Icon name="business" />
        </div>
        <span>Преференції для бізнесу</span>
      </Flex>
      <p>{riskDescr}</p>
    </div>
    <div className="image-wrapper">
      <img src={businessImage} alt="Business"/>
    </div>
  </section>
}