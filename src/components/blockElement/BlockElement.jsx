import { Flex } from "antd";
import "./style.scss";
import MoreLink from "../moreLink/MoreLink";

export default function BlockElement({
  title,
  description,
  linkValue,
  isDark = false,
  blockClass = ""
}) {
  return (
    <Flex
      vertical={true}
      justify="space-between"
      align="start"
      className={`block-element ${isDark ? "dark-bg" : ""} ${blockClass}`}
    >
      <div className="title">{title}</div>
      <div className="description">
        <span>{description}</span>
        <div className="description-bg"/>
      </div>
      <MoreLink linkValue={linkValue} theme={isDark ? "dark" : "light"} />
    </Flex>
  );
}
