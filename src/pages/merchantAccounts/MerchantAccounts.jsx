import { Flex } from "antd";
import { useTranslation } from "react-i18next";
import "./style.scss";
import LinkComponent from "../../components/linkComponent/LinkComponent";
import Icon from "../../components/iconComponent/Icon";
import lionRectangles from "../../assets/images/lionRectangles.png";
import bannerImage from "../../assets/images/traidingMarkBanner.png";
import library from "../../assets/images/library.png";
import DescriptionBlock from "../../components/descriptionBlock/DescriptionBlock";
import { CONTACTS_ROUTE } from "../../routes/routes";

export default function MerchantAccounts() {
  const {t} = useTranslation();
  return (
    <section className="page-content-wrapper merchant-accounts-page">
      <Flex
        justify="space-between"
        vertical={true}
        className="merchant-accounts-header"
      >
        <Flex vertical={true} className="title-wrapper" align="flex-start">
          <p className="title">LionsInLaw</p>
          <p className="description">
            {t("merchant_account_2")}
          </p>
          <p className="sub-description">
            {t("merchant_account_3")}
          </p>
          <LinkComponent
            linkLabel={t("merchant_account_4")}
            linkValue={CONTACTS_ROUTE}
          />
        </Flex>
        <div className="banner-image">
          <img src={lionRectangles} alt="LawInLions lion symbol" />
        </div>
      </Flex>
      <Flex className="spec-solutions">
        <Flex vertical={true} justify="space-between" className="info-wrapper">
          <p className="title">
            {t("merchant_account_5")}
          </p>
          <p className="description">
            {t("merchant_account_6")}
            <span className="selected-text">Lionsinlaw</span>{t("merchant_account_6.1")}
          </p>
        </Flex>
        <div className="image-wrapper">
          <img src={library} alt="Library" />
        </div>
      </Flex>
      <div className="choose-merchant-account">
        <div className="title-block">
          <p className="title">
            {t("merchant_account_7")}
          </p>
        </div>
        <Flex
          className="phone-block-wrapper"
          align="flex-end"
          justify="flex-end"
        >
          <Flex className="contact-wrapper" vertical={true}>
            <Flex className="contact-wrapper-header" align="center">
              <Icon name="agree-hands" />
              <span>{t("merchant_account_18")}</span>
            </Flex>
            <LinkComponent
              linkLabel={t("merchant_account_19")}
              linkValue={CONTACTS_ROUTE}
            />
          </Flex>
        </Flex>
        <DescriptionBlock
          description={t("merchant_account_9")}
          title={t("merchant_account_8")}
        />
        <DescriptionBlock
          description={t("merchant_account_11")}
          title={t("merchant_account_10")}
          isDark={true}
          blockClass="security-block"
        />
        <DescriptionBlock
          description={t("merchant_account_13")}
          title={t("merchant_account_12")}
          blockClass="experiance-block"
        />
        <DescriptionBlock
          description={t("merchant_account_15")}
          title={t("merchant_account_14")}
          isDark={true}
        />
        <DescriptionBlock
          description={t("merchant_account_17")}
          title={t("merchant_account_16")}
        />
      </div>
      <div className="empowerment-wrapper">
        <div>
          <p className="title">
            {t("merchant_account_20")}
          </p>
          <p className="description">
            {t("merchant_account_21")}
          </p>
          <LinkComponent
            linkLabel={t("merchant_account_22")}
            linkValue={CONTACTS_ROUTE}
          />
        </div>
      </div>
    </section>
  );
}
