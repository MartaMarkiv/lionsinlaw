import { Flex } from "antd";
import "./style.scss";
import { useTranslation } from "react-i18next";
import LinkComponent from "../linkComponent/LinkComponent";

export default function ConsultingOffshoreComp({
  title,
  description,
  linkLabel,
  linkRoute = "/",
  showPrice = true,
  children,
}) {

  const {t} = useTranslation();

  return (
    <div className="consulting-offshore-comp-wrapper">
      <p className="header-block">{title}</p>
      <Flex justify="space-between">
        <div className="time-block-wrapper">
          <Flex
            vertical={true}
            align="center"
            justify="center"
            className="time-block"
          >
            <p>{t("trademark_registration_26")}</p>
            <Flex>
              <span className="hours-value">24/</span>
              <span className="day-value">7</span>
            </Flex>
          </Flex>
        </div>
        <Flex vertical={true} className="tariff-wrapper">
          {showPrice && (
            <Flex align="center">
              <span className="count">$0</span>
              <span>/ Місяць</span>
            </Flex>
          )}
          <div className="tariff-items-wrapper">{children}</div>
        </Flex>
        <Flex
          vertical={true}
          justify="space-between"
          align="flex-start"
          className="register-company-wrapper"
        >
          <p className="title">LionsInLaw</p>
          <p className="description">{description}</p>
          <LinkComponent linkLabel={linkLabel} linkValue={linkRoute} />
        </Flex>
      </Flex>
    </div>
  );
}
