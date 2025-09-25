import Faq from "../../components/faq/Faq";
import { useTranslation } from "react-i18next";
import "./style.scss";
import { Flex } from "antd";
import Icon from "../../components/iconComponent/Icon";
import canadaCastle from "../../assets/images/canadaCastle.png";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import CountryTarrifList from "../../components/countryTarrifList/CountryTarrifList";
import { COMPANY_REGISTRATION_ROUTE } from "../../routes/routes";

export default function CanadaCompany() {
  const { t } = useTranslation();
  return (
    <section className="canada-company-page">
      <div className="page-content-wrapper canada-company-header-wrapper">
        <div className="canada-company-header">
          <p className="title">{t("canada_company_1")}</p>
          <p className="description">{t("canada_company_2")}</p>
        </div>
      </div>
      <Flex
        className="page-content-wrapper theory-practice-wrapper"
        justify="space-between"
        align="flex-start"
      >
        <div className="image-wrapper">
          <img src={canadaCastle} alt="Canada castle" />
          <div className="shadow" />
        </div>
        <div className="info-wrapper">
          <p className="title">{t("canada_company_3")}</p>
          <p className="description">{t("canada_company_4")}</p>
          <Flex className="grid-wrapper theory-item" align="center">
            <div className="icon-wrapper">
              <Icon name="bank-dollar" />
            </div>
            <div>
              <p className="item-title">{t("canada_company_5")}</p>
              <p className="item-description">{t("canada_company_6")}</p>
            </div>
          </Flex>
          <Flex className="grid-wrapper theory-item" align="center">
            <div className="icon-wrapper">
              <Icon name="libra" />
            </div>
            <div>
              <p className="item-title">{t("canada_company_7")}</p>
              <p className="item-decription">{t("canada_company_8")}</p>
            </div>
          </Flex>
          <Flex className="grid-wrapper theory-item" align="center">
            <div className="icon-wrapper">
              <Icon name="business" />
            </div>
            <div>
              <p className="item-title">{t("canada_company_9")}</p>
              <p className="item-description">{t("canada_company_10")}</p>
            </div>
          </Flex>
          <Flex className="grid-wrapper theory-item" align="center">
            <div className="icon-wrapper">
              <Icon name="attention" />
            </div>
            <div>
              <p className="item-title">{t("canada_company_11")}</p>
              <p className="item-description">{t("canada_company_12")}</p>
            </div>
          </Flex>
        </div>
      </Flex>
      <Flex
        className="knowledge-sharing-wrapper"
        vertical={true}
        align="center"
      >
        <div className="image-wrapper" />
        <p className="title">{t("canada_company_13")}</p>
        <p className="description">{t("canada_company_14")}</p>
        <Flex className="counts-wrapper" justify="space-between">
          <Flex className="count-item" vertical={true} align="center">
            <p className="count">24</p>
            <p className="count-label">{t("canada_company_15")}</p>
          </Flex>
          <Flex className="count-item" vertical={true} align="center">
            <p className="count">35</p>
            <p className="count-label">{t("canada_company_16")}</p>
          </Flex>
          <Flex className="count-item" vertical={true} align="center">
            <p className="count">805</p>
            <p className="count-label">{t("canada_company_17")}</p>
          </Flex>
          <Flex className="count-item" vertical={true} align="center">
            <p className="count">3,946</p>
            <p className="count-label">{t("canada_company_18")}</p>
          </Flex>
        </Flex>
      </Flex>
      <Flex className="business-coaching" vertical={true} align="center">
        <p className="title">{t("canada_company_19")}</p>
        <p className="description">{t("canada_company_20")}</p>
        <Flex className="business-coaching-items-list" justify="space-between">
          <Flex className="coaching-item" vertical={true} align="center">
            <Icon name="business-analysis" />
            <p className="item-title">{t("canada_company_21")}</p>
            <p className="item-description">{t("canada_company_22")}</p>
          </Flex>
          <Flex className="coaching-item" vertical={true} align="center">
            <Icon name="business-optimisation" />
            <p className="item-title">{t("canada_company_23")}</p>
            <p className="item-description">{t("canada_company_24")}</p>
          </Flex>
          <Flex className="coaching-item" vertical={true} align="center">
            <Icon name="business-motivation" />
            <p className="item-title">{t("canada_company_25")}</p>
            <p className="item-description">{t("canada_company_26")}</p>
          </Flex>
          <Flex className="coaching-item" vertical={true} align="center">
            <Icon name="business-results" />
            <p className="item-title">{t("canada_company_27")}</p>
            <p className="item-description">{t("canada_company_28")}</p>
          </Flex>
        </Flex>
      </Flex>
      <ConsultingOffshoreComp
        title={t("mpcexoc_1")}
        description={t("mpcexoc_8")}
        linkLabel={t("mpcexoc_9")}
        linkRoute={`${COMPANY_REGISTRATION_ROUTE}/canada`}
      >
        <CountryTarrifList />
      </ConsultingOffshoreComp>
      <Faq />
    </section>
  );
}
