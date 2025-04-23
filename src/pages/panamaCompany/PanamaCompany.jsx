import { Button, Flex } from "antd";
import { useTranslation } from "react-i18next";
import "./style.scss";
import panamaNature from "../../assets/images/panamaNature.png";
import Faq from "../../components/faq/Faq";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import SecondaryDescriptionGrid from "../../components/secondaryDescriptionGrid/SecondaryDescriptionGrid";
import Icon from "../../components/iconComponent/Icon";
import CountryTarrifList from "../../components/countryTarrifList/CountryTarrifList";
import { COMPANY_REGISTRATION_ROUTE } from "../../routes/routes";

export default function PanamaCompany() {
  const {t} = useTranslation();
  return (
    <section className="page-content-wrapper panama-company-page-wrapper">
      <Flex
        vertical={true}
        justify="space-between"
        align="flex-end"
        className="panama-company-header"
      >
        <Flex vertical={true} align="flex-start" className="header-wrapper">
          <p className="title">
            {t("panama_company_1")}
          </p>
          <p className="description">
            {t("panama_company_2")}
          </p>
        </Flex>
        <div className="tariff-block">
          <p>
            {t("panama_company_3")}
            <span className="selected-text">LionsInLaw</span>
          </p>
          <Flex
            className="tariff-select"
            justify="space-between"
            align="center"
          >
            <span>{t("belgium_company_7")}</span>
            <Button icon={<Icon name="tariff" />} />
          </Flex>
        </div>
      </Flex>
      <CompanySubDescriptionBlock
        description={t("panama_company_5")}
        imageRef={panamaNature}
        title={
          <p className="title">
            {t("panama_company_4")}
          </p>
        }
        hasShadow={true}
      />
      <SecondaryDescriptionGrid
        businessDescr={t("panama_company_12")}
        financialDescr={t("panama_company_10")}
        riskDescr={t("panama_company_14")}
        subDescr={t("panama_company_15")}
        taxesDescr={t("panama_company_8")}
        title={
          <p className="title">
            {t("panama_company_6")}
            <span className="selected-text">{t("panama_company_6.1")}</span>
          </p>
        }
      />
      <ConsultingOffshoreComp
        title={t("mpcexoc_1")}
        description={t("mpcexoc_8")}
        linkLabel={t("mpcexoc_9")}
        linkRoute={`${COMPANY_REGISTRATION_ROUTE}/panama`}
      >
        <CountryTarrifList />
      </ConsultingOffshoreComp>
      <Faq />
    </section>
  );
}
