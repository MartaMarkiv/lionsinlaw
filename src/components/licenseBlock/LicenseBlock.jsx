import { Flex } from "antd";
import "./style.scss";
import LinkComponent from "../linkComponent/LinkComponent";

export default function LicenseBlock({imgInst,title, description, linkRef, isRevert = false}) {
  return <Flex align="flex-start" justify="space-between" className={`license-block-wrapper ${isRevert && "revert"}`}>
    <div className="image-wrapper">
      <img src={imgInst} alt="LionsInLaw license" />
    </div>
    <Flex align="center" justify="space-between">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <LinkComponent linkLabel="Детально" linkValue={linkRef} />
    </Flex>
  </Flex>
}