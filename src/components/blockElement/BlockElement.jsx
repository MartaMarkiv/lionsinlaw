import { Flex } from "antd";
import "./style.scss";
import MoreLink from "../moreLink/MoreLink";

export default function BlockElement({
  title,
  description,
  linkValue,
  isDark = false,
}) {
  return (
    <Flex
      vertical={true}
      justify="space-between"
      align="start"
      className={`block-element ${isDark ? "dark-bg" : ""}`}
    >
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <MoreLink linkValue={linkValue} theme={isDark ? "dark" : "light"} />
    </Flex>
  );
}
