import "./style.scss";
import { Flex } from "antd";
import { useTranslation } from "react-i18next";
import LinkComponent from "../../components/linkComponent/LinkComponent";
import Icon from "../../components/iconComponent/Icon";
import clientsGroup from "../../assets/images/clientsGroup.png";
import bannerImage from "../../assets/images/traidingMarkBanner.png";
import traidingMarkExp from "../../assets/images/traidingMarkExp.png";
import members from "../../assets/images/Members.png";
import lawSignet from "../../assets/images/lawSignet.png";
import DescriptionBlock from "../../components/descriptionBlock/DescriptionBlock";
import Faq from "../../components/faq/Faq";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import { CONTACTS_ROUTE } from "../../routes/routes";

export default function TrademarkRegistration() {
  const { t } = useTranslation();
  return (
    <section className="page-content-wrapper trademark-registration-page">
      <Flex justify="space-between" className="trademark-registration-header">
        <div className="title-wrapper">
          <p className="title">LionsInLaw</p>
          <p className="description">{t("trademark_registration_3")}</p>
          <LinkComponent
            linkLabel={t("trademark_registration_4")}
            linkValue="/"
          />
          <div className="partners-wrapper">
            <p className="partners-title">{t("trademark_registration_7")}</p>
            <Flex align="center" justify="space-between">
              <Icon name="hitech" />
              <Icon name="devwise" />
              <Icon name="invert" />
            </Flex>
          </div>
        </div>
        <Flex
          className="info-wrapper"
          vertical={true}
          align="flex-end"
          justify="space-between"
        >
          <p className="sub-description">{t("trademark_registration_1")}</p>
          <div className="time-info-wrapper">
            <Flex align="flex-start" className="time-wrapper" vertical={true}>
              <span className="count">1.45 K</span>
              <span className="month">{t("trademark_registration_5")}</span>
            </Flex>
            <p>{t("trademark_registration_6")}</p>
          </div>
          <Flex className="clients-wapper" align="center">
            <div className="image-wrapper">
              <img src={clientsGroup} alt="Clients" />
            </div>
            <div>
              <Flex align="center">
                <Icon name="smile" />
                <span className="count">100+</span>
              </Flex>
              <p>{t("trademark_registration_8")}</p>
            </div>
          </Flex>
        </Flex>
        <div className="banner-image">
          <img src={bannerImage} alt="Trademark banner" />
        </div>
      </Flex>
      <Flex className="trademark-experiance">
        <Flex vertical={true} justify="space-between" className="info-wrapper">
          <div className="experiance-info-wrapper">
            <p className="title">{t("trademark_registration_9")}</p>
            <p className="description">{t("trademark_registration_10")}</p>
          </div>
          <Flex justify="space-between" className="experiance-items-wraper">
            <Flex
              vertical={true}
              justify="space-between"
              align="center"
              className="experiance-item"
            >
              <Icon name="global-security" />
              <p className="title">{t("trademark_registration_11")}</p>
              <p className="description">{t("trademark_registration_12")}</p>
            </Flex>
            <Flex
              vertical={true}
              justify="space-between"
              align="center"
              className="experiance-item"
            >
              <Icon name="effective-registration" />
              <p className="title">{t("trademark_registration_13")}</p>
              <p className="description">{t("trademark_registration_14")}</p>
            </Flex>
          </Flex>
        </Flex>
        <div className="image-wrapper">
          <img src={traidingMarkExp} alt="Law blocks" />
        </div>
      </Flex>
      <div className="choose-trademarks">
        <div className="title-block">
          <p className="title">{t("trademark_registration_15")}</p>
          <p className="description">{t("trademark_registration_16")}</p>
        </div>
        <DescriptionBlock
          description={t("trademark_registration_18")}
          title={`${t("trademark_registration_17")}:`}
        />
        <DescriptionBlock
          description={t("trademark_registration_20")}
          title={`${t("trademark_registration_19")}:`}
          isDark={true}
          blockClass="block-1"
        />
        <DescriptionBlock
          description={t("trademark_registration_22")}
          title={`${t("trademark_registration_21")}:`}
          isDark={true}
          blockClass="block-2"
        />
        <DescriptionBlock
          description={t("trademark_registration_24")}
          title={`${t("trademark_registration_23")}:`}
        />
        <div className="image-wrapper-block">
          <img src={lawSignet} alt="Law signet" />
        </div>
      </div>
      <ConsultingOffshoreComp
        title={t("trademark_registration_25")}
        showPrice={false}
        description={t("trademark_registration_32")}
        linkLabel={t("trademark_registration_33")}
        linkRoute={CONTACTS_ROUTE}
      >
        <Flex align="center" className="tariff-item">
          <Icon name="ok-rounded-white" />
          <p>
            <span className="selected-text">
              {t("trademark_registration_27")}
            </span>{" "}
            {t("trademark_registration_28")}
          </p>
        </Flex>
        <Flex className="tariff-item">
          <Icon name="ok-rounded-white" />
          <p>
            <span className="selected-text">
              {t("trademark_registration_29")}
            </span>{" "}
            {t("trademark_registration_30")}
          </p>
        </Flex>
      </ConsultingOffshoreComp>
      <div className="brand-security-wrapper">
        <p className="title">
          {t("trademark_registration_34")}{" "}
          <span className="selected-text">LionsInLaw</span>
        </p>
        <Flex className="brand-security-wrapper-info">
          <Flex
            vertical={true}
            justify="space-between"
            className="info-description"
            align="flex-start"
          >
            <p className="description">{t("trademark_registration_35")}</p>
            <LinkComponent
              linkLabel={t("trademark_registration_36")}
              linkValue={CONTACTS_ROUTE}
            />
          </Flex>
          <div className="image-wrapper">
            <img src={members} alt="Brand security clients" />
          </div>
        </Flex>
      </div>
      <Faq />
    </section>
  );
}
