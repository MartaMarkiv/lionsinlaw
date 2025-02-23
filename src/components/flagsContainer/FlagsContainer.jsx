import { Flex } from "antd";
import "./style.scss";
import config from "../../config";

export default function FlagsContainer() {
  return (
    <Flex className="flags-container" justify="space-between">
      {config.nameFlags.map((itemFlag, index) => (
        <div key={`${index}:${itemFlag}`} className={`flag-item ${itemFlag}`} />
      ))}
    </Flex>
  );
}
