import { Flex } from "antd";
import { useTranslation } from "react-i18next";
import "./style.scss";
import Icon from "../../components/iconComponent/Icon";
import Faq from "../../components/faq/Faq";
import libraMonet from "../../assets/images/libraMonet.png";
import cryptoLibrary from "../../assets/images/cryptoLibrary.png";
import cryptoLicense from "../../assets/images/cryptiLicense.png";
import cryptoWallet from "../../assets/images/cryptoWallet.png";
import amlKyc from "../../assets/images/aml-kys.png";
import icoSto from "../../assets/images/iso-sto.png";
import libraBtcMonet from "../../assets/images/libraBtcMonet.png";
import LicenseBlock from "../../components/licenseBlock/LicenseBlock";
import LicenseLionsInLawChoose from "../../components/licenseLionsInLawChoose/LicenseLionsInLawChoose";
import LinkComponent from "../../components/linkComponent/LinkComponent";
import { CONTACTS_ROUTE } from "../../routes/routes";

export default function CryptoLicense() {
  const {t} = useTranslation();
  return (
    <>
      <div className="page-content-wrapper crypto-license-page-wrapper">
        <div className="crypto-license-header">
          <div className="title">
            <span>LionsInLaw</span>
            <div className="monet-wrapper" />
          </div>
          <Flex
            align="center"
            justify="space-between"
            className="description-wrapper"
          >
            <Flex
              align="center"
              justify="space-between"
              vertical={true}
              className="description-block"
            >
              <div className="cont-wrapper">
                <p className="count">50+</p>
                <p>{t("cryptoconsulting_3")}</p>
              </div>
              <p style={{ textAlign: "left" }}>
                {t("cryptoconsulting_4")}
              </p>
            </Flex>
            <Flex justify="space-between" className="license-description">
              <Flex vertical={true} justify="space-between">
                <div>
                  <p className="title">{t("cryptoconsulting_5")}</p>
                  <Flex align="center" className="crypto-license-item">
                    <span>{t("cryptoconsulting_6")}</span>
                    <Icon name="ok-white" />
                  </Flex>
                  <Flex align="center" className="crypto-license-item">
                    <span>{t("cryptoconsulting_7")}</span>
                    <Icon name="ok-white" />
                  </Flex>
                  <Flex align="center" className="crypto-license-item">
                    <span>{t("cryptoconsulting_8")}</span>
                    <Icon name="ok-white" />
                  </Flex>
                </div>
                <img src={cryptoLibrary} alt="Crypto library" />
              </Flex>
              <Flex
                align="center"
                justify="center"
                className="license-crypto-image-wrapper"
              >
                <img src={libraMonet} alt="Crypto license" />
              </Flex>
            </Flex>
          </Flex>
        </div>
        <LicenseBlock
          description={t("cryptoconsulting_10")}
          imgInst={cryptoLicense}
          linkRef={"/"}
          title={t("cryptoconsulting_9")}
        />
        <LicenseBlock
          description={t("cryptoconsulting_13")}
          imgInst={cryptoWallet}
          linkRef={"/"}
          title={t("cryptoconsulting_12")}
          isRevert={true}
        />
        <LicenseBlock
          description={t("cryptoconsulting_16")}
          imgInst={icoSto}
          linkRef={"/"}
          title={t("cryptoconsulting_15")}
        />
        <LicenseBlock
          description={t("cryptoconsulting_19")}
          imgInst={amlKyc}
          linkRef={"/"}
          title={t("cryptoconsulting_18")}
          isRevert={true}
        />
        <LicenseLionsInLawChoose description={t("cryptoconsulting_22")} />
        <div className="business-support-wrapper">
          <p className="title">
            <span className="selected-text">LionsInLaw: </span>
            {t("cryptoconsulting_29")}
          </p>
          <Flex className="business-support-wrapper-info">
            <Flex className="info-wrapper">
              <Flex vertical={true} justify="space-between">
                <Flex align="center">
                  <Icon name="logo" />
                  <span className="red-logo">LionsInLaw</span>
                </Flex>
                <p className="description">
                  {t("cryptoconsulting_31")}
                </p>
              </Flex>
              <div className="image-wrapper">
                <img src={libraBtcMonet} alt="Business support LionsInLaw" />
              </div>
            </Flex>
            <Flex
              vertical={true}
              className="contact-us-info-wrapper"
              justify="center"
              align="flex-start"
            >
              <p className="count">1005+</p>
              <p className="count-label">{t("cryptoconsulting_33")}</p>
              <p className="countact-us">
                {t("cryptoconsulting_34")}
              </p>
              <LinkComponent
                linkLabel={t("cryptoconsulting_36")}
                linkValue={CONTACTS_ROUTE}
              />
            </Flex>
          </Flex>
        </div>
        <div className="crypto-partner-wrapper">
          <div className="wrapper">
            <p className="title">
              {t("cryptoconsulting_35")}
            </p>
            <LinkComponent
              linkLabel={t("cryptoconsulting_36")}
              linkValue={CONTACTS_ROUTE}
            />
          </div>
        </div>
        <Faq />
      </div>
    </>
  );
}
