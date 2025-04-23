import { Flex } from "antd";
import { useTranslation } from "react-i18next";
import "./style.scss";
import belizNature from "../../assets/images/belizNature.png";
import Faq from "../../components/faq/Faq";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import SecondaryDescriptionGrid from "../../components/secondaryDescriptionGrid/SecondaryDescriptionGrid";
import CountryTarrifList from "../../components/countryTarrifList/CountryTarrifList";
import { COMPANY_REGISTRATION_ROUTE } from "../../routes/routes";

export default function BelizeCompany() {
  const {t} = useTranslation();
  return (
    <section className="page-content-wrapper belize-company-page-wrapper">
      <Flex
        align="cente r"
        justify="flex-end"
        className="belize-company-header"
      >
        <Flex vertical={true} align="flex-start" className="header-wrapper">
          <p className="title">{t("belize_company_1")}</p>
          <p className="title second">
            {t("belize_company_2")}<span className="selected-text">LionsInLaw</span>
          </p>
          <p className="description">
            {t("belize_company_3")}
          </p>
        </Flex>
      </Flex>
      <CompanySubDescriptionBlock
        description={t("belize_company_5")}
        imageRef={belizNature}
        title={
          <p className="title">
            {t("belize_company_4")}
          </p>
        }
        hasShadow={true}
      />
      <SecondaryDescriptionGrid
        businessDescr={t("belize_company_13")}
        financialDescr={t("belize_company_11")}
        riskDescr={t("belize_company_15")}
        subDescr={t("belize_company_7")}
        taxesDescr={t("belize_company_11")}
        title={
          <Flex className="title" vertical={true}>
            <p>{t("belize_company_6")}</p>
            <p className="selected-text">{t("belize_company_6.1")}</p>
            <p className="company-name">LionsInLaw</p>
          </Flex>
        }
      />
      <ConsultingOffshoreComp
        title={t("mpcexoc_1")}
        description={t("mpcexoc_8")}
        linkLabel={t("mpcexoc_9")}
        linkRoute={`${COMPANY_REGISTRATION_ROUTE}/belize`}
      >
        <CountryTarrifList />
      </ConsultingOffshoreComp>
      <Faq />
    </section>
  );
}
