import { Button, Flex } from "antd";
import { useTranslation } from "react-i18next";
import "./style.scss";
import Icon from "../../components/iconComponent/Icon";
import irelandNature from "../../assets/images/iralendNature.png";
import iralendTaxes from "../../assets/images/iralendTaxes.png";
import irelandMountain from "../../assets/images/irelandMountain.png";
import irelandBusiness from "../../assets/images/men-in-green.png";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import CompanyDescriptionGrid from "../../components/companyDescriptionGrid/CompanyDescriptionGrid";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import Faq from "../../components/faq/Faq";
import CountryTarrifList from "../../components/countryTarrifList/CountryTarrifList";
import { COMPANY_REGISTRATION_ROUTE } from "../../routes/routes";

export default function IrelandCompany() {
  const {t} = useTranslation();
  return (
    <section className="page-content-wrapper ireland-company-wrapper">
      <section className="ireland-company-header">
        <Flex style={{ position: "relative" }}>
          <Flex vertical={true} className="title-wrapper">
            <p className="sub-title">
              <span className="selected-text">{t("ireland_company_1")}</span>{t("ireland_company_1.1")}
            </p>
            <p className="title"> LionsInLaw</p>
            <p className="description">
              {t("ireland_company_2")}
            </p>
          </Flex>
          <div className="secondary-banner"></div>
        </Flex>
        <Flex>
          <div className="mountain-banner">
            <img src={irelandMountain} alt="Ireland's Mountain" />
          </div>
          <Flex
            vertical={true}
            justify="center"
            className="tariff-info-wrapper"
          >
            <p className="description">
              {t("ireland_company_3")}
              <span className="selected-text"> LionsInLaw</span>
            </p>
            <Flex
              align="center"
              justify="space-between"
              className="show-rariff"
            >
              <span>Тарифи</span>
              <Button icon={<Icon name="tariff" />} />
            </Flex>
          </Flex>
        </Flex>
      </section>
      <CompanySubDescriptionBlock
        title={
          <p className="title">
            <span className="selected-text">{t("ireland_company_4")}</span>{t("ireland_company_4.1")}
          </p>
        }
        description={t("ireland_company_5")}
        imageRef={irelandNature}
      />
      <CompanyDescriptionGrid
        businessDescr={t("ireland_company_16")}
        businessImage={irelandBusiness}
        financialDescr={t("ireland_company_11")}
        imageRef={iralendTaxes}
        riskDescr={t("ireland_company_14")}
        subDescr={t("ireland_company_12")}
        taxesDescr={t("ireland_company_9")}
        title={t("ireland_company_6")}
        company={t("ireland_company_7")}
      />
      <ConsultingOffshoreComp
        title={t("england_company_15")}
        description={t("england_company_16")}
        linkLabel={t("england_company_17")}
        linkRoute={`${COMPANY_REGISTRATION_ROUTE}/ireland`}
      >
        <CountryTarrifList />
      </ConsultingOffshoreComp>
      <Faq />
    </section>
  );
}
