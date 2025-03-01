import { Flex } from "antd";
import "./style.scss";

export default function CompanySubDescriptionBlock({
  title,
  description,
  imageRef,
  hasShadow = true
}) {
  return (
    <Flex className="company-sub-description-block" justify="space-between">
      <Flex vertical={true}>
        {title}
        <p className="description">{description}</p>
      </Flex>
      <div className={`image-wrapper ${hasShadow && "has-shadow"}`}>
        <img src={imageRef} alt="Company view" />
        { hasShadow && <div className="shadow-block"/>}
      </div>
    </Flex>
  );
}
