import { Flex } from "antd";
import "./style.scss";
import config from "../../config";
import Marquee from "react-fast-marquee";

export default function FlagsContainer() {
  return (
    // <Flex className="flags-container" justify="space-between">
    <Marquee className="flags-container">
      {config.nameFlags.map((itemFlag, index) => (
        <div key={`${index}:${itemFlag}`} className={`flag-item ${itemFlag}`} />
      ))}
    </Marquee>
    // </Flex>
  );
}
