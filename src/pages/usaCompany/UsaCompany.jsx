import "./style.scss";
import { useTranslation } from "react-i18next";
import usaNature from "../../assets/images/usaNature.png";
import usaTaxes from "../../assets/images/usaTaxes.png";
import usaWhiteHouse from "../../assets/images/usaWhiteHouse.png";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import CompanyDescriptionGrid from "../../components/companyDescriptionGrid/CompanyDescriptionGrid";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import Faq from "../../components/faq/Faq";
import CountryTarrifList from "../../components/countryTarrifList/CountryTarrifList";
import { COMPANY_REGISTRATION_ROUTE } from "../../routes/routes";

export default function UsaCompany() {
  const { t } = useTranslation();
  return (
    <section className="page-content-wrapper usa-company-wrapper">
      <div className="usa-company-header">
        <div className="bg-block"></div>
        <p className="title">{t("usa_company_1")}</p>
        <p className="description">{t("usa_company_2")}</p>
        <div className="usa-banner" />
      </div>
      <CompanySubDescriptionBlock
        title={<p className="title">{t("usa_company_3")}</p>}
        description={t("usa_company_4")}
        imageRef={usaNature}
      />
      <CompanyDescriptionGrid
        businessDescr={t("usa_company_14")}
        businessImage={usaWhiteHouse}
        financialDescr={t("usa_company_10")}
        imageRef={usaTaxes}
        riskDescr={t("usa_company_12")}
        subDescr={t("usa_company_8")}
        taxesDescr={t("usa_company_6")}
        title={t("usa_company_7")}
      />
      <ConsultingOffshoreComp
        title={t("mpcexoc_1")}
        description={t("mpcexoc_8")}
        linkLabel={t("mpcexoc_9")}
        linkRoute={`${COMPANY_REGISTRATION_ROUTE}/usa`}
      >
        <CountryTarrifList />
      </ConsultingOffshoreComp>
      <Faq />
    </section>
  );
}
