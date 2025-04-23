import { Button, Flex } from "antd";
import { useTranslation } from "react-i18next";
import "./style.scss";
import czechNature from "../../assets/images/CzechNature.png";
import Faq from "../../components/faq/Faq";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import SecondaryDescriptionGrid from "../../components/secondaryDescriptionGrid/SecondaryDescriptionGrid";
import Icon from "../../components/iconComponent/Icon";
import CountryTarrifList from "../../components/countryTarrifList/CountryTarrifList";
import { COMPANY_REGISTRATION_ROUTE } from "../../routes/routes";

export default function CzechCompany() {
  const {t} = useTranslation();
  return (
    <section className="page-content-wrapper czech-company-page-wrapper">
      <Flex vertical={true} justify="flex-end" className="czech-company-header">
        <p className="title">
          {t("czech_company_1")}
        </p>
        <Flex className="header-part" justify="space-between" align="start">
          <p className="description">
            {t("czech_company_2")}
          </p>
          <div className="tariff-block">
            <p>
              {t("czech_company_3")}
              <span className="selected-text">LionsInLaw</span>
            </p>
            <Flex
              className="tariff-select"
              justify="space-between"
              align="center"
            >
              <span>{t("czech_company_4")}</span>
              <Button icon={<Icon name="tariff" />} />
            </Flex>
          </div>
        </Flex>
      </Flex>
      <CompanySubDescriptionBlock
        description={t("czech_company_6")}
        imageRef={czechNature}
        title={
          <p className="title">
            {t("czech_company_5")}
          </p>
        }
        hasShadow={true}
      />
      <SecondaryDescriptionGrid
        businessDescr={t("czech_company_14")}
        financialDescr={t("czech_company_11")}
        riskDescr={t("czech_company_16")}
        subDescr={t("czech_company_12")}
        taxesDescr={t("czech_company_9")}
        title={
          <p className="title">
            {t("czech_company_7")}
            <span className="selected-text">{t("czech_company_7.1")}</span>
          </p>
        }
      />
      <ConsultingOffshoreComp
        title={t("mpcexoc_1")}
        description={t("mpcexoc_8")}
        linkLabel={t("mpcexoc_9")}
        linkRoute={`${COMPANY_REGISTRATION_ROUTE}/czechia`}
      >
        <CountryTarrifList />
      </ConsultingOffshoreComp>
      <Faq />
    </section>
  );
}
