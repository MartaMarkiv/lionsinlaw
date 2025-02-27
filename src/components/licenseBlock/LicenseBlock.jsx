import { Flex } from "antd";
import "./style.scss";
import LinkComponent from "../linkComponent/LinkComponent";

export default function LicenseBlock({
  imgInst,
  title,
  description,
  linkRef,
  isRevert = false,
}) {
  return (
    <Flex
      justify="space-between"
      className={`license-block-wrapper ${isRevert && "revert"}`}
      gap="middle"
    >
      <div className="image-wrapper">
        <img src={imgInst} alt="LionsInLaw license" />
      </div>
      <Flex
        align="flex-start"
        justify="space-between"
        vertical={true}
        className="license-block-info"
      >
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <LinkComponent linkLabel="Детально" linkValue={linkRef} />
      </Flex>
    </Flex>
  );
}
