import "./style.scss";
import { useTranslation } from "react-i18next";
import polandNature from "../../assets/images/polandNature.png";
import polandTaxes from "../../assets/images/polandTaxes.png";
import polandBuilding from "../../assets/images/polandBuilding.png";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import CompanyDescriptionGrid from "../../components/companyDescriptionGrid/CompanyDescriptionGrid";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import Faq from "../../components/faq/Faq";
import CountryTarrifList from "../../components/countryTarrifList/CountryTarrifList";
import { COMPANY_REGISTRATION_ROUTE } from "../../routes/routes";

export default function PolandCompany() {
  const { t } = useTranslation();
  return (
    <section className="page-content-wrapper poland-company-wrapper">
      <section className="poland-company-header">
        <p className="title">{t("poland_company_1")}</p>
        <p className="description">{t("poland_company_2")}</p>
      </section>
      <CompanySubDescriptionBlock
        title={<p className="title">{t("poland_company_3")}</p>}
        description={t("poland_company_4")}
        imageRef={polandNature}
      />
      <CompanyDescriptionGrid
        businessDescr={t("poland_company_12")}
        businessImage={polandBuilding}
        financialDescr={t("poland_company_10")}
        imageRef={polandTaxes}
        riskDescr={t("poland_company_12")}
        subDescr={t("poland_company_8")}
        title={t("poland_company_7")}
        taxesDescr={t("poland_company_6")}
      />
      <ConsultingOffshoreComp
        title={t("mpcexoc_1")}
        description={t("mpcexoc_9")}
        linkLabel={t("mpcexoc_9")}
        linkRoute={`${COMPANY_REGISTRATION_ROUTE}/poland`}
      >
        <CountryTarrifList />
      </ConsultingOffshoreComp>
      <Faq />
    </section>
  );
}
