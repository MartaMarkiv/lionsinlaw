import { Flex } from "antd";
import { useTranslation } from "react-i18next";
import Icon from "../iconComponent/Icon";

export default function CountryTarrifList() {
  const { t } = useTranslation();
  return (
    <>
      <Flex align="center" className="tariff-item">
        <Icon name="ok-rounded-white" />
        <p>{t("mpcexoc_5")}</p>
      </Flex>
      <Flex className="tariff-item">
        <Icon name="ok-rounded-white" />
        <p>{t("mpcexoc_6")}</p>
      </Flex>
      <Flex className="tariff-item">
        <Icon name="ok-rounded-white" />
        <p>{t("mpcexoc_7")}</p>
      </Flex>
    </>
  );
}
