import "./style.scss";
import { useTranslation } from "react-i18next";
import englandNature from "../../assets/images/englandNature.png";
import englandTaxes from "../../assets/images/englandTaxes.png";
import englandBuilding from "../../assets/images/englandBuilding.png";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import CompanyDescriptionGrid from "../../components/companyDescriptionGrid/CompanyDescriptionGrid";
import Faq from "../../components/faq/Faq";
import { Flex } from "antd";
import LinkComponent from "../../components/linkComponent/LinkComponent";
import { COMPANY_REGISTRATION_ROUTE } from "../../routes/routes";

export default function EnglandCompany() {
  const {t} = useTranslation();
  return (
    <>
      <section className="page-content-wrapper england-company-wrapper">
        <Flex
          className="england-company-header"
          vertical={true}
          align="flex-end"
        >
          <Flex className="title-wrapper" vertical={true}>
            <p className="title">
              {t("england_company_1")}
            </p>
            <p className="description">
              {t("england_company_2")}
            </p>
          </Flex>
        </Flex>
        <CompanySubDescriptionBlock
          title={<p className="title">{t("england_company_3")}</p>}
          description={t("england_company_4")}
          imageRef={englandNature}
        />
        <CompanyDescriptionGrid
          businessDescr={t("england_company_14")}
          businessImage={englandBuilding}
          financialDescr={t("england_company_10")}
          imageRef={englandTaxes}
          riskDescr={t("england_company_12")}
          subDescr={t("england_company_8")}
          title={t("england_company_7")}
          taxesDescr={t("england_company_6")}
        />
      </section>

      <Flex className="england-consulting" align="center" justify="flex-end">
        <div>
          <p className="title">
            {t("england_company_15")}
            <span className="selected-text">LionsInLaw</span>
          </p>
          <p className="description">
            {t("england_company_16")}
          </p>
          <LinkComponent
            linkLabel={t("england_company_17")}
            linkValue={`${COMPANY_REGISTRATION_ROUTE}/england`}
          />
        </div>
      </Flex>
      <Faq />
    </>
  );
}
