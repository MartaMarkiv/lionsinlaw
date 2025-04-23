import { Flex } from "antd";
import { useTranslation } from "react-i18next";
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
  const {t} = useTranslation();
  return (
    <Flex justify="space-between" className="secondary-description-grid">
      <div className="grid-container grid-wrapper">
        <Flex vertical={true} className="taxes-wrapper">
          <Flex className="cell-header" align="center">
            <div className="icon-wrapper">
              <Icon name="bank-dollar" />
            </div>
            <span>{t("spain_company_6")}</span>
          </Flex>
          <p>{taxesDescr}</p>
        </Flex>
        <Flex vertical={true} className="dark-cell financial-block">
          <Flex className="cell-header" align="center">
            <div className="icon-wrapper">
              <Icon name="libra" />
            </div>
            <span>{t("spain_company_8")}</span>
          </Flex>
          <p>{financialDescr}</p>
        </Flex>
        <Flex vertical={true} className="dark-cell business-block">
          <Flex className="cell-header" align="center">
            <div className="icon-wrapper">
              <Icon name="business" />
            </div>
            <span>{t("spain_company_10")}</span>
          </Flex>
          <p>{businessDescr}</p>
        </Flex>
        <Flex vertical={true} className="risk-wrapper">
          <Flex className="cell-header" align="center">
            <div className="icon-wrapper">
              <Icon name="attention" />
            </div>
            <span>{t("spain_company_12")}</span>
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
