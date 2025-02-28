import { Flex } from "antd";
import "./style.scss";

export default function CompanySubDescriptionBlock({title, description, imageRef}) {
  return <Flex className="company-sub-description-block" justify="space-between">
    <div>
      {title}
      <p className="description">{description}</p>
    </div>
    <div className="image-wrapper">
      <img src={imageRef} alt="Company view"/>
    </div>
  </Flex>
}