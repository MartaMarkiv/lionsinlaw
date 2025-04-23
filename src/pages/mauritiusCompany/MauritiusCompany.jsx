import Icon from "../../components/iconComponent/Icon";
import { useTranslation } from "react-i18next";
import "./style.scss";
import mauritiusNature from "../../assets/images/mauritiusNature.png";
import mauritiusLibra from "../../assets/images/mauritiusLibra.png";
import mauritiusTaxes from "../../assets/images/mauritiusTaxes.png";
import mauritiusBusiness from "../../assets/images/mauritiusBusiness.png";
import { Button, Flex } from "antd";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import CompanyDescriptionGrid from "../../components/companyDescriptionGrid/CompanyDescriptionGrid";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import CountryTarrifList from "../../components/countryTarrifList/CountryTarrifList";
import { COMPANY_REGISTRATION_ROUTE } from "../../routes/routes";
import Faq from "../../components/faq/Faq";

export default function MauritiusCompany() {
  const {t} = useTranslation();
  return (
    <section className="page-content-wrapper mauritius-page-wrapper">
      <Flex className="header-info-wrapper">
        <Flex vertical={true} className="data-info-wrapper">
          <p className="title">
            {t("mauricius_1")}
          </p>
          <p className="law-name">LionsInLaw</p>
          <p className="description">
            {t("mauricius_2")}
          </p>
        </Flex>
        <div className="image-wrapper" />
      </Flex>
      <Flex className="tariff-header-wrapper">
        <img src={mauritiusNature} alt="" />
        <Flex vertical={true} className="tariff-info" justify="center">
          <p className="title">
            {t("mauricius_3")}
            <span className="red-text">LionsInLaw</span>
          </p>
          <Flex className="tariff-btn" justify="space-between" align="center">
            <span>{t("mauricius_4")}</span>
            <Button icon={<Icon name="tariff" />} />
          </Flex>
        </Flex>
      </Flex>
      <CompanySubDescriptionBlock
        description={t("mauricius_6")}
        imageRef={mauritiusLibra}
        hasShadow={false}
        title={
          <p className="title">
            <span className="selected-text">{t("mauricius_5")}</span>{t("mauricius_5.1")}
          </p>
        }
      />
      <CompanyDescriptionGrid
        businessDescr={t("mauricius_16")}
        businessImage={mauritiusBusiness}
        imageRef={mauritiusTaxes}
        financialDescr={t("mauricius_12")}
        subDescr={t("mauricius_10")}
        riskDescr={t("mauricius_14")}
        taxesDescr={t("mauricius_9")}
        title={t("mauricius_7")}
        company={t("mauricius_7.1")}
      />
      <ConsultingOffshoreComp
        description={t("mpcexoc_8")}
        linkLabel={t("mpcexoc_9")}
        title={t("mpcexoc_1")}
        linkRoute={`${COMPANY_REGISTRATION_ROUTE}/mauritius`}
      >
        <CountryTarrifList />
      </ConsultingOffshoreComp>
      <Faq />
    </section>
  );
}
