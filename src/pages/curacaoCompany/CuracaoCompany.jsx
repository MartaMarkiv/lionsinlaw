import "./style.scss";
import { useTranslation } from "react-i18next";
import curacaoNature from "../../assets/images/curacaoNature.png";
import curacaoTaxes from "../../assets/images/curacaoTaxes.png";
import curacaoBuildings from "../../assets/images/curacaoBuildings.png";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import CompanyDescriptionGrid from "../../components/companyDescriptionGrid/CompanyDescriptionGrid";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import Faq from "../../components/faq/Faq";
import CountryTarrifList from "../../components/countryTarrifList/CountryTarrifList";
import { COMPANY_REGISTRATION_ROUTE } from "../../routes/routes";

export default function CuracaoCompany() {
  const { t } = useTranslation();
  return (
    <section className="page-content-wrapper curacao-company-wrapper">
      <section className="curacao-company-header">
        <p className="title">{t("curacao_company_1")}</p>
        <p className="description">{t("curacao_company_2")}</p>
      </section>
      <CompanySubDescriptionBlock
        title={<p className="title">{t("curacao_company_3")}</p>}
        description={t("curacao_company_4")}
        imageRef={curacaoNature}
      />
      <CompanyDescriptionGrid
        businessDescr={t("curacao_company_14")}
        businessImage={curacaoBuildings}
        financialDescr={t("curacao_company_10")}
        imageRef={curacaoTaxes}
        riskDescr={t("curacao_company_12")}
        subDescr={t("curacao_company_8")}
        title={t("curacao_company_7")}
        taxesDescr={t("curacao_company_8")}
      />
      <ConsultingOffshoreComp
        title={t("mpcexoc_1")}
        description={t("mpcexoc_8")}
        linkLabel={t("mpcexoc_9")}
        linkRoute={`${COMPANY_REGISTRATION_ROUTE}/kuracao`}
      >
        <CountryTarrifList />
      </ConsultingOffshoreComp>
      <Faq />
    </section>
  );
}
