import { Flex } from "antd";
import "./style.scss";
import MoreLink from "../moreLink/MoreLink";

export default function DescriptionBlock({
  title,
  description,
  isDark = false,
  blockClass = "",
}) {
  return (
    <Flex
      vertical={true}
      justify="space-between"
      align="start"
      className={`description-block ${isDark ? "dark-bg" : ""} ${blockClass}`}
    >
      <div className="title">{title}</div>
      <div className="description">
        <span>{description}</span>
      </div>
    </Flex>
  );
}
