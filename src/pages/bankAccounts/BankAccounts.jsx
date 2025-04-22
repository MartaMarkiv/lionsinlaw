import { Flex } from "antd";
import { useTranslation } from "react-i18next";
import LinkComponent from "../../components/linkComponent/LinkComponent";
import { CONTACTS_ROUTE } from "../../routes/routes";
import "./style.scss";
import Icon from "../../components/iconComponent/Icon";
import bankAccountBanner from "../../assets/images/openBankBanner.png";
import lawMember from "../../assets/images/lawMember.png";
import lawLady from "../../assets/images/lawLady2.png";
import contactGirl from "../../assets/images/contactGirl.png";
import bankBuilding from "../../assets/images/bankKolons.png";

export default function BankAccounts() {
  const {t} = useTranslation();
  return (
    <div className="page-content-wrapper create-bank-account-page">
      <Flex
        align="start"
        justify="space-between"
        className="bank-account-header"
      >
        <div className="title-wrapper">
          <p className="title">
            <span className="selected-text">LionsInLaw </span>{t("open_bank_acount_2")}
          </p>
          <p className="description">
            {t("open_bank_acount_3")}
          </p>
          <LinkComponent
            linkLabel={t("open_bank_acount_4")}
            linkValue={CONTACTS_ROUTE}
          />
        </div>
        <div className="create-bank-banner">
          <img src={bankAccountBanner} alt="Create bank account" />
        </div>
      </Flex>
      <div className="copmany-experts">
        <p className="title">
          LionsInLaw -{" "}
          <span className="uppercase">
            {t("open_bank_acount_5")}
          </span>
        </p>
        <p className="description">
          {t("open_bank_acount_6")}
        </p>
        <Flex align="start" justify="space-between">
          <Flex
            align="center"
            justify="space-around"
            className="experts-types-wrapper"
          >
            <Flex vertical={true} align="center" className="experts-type-item">
              <Icon name="agreement" />
              <p>{t("open_bank_acount_7")}</p>
            </Flex>
            <Flex vertical={true} align="center" className="experts-type-item">
              <Icon name="bank-account" />
              <p>{t("open_bank_acount_8")}</p>
            </Flex>
          </Flex>
          <p className="sub-description">
            {t("open_bank_acount_9")}
            <span className="selected-text">Lionsinlaw</span>{t("open_bank_acount_9.1")}
          </p>
        </Flex>
        <div className="experts-image">
          <img src={lawMember} alt="LionsInLaw member" className="men-image" />
          <img src={lawLady} alt="Law lady" className="law-lady-image" />
        </div>
      </div>
      <div className="international-business">
        <Flex
          className="international-business-title"
          align="center"
          vertical={true}
        >
          <span>{t("open_bank_acount_10")}</span>
          <div>
            <span className="selected-text">LionsInLaw :</span>
            <span>{t("open_bank_acount_10.1")}</span>
          </div>

          <span>{t("open_bank_acount_10.2")}</span>
        </Flex>
        <Flex
          className="startaps-wrapper"
          justify="space-between"
          align="start"
        >
          <p>
            {t("open_bank_acount_11")}
          </p>
          <Flex className="contact-experts" vertical={true}>
            <Flex align="start" justify="space-between">
              <p>
                {t("open_bank_acount_12")}
              </p>
              <img src={contactGirl} alt="Contact us" />
            </Flex>
            <LinkComponent
              linkLabel={t("open_bank_acount_4")}
              linkValue={CONTACTS_ROUTE}
            />
          </Flex>
        </Flex>
        <img src={bankBuilding} alt="Bank building" className="bank-building" />
      </div>
      <div className="why-lionsinlaw-wrapper">
        <Flex align="start" justify="space-between" className="why-lionsinlaw">
          <div>
            <p className="title">
              {t("open_bank_acount_14")}<span className="selected-text">Lionsinlaw</span>{t("open_bank_acount_14.1")}
            </p>
            <p className="description">
              {t("open_bank_acount_15")}
              <span className="selected-text"> LionsInLaw</span>
            </p>
          </div>
          <div className="selected-block customer-oriented">
            <p className="title">{t("open_bank_acount_16")}</p>
            <p className="description">
              {t("open_bank_acount_17")}
            </p>
          </div>
        </Flex>
        <Flex
          align="flex-start"
          justify="space-between"
          className="expert-guidance-wrapper"
        >
          <Flex
            vertical={true}
            align="flex-end"
            className="selected-block expert-guidance"
          >
            <p className="title">{t("open_bank_acount_18")}</p>
            <p className="description">
              {t("open_bank_acount_19")}
            </p>
          </Flex>
          <div className="expert-guidance-item">
            <p className="title">{t("open_bank_acount_20")}</p>
            <p className="description">
              {t("open_bank_acount_21")}
            </p>
          </div>
          <div className="expert-guidance-item">
            <p className="title">{t("open_bank_acount_22")}:</p>
            <p className="description">
              {t("open_bank_acount_23")}
            </p>
          </div>
        </Flex>
      </div>
      <div className="ask-bank-account-wrapper">
        <div>
          <p className="title">
            {t("open_bank_acount_24")}
          </p>
          <p className="description">
            {t("open_bank_acount_25")}
          </p>
          <LinkComponent linkLabel={t("open_bank_acount_26")} linkValue={CONTACTS_ROUTE} />
        </div>
      </div>
    </div>
  );
}
