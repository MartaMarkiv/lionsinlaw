import { Flex } from "antd";
import { useTranslation } from "react-i18next";
import "./style.scss";
import Icon from "../iconComponent/Icon";

export default function ReasonsForChoice() {
  const {t} = useTranslation();
  return (
    <div className="choice-reasons-wrapper">
      <p className="title">{t("jurisdictions_8")}</p>
      <p className="description">
        {t("jurisdictions_9")}
      </p>
      <Flex align="start" justify="space-between" className="reasons-list">
        <Flex
          vertical={true}
          align="center"
          justify="space-between"
          className="reason-item"
        >
          <Icon name="individual-choise" />
          <p className="title">{t("jurisdictions_10")}</p>
          <p className="description">
            {t("jurisdictions_11")}
          </p>
        </Flex>
        <Flex
          vertical={true}
          align="center"
          justify="space-between"
          className="reason-item"
        >
          <Icon name="komplex" />
          <p className="title">{t("jurisdictions_12")}</p>
          <p className="description">
            {t("jurisdictions_13")}
          </p>
        </Flex>
        <Flex
          vertical={true}
          align="center"
          justify="space-between"
          className="reason-item"
        >
          <Icon name="expert" />
          <p className="title">{t("jurisdictions_14")}</p>
          <p className="description">
            {t("jurisdictions_15")}
          </p>
        </Flex>
      </Flex>
    </div>
  );
}
