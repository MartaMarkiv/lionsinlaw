import { Flex } from "antd";
import "./style.scss";

export default function CompanySubDescriptionBlock({
  title,
  description,
  imageRef,
}) {
  return (
    <Flex className="company-sub-description-block" justify="space-between">
      <Flex vertical={true}>
        {title}
        <p className="description">{description}</p>
      </Flex>
      <div className="image-wrapper">
        <img src={imageRef} alt="Company view" />
      </div>
    </Flex>
  );
}
