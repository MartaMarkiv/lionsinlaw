import { Flex } from "antd";
import Icon from "../iconComponent/Icon";

export default function CountryTarrifList() {
  return (
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
        <p>Швидко, легко та з max конфіденційністю через захищені системи</p>
      </Flex>
    </>
  );
}
