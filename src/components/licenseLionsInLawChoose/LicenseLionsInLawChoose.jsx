import { Flex } from "antd";
import { useTranslation } from "react-i18next";
import "./style.scss";
import Icon from "../iconComponent/Icon";

export default function LicenseLionsInLawChoose({
  blockType = "crypto",
  description,
}) {
  const { t } = useTranslation();
  return (
    <div className="license-choose-wrapper">
      <Flex vertical={true} align="flex-end">
        <p className="main-title in-end">
          {t("cryptoconsulting_21")}
          <span className="selected-text">LinonsInLaw</span>
        </p>
        <p className="main-title centered">
          {blockType === "crypto"
            ? t("cryptoconsulting_21.1")
            : t("finance_license_16")}
        </p>
      </Flex>
      <p className="description">{description}</p>
      <Flex justify="space-between" className="items-wrapper">
        <Flex
          vertical={true}
          className="license-advantages-item"
          align="center"
        >
          <Icon name="legal-expertise" />
          <p className="title">{t("trademark_registration_17")}</p>
          <p className="description">{t("cryptoconsulting_24")}</p>
        </Flex>
        <Flex
          vertical={true}
          className="license-advantages-item"
          align="center"
        >
          <Icon name="global-network" />
          <p className="title">{t("cryptoconsulting_25")}</p>
          <p className="description">{t("cryptoconsulting_26")}</p>
        </Flex>
        <Flex
          vertical={true}
          className="license-advantages-item"
          align="center"
        >
          <Icon name="ind-solutions" />
          <p className="title">{t("cryptoconsulting_27")}</p>
          <p className="description">{t("cryptoconsulting_28")}</p>
        </Flex>
      </Flex>
    </div>
  );
}
