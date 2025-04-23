import { Flex } from "antd";
import { useTranslation } from "react-i18next";
import "./style.scss";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import manIslandNature from "../../assets/images/men-island.png";
import manIslandPeople from "../../assets/images/men-island-people.png";
import manEarth from "../../assets/images/men-earth.png";
import CompanyDescriptionGrid from "../../components/companyDescriptionGrid/CompanyDescriptionGrid";
import Faq from "../../components/faq/Faq";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import CountryTarrifList from "../../components/countryTarrifList/CountryTarrifList";
import { COMPANY_REGISTRATION_ROUTE } from "../../routes/routes";

export default function ManIslandCompany() {
  const {t} = useTranslation();
  return (
    <div className="page-content-wrapper isle-man-company">
      <Flex justify="space-between" className="banner-wrapper">
        <div className="man-company-wrapper">
          <Flex vertical={true}>
            <p className="sub-title">{t("isla_of_man_1")}</p>
            <p className="company-name">{t("isla_of_man_2")}</p>
          </Flex>
          <p className="description">
            {t("isla_of_man_3")}
          </p>
        </div>
        <Flex
          className="company-sub-header"
          vertical={true}
          justify="space-between"
        >
          <p className="title">LionsInLaw</p>
          <div>
            <p className="count">1000+</p>
            <p className="count-label">{t("isla_of_man_4")}</p>
          </div>
        </Flex>
        <div className="vector-wrapper" />
      </Flex>
      <CompanySubDescriptionBlock
        title={
          <p className="title">
            {t("isla_of_man_5")}
          </p>
        }
        description={t("isla_of_man_6")}
        imageRef={manIslandNature}
      />
      <CompanyDescriptionGrid
        businessDescr={t("isla_of_man_17")}
        businessImage={manEarth}
        financialDescr={t("isla_of_man_13")}
        imageRef={manIslandPeople}
        riskDescr={t("isla_of_man_15")}
        subDescr={t("isla_of_man_11")}
        taxesDescr={t("isla_of_man_10")}
        title={t("isla_of_man_7")}
        company={t("isla_of_man_8")}
      />
      <ConsultingOffshoreComp
        title={t("mpcexoc_1")}
        description={t("mpcexoc_8")}
        linkLabel={t("mpcexoc_9")}
        linkRoute={`${COMPANY_REGISTRATION_ROUTE}/isleOfMan`}
      >
        <CountryTarrifList />
      </ConsultingOffshoreComp>
      <Faq />
    </div>
  );
}
