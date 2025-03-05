import { Flex } from "antd";
import "./style.scss";
import Icon from "../iconComponent/Icon";
import LinkComponent from "../linkComponent/LinkComponent";

export default function ConsultingOffshoreComp({
  title,
  description,
  linkLabel,
  linkRoute = "/",
  showPrice = true,
  children,
}) {
  return (
    <div className="consulting-offshore-comp-wrapper">
      <p className="header-block">{title}</p>
      <Flex justify="space-between">
        <div>
          <Flex
            vertical={true}
            align="center"
            justify="center"
            className="time-block"
          >
            <p>Підтримка</p>
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
