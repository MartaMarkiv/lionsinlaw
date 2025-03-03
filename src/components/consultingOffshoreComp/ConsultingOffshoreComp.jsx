import { Flex } from "antd";
import "./style.scss";
import Icon from "../iconComponent/Icon";
import LinkComponent from "../linkComponent/LinkComponent";

export default function ConsultingOffshoreComp({
  title,
  isTrademark = false,
  description,
  linkLabel,
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
          <Flex align="center">
            <span className="count">$0</span>
            <span>/ Місяць</span>
          </Flex>
          <div className="tariff-items-wrapper">
            {isTrademark ? (
              <>
                <Flex align="center" className="tariff-item">
                  <Icon name="ok-rounded-white" />
                  <p>
                    <span className="selected-text">Для Стартапів:</span>{" "}
                    Захистіть свій новий бренд з самого початку.
                  </p>
                </Flex>
                <Flex className="tariff-item">
                  <Icon name="ok-rounded-white" />
                  <p>
                    <span className="selected-text">Для Корпорацій:</span>{" "}
                    Розширте охоплення та захистіть свою продукцію на нових
                    ринках.
                  </p>
                </Flex>
              </>
            ) : (
              <>
                <Flex align="center" className="tariff-item">
                  <Icon name="ok-rounded-white" />
                  <p>Виконаня протягом 2 дня</p>
                </Flex>
                <Flex className="tariff-item">
                  <Icon name="ok-rounded-white" />
                  <p>100 % успішність</p>
                </Flex>
                <Flex className="tariff-item">
                  <Icon name="ok-rounded-white" />
                  <p>
                    Швидко, легко та з max конфіденційністю через захищені
                    системи
                  </p>
                </Flex>
              </>
            )}
          </div>
        </Flex>
        <Flex
          vertical={true}
          justify="space-between"
          align="flex-start"
          className="register-company-wrapper"
        >
          <p className="title">LionsInLaw</p>
          <p className="description">{description}</p>
          <LinkComponent linkLabel={linkLabel} linkValue={"/"} />
        </Flex>
      </Flex>
    </div>
  );
}
