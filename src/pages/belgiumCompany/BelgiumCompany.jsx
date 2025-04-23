import belgiumBanner from "../../assets/images/belgiumBanner.png";
import belgiumNature from "../../assets/images/belgiumNature.png";
import belgiumTaxes from "../../assets/images/belgiumTaxes.png";
import belgiumBusiness from "../../assets/images/belgiumBusiness.png";
import belgiumGirl from "../../assets/images/belgiumGirl.png";
import userImage from "../../assets/images/User.png";
import "./style.scss";
import { Button, Flex } from "antd";
import CompanyDescriptionGrid from "../../components/companyDescriptionGrid/CompanyDescriptionGrid";
import Icon from "../../components/iconComponent/Icon";
import LinkComponent from "../../components/linkComponent/LinkComponent";
import { COMPANY_REGISTRATION_ROUTE } from "../../routes/routes";
import Faq from "../../components/faq/Faq";
import { useTranslation } from "react-i18next";

export default function BelgiumCompany() {
  const {t} = useTranslation();
  return (
    <section className="page-content-wrapper belgium-company-page-wrapper">
      <Flex className="belgium-header">
        <div className="header-info">
          <p className="title">
            {t("belgium_company_1")}
          </p>
          <p className="description">
            {t("belgium_company_2")}
          </p>
        </div>
        <div className="image-wrapper">
          <img src={belgiumBanner} alt="Law company member" />
        </div>
      </Flex>
      <div className="belgium-company-description">
        <Flex justify="space-between" className="main-info-wrapper">
          <p className="title">
            {t("belgium_company_3")}
          </p>
          <p className="description">
            {t("belgium_company_4")}
          </p>
        </Flex>
        <Flex className="secondary-part">
          <div className="image-wrapper">
            <img src={belgiumNature} alt="Belgium nature" />
          </div>
          <Flex
            vertical={true}
            justify="space-around"
            className="description-info"
          >
            <p className="sub-title">{t("belgium_company_5")}</p>
            <p className="sub-description">
              {t("belgium_company_6")}
            </p>
            <Flex
              align="flex-end"
              className="tariffs-wrapper"
              justify="space-between"
            >
              <Button>
                <span>{t("belgium_company_7")}</span>
                <Flex align="center" justify="center" className="icon-wrapper">
                  <Icon name="tariff" />
                </Flex>
              </Button>
              <div className="tariffs-wrapper-info">
                <Flex
                  align="center"
                  justify="space-between"
                  className="counts-wrapper"
                >
                  <span>310K</span>
                  <span>70%</span>
                </Flex>
                <p className="sub-description">
                  {t("belgium_company_8")}
                </p>
              </div>
            </Flex>
          </Flex>
        </Flex>
      </div>
      <CompanyDescriptionGrid
        businessDescr={t("belgium_company_12")}
        businessImage={belgiumBusiness}
        financialDescr={t("belgium_company_14")}
        imageRef={belgiumTaxes}
        riskDescr={t("belgium_company_16")}
        subDescr={t("belgium_company_12")}
        title={t("belgium_company_9")}
        taxesDescr={t("belgium_company_11")}
      />
      <div className="belgium-consultation-wrapper">
        <p className="main-title">{t("belgium_company_19")}</p>
        <p className="secondary-title">{t("belgium_company_19.1")}</p>
        <Flex>
          <div className="info-wrapper">
            <p className="description">
              {t("belgium_company_20")}
            </p>
            <p className="secondary-description">
              {t("belgium_company_22")}
            </p>
            <LinkComponent
              linkLabel={t("belgium_company_24")}
              linkValue={`${COMPANY_REGISTRATION_ROUTE}/belgium`}
            />
          </div>
          <div className="image-wrapper">
            <img src={belgiumGirl} alt="Belgium team member" />
            <Flex className="start-block" align="center" vertical={true}>
              <img src={userImage} alt="" />
              <p>{t("belgium_company_21")}</p>
              <div className="circle-img" />
            </Flex>
            <Flex
              vertical={true}
              align="center"
              justify="center"
              className="time-block"
            >
              <p>{t("belgium_company_23")}</p>
              <Flex>
                <span className="hours-value">24/</span>
                <span className="day-value">7</span>
              </Flex>
            </Flex>
            <Flex className="counts-block" align="center">
              <Icon name="count-circle" />
              <div>
                <p className="count-title">+ 6.202.203,00 €</p>
                <p className="count-description">
                  {t("mpcexoc_7")}
                </p>
              </div>
            </Flex>
          </div>
        </Flex>
      </div>
      <Faq />
    </section>
  );
}
