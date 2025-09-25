import { Flex } from "antd";
import { useTranslation } from "react-i18next";
import "./style.scss";
import Faq from "../../components/faq/Faq";
import LicenseBlock from "../../components/licenseBlock/LicenseBlock";
import paymentLicense from "../../assets/images/paymentLicense.png";
import bankLicense from "../../assets/images/bankLicense.png";
import brokerLicense from "../../assets/images/brokerLicense.png";
import activesLicense from "../../assets/images/activesLicense.png";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import Icon from "../../components/iconComponent/Icon";
import LinkComponent from "../../components/linkComponent/LinkComponent";
import { CANADA_COMPANY_ROUTE, CONTACTS_ROUTE } from "../../routes/routes";
import LicenseLionsInLawChoose from "../../components/licenseLionsInLawChoose/LicenseLionsInLawChoose";

export default function FinancialLicense() {
  const { t } = useTranslation();
  return (
    <>
      <div className="page-content-wrapper financial-license-page-wrapper">
        <Flex vertical={true} className="banner-wrapper">
          <p className="sub-description">{t("finance_license_1")}</p>
          <p className="title">LionsInLaw</p>
          <Flex align="center" justify="flex-start" className="financical-info">
            <p className="description">{t("finance_license_3")}</p>
            <div className="image-wrapper" />
          </Flex>
        </Flex>
        <LicenseBlock
          description={t("finance_license_5")}
          imgInst={bankLicense}
          linkRef={"/"}
          title={t("finance_license_4")}
        />
        <LicenseBlock
          description={t("finance_license_8")}
          imgInst={paymentLicense}
          linkRef={CANADA_COMPANY_ROUTE}
          title={t("finance_license_7")}
          isRevert={true}
        />
        <LicenseBlock
          description={t("finance_license_11")}
          imgInst={activesLicense}
          linkRef={"/"}
          title={t("finance_license_10")}
        />
        <LicenseBlock
          description={t("finance_license_14")}
          imgInst={brokerLicense}
          linkRef={"/"}
          title={t("finance_license_13")}
          isRevert={true}
        />
        <LicenseLionsInLawChoose
          description={t("finance_license_17")}
          blockType="financial"
        />
        <div className="risk-management-wrapper">
          <div className="wrapper">
            <p className="title">{t("finance_license_24")}</p>
            <p className="description">{t("finance_license_25")}</p>
            <LinkComponent
              linkLabel={t("finance_license_26")}
              linkValue={CONTACTS_ROUTE}
            />
          </div>
        </div>
        <ConsultingOffshoreComp
          title={t("finance_license_27")}
          description={t("finance_license_33")}
          linkLabel={t("finance_license_34")}
          showPrice={false}
        >
          <Flex align="center" className="tariff-item">
            <Icon name="ok-rounded-white" />
            <p>{t("finance_license_29")}</p>
          </Flex>
          <Flex className="tariff-item">
            <Icon name="ok-rounded-white" />
            <p>{t("finance_license_30")}</p>
          </Flex>
          <Flex className="tariff-item">
            <Icon name="ok-rounded-white" />
            <p>{t("finance_license_31")}</p>
          </Flex>
        </ConsultingOffshoreComp>
        <Faq />
      </div>
    </>
  );
}
