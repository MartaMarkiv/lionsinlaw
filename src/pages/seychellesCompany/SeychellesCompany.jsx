import "./style.scss";
import { useTranslation } from "react-i18next";
import libraImage from "../../assets/images/seychellesLinbra.png";
import { Flex } from "antd";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import CountryTarrifList from "../../components/countryTarrifList/CountryTarrifList";
import { COMPANY_REGISTRATION_ROUTE } from "../../routes/routes";
import Faq from "../../components/faq/Faq";
import SecondaryDescriptionGrid from "../../components/secondaryDescriptionGrid/SecondaryDescriptionGrid";

export default function SeychellesCompany() {
  const {t} = useTranslation();
  return (
    <section className="page-content-wrapper seychelles-company-page-wrapper">
      <Flex className="seychelles-company-header" justify="space-between">
        <div>
          <p className="title">
            {t("seyshelles_1")}
          </p>
          <p className="description">
            {t("seyshelles_3")}
          </p>
        </div>
        <div className="banner" />
        <p className="law-name">LionsInLaw</p>
      </Flex>
      <CompanySubDescriptionBlock
        description={t("seyshelles_5")}
        imageRef={libraImage}
        title={
          <p className="title">
            {t("seyshelles_4")}
          </p>
        }
      />
      <SecondaryDescriptionGrid
        businessDescr={t("seyshelles_12")}
        financialDescr={t("seyshelles_10")}
        riskDescr={t("seyshelles_14")}
        taxesDescr={t("seyshelles_8")}
        subDescr={t("seyshelles_15")}
        title={
          <p className="title">
            {t("seyshelles_6")}
            <span className="selected-text">{t("seyshelles_6.1")}</span>
          </p>
        }
      />
      <ConsultingOffshoreComp
        description={t("england_company_16")}
        linkLabel={t("england_company_17")}
        title={t("mpcexoc_1")}
        linkRoute={`${COMPANY_REGISTRATION_ROUTE}/seychelles`}
      >
        <CountryTarrifList />
      </ConsultingOffshoreComp>
      <Faq />
    </section>
  );
}
