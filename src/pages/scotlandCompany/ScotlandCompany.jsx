import { Flex } from "antd";
import { useTranslation } from "react-i18next";
import "./style.scss";
import scotlandNature from "../../assets/images/ScotlandNature.png";
import scotlandTaxes from "../../assets/images/ScotlandTaxes.png";
import scotlandTeam from "../../assets/images/ScotlandTeam.png";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import CompanyDescriptionGrid from "../../components/companyDescriptionGrid/CompanyDescriptionGrid";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import Faq from "../../components/faq/Faq";
import CountryTarrifList from "../../components/countryTarrifList/CountryTarrifList";
import { COMPANY_REGISTRATION_ROUTE } from "../../routes/routes";

export default function ScotlandCompany() {
  const {t} = useTranslation();
  return (
    <section className="page-content-wrapper scotland-company-page">
      <Flex
        className="scotland-header"
        justify="space-between"
        align="flex-end"
      >
        <Flex vertical={true}>
          <p className="title">{t("scotland_company_1")}</p>
          <p className="sub-title">{t("scotland_company_1.1")}</p>
          <p className="name">LionsInLaw</p>
          <p className="description">
            "{t("scotland_company_3")}"
          </p>
        </Flex>
        <div className="scotland-image" />
      </Flex>
      <CompanySubDescriptionBlock
        title={
          <p className="title">
            {t("scotland_company_4")}
            <span className="selected-text">{t("scotland_company_2")}</span>{t("scotland_company_4.1")}<span className="selected-text"> LionsInLaw</span>
          </p>
        }
        description={t("scotland_company_5")}
        imageRef={scotlandNature}
      />
      <CompanyDescriptionGrid
        businessDescr={t("scotland_company_15")}
        businessImage={scotlandTeam}
        financialDescr={t("scotland_company_11")}
        imageRef={scotlandTaxes}
        riskDescr={t("scotland_company_13")}
        subDescr={t("scotland_company_9")}
        taxesDescr={t("scotland_company_7")}
        title={t("scotland_company_8")}
      />
      <ConsultingOffshoreComp
        title={t("mpcexoc_1")}
        description={t("mpcexoc_8")}
        linkLabel={t("mpcexoc_9")}
        linkRoute={`${COMPANY_REGISTRATION_ROUTE}/scotland`}
      >
        <CountryTarrifList />
      </ConsultingOffshoreComp>
      <Faq />
    </section>
  );
}
