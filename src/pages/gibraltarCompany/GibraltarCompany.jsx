import "./style.scss";
import { useTranslation } from "react-i18next";
import gibraltarNature from "../../assets/images/GibraltarNature.png";
import gibraltarTaxes from "../../assets/images/GibraltarTaxes.png";
import gibraltarBuildings from "../../assets/images/GibraltarBuildings.png";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import CompanyDescriptionGrid from "../../components/companyDescriptionGrid/CompanyDescriptionGrid";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import Faq from "../../components/faq/Faq";
import { Flex } from "antd";
import CountryTarrifList from "../../components/countryTarrifList/CountryTarrifList";

export default function GibraltarCompany() {
  const { t } = useTranslation();
  return (
    <section className="page-content-wrapper gibraltar-company-wrapper">
      <Flex
        vertical={true}
        align="flex-end"
        className="gibraltar-company-header"
      >
        <p className="title">
          <span>{t("gibraltar_1")}</span>
          <span className="selected-text">LionsInLaw</span>
        </p>
        <p className="description">{t("gibraltar_2")}</p>
      </Flex>
      <CompanySubDescriptionBlock
        title={<p className="title">{t("gibraltar_3")}</p>}
        description={t("gibraltar_4")}
        imageRef={gibraltarNature}
      />
      <CompanyDescriptionGrid
        businessDescr={t("gibraltar_14")}
        businessImage={gibraltarBuildings}
        financialDescr={t("gibraltar_9")}
        imageRef={gibraltarTaxes}
        riskDescr={t("gibraltar_12")}
        subDescr={t("gibraltar_10")}
        title={t("gibraltar_5")}
        taxesDescr={t("gibraltar_7")}
      />
      <ConsultingOffshoreComp
        title={t("mpcexoc_1")}
        description={t("mpcexoc_8")}
        linkLabel={t("mpcexoc_9")}
      >
        <CountryTarrifList />
      </ConsultingOffshoreComp>
      <Faq />
    </section>
  );
}
