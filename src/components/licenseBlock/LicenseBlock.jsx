import { Flex } from "antd";
import { useTranslation } from "react-i18next";
import "./style.scss";
import LinkComponent from "../linkComponent/LinkComponent";

export default function LicenseBlock({
  imgInst,
  title,
  description,
  linkRef,
  isRevert = false,
}) {
  const { t } = useTranslation();
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
        <LinkComponent
          linkLabel={t("cryptoconsulting_20")}
          linkValue={linkRef}
        />
      </Flex>
    </Flex>
  );
}
