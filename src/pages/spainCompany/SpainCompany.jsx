import { Flex } from "antd";
import { useTranslation } from "react-i18next";
import "./style.scss";
import spainNature from "../../assets/images/spainNature.png";
import Faq from "../../components/faq/Faq";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import SecondaryDescriptionGrid from "../../components/secondaryDescriptionGrid/SecondaryDescriptionGrid";
import CountryTarrifList from "../../components/countryTarrifList/CountryTarrifList";
import { COMPANY_REGISTRATION_ROUTE } from "../../routes/routes";

export default function SpainCompany() {
  const {t} = useTranslation();
  return (
    <section className="page-content-wrapper spain-company-page-wrapper">
      <Flex align="center" justify="flex-end" className="spain-company-header">
        <div className="header-wrapper">
          <p className="title">
            {t("spain_company_1")}
          </p>
          <p className="description">
            {t("spain_company_2")}
          </p>
        </div>
        <div className="header-image" />
      </Flex>
      <CompanySubDescriptionBlock
        description={t("spain_company_4")}
        imageRef={spainNature}
        title={<p className="title">{t("spain_company_3")}</p>}
        hasShadow={true}
      />
      <SecondaryDescriptionGrid
        businessDescr={t("spain_company_11")}
        financialDescr={t("spain_company_9")}
        riskDescr={t("spain_company_13")}
        subDescr={t("spain_company_14")}
        taxesDescr={t("spain_company_7")}
        title={
          <p className="title">
            {t("spain_company_5")}
            <span className="selected-text">{t("spain_company_5.1")}</span>
          </p>
        }
      />
      <ConsultingOffshoreComp
        title={t("mpcexoc_1")}
        description={t("mpcexoc_8")}
        linkLabel={t("mpcexoc_9")}
        linkRoute={`${COMPANY_REGISTRATION_ROUTE}/spain`}
      >
        <CountryTarrifList />
      </ConsultingOffshoreComp>
      <Faq />
    </section>
  );
}
