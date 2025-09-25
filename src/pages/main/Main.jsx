import { Flex, Switch, Button, Carousel } from "antd";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import FlagsContainer from "../../components/flagsContainer/FlagsContainer";
import Icon from "../../components/iconComponent/Icon";
import chooseUsImg from "../../assets/images/chooseLionsInLaw.png";
import lionsInLawTeam from "../../assets/images/team.png";
import BlockElement from "../../components/blockElement/BlockElement";
import config from "../../config";
import useWindowWidth from "../../hooks/useWindowWidth";
import {
  BANK_ACCOUNT_ROUTE,
  COMPANY_REGISTRATION_ROUTE,
  CONTACTS_ROUTE,
  CRYPTO_LICENSE_ROUTE,
  JURISDICTIONS_ROUTE,
  TAX_PLANNING_ROUTE,
} from "../../routes/routes";

export default function Main() {
  const windowWidth = useWindowWidth();

  const getCountSlide = () => {
    let countSlide = 4;
    if (windowWidth < 1280) {
      countSlide = 2;
    }
    if (windowWidth < 820) {
      countSlide = 1;
    }
    return countSlide;
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="main-section">
        <Flex justify="space-between" className="main-header-block">
          <div className="info-wrapper main-sub-part">
            <div className="main-background" />
            <div className="main-title" style={{ textTransform: "uppercase" }}>
              {t("global_corporate_services")}
            </div>
            <div className="description">
              {t("global_corporate_services_text")}
            </div>
          </div>
          <Flex
            vertical={true}
            align="center"
            justify="start"
            className="main-sub-part registration"
          >
            <Flex
              align="center"
              justify="center"
              vertical={true}
              className="count-company-wrapper"
              style={{ maxWidth: 440 }}
            >
              <div className="count-company">50+</div>
              <div className="main-title" style={{ textAlign: "center" }}>
                {t("jurisdiction_to_registr_company")}
              </div>
            </Flex>
            <Flex
              vertical={true}
              align="center"
              justify="center"
              className="law-name-info"
            >
              <div className="name-law">LionsInLaw</div>
              <span
                className="description medium"
                style={{ textAlign: "center" }}
              >
                {t("lions_in_law_text")}
              </span>
            </Flex>
          </Flex>
        </Flex>
        <Flex align="center" justify="space-between" className="secondary-part">
          <Flex
            className="quality main-sub-part"
            justify="space-between"
            align="flex-start"
          >
            <div>
              <div className="count">10+</div>
              <div className="quality-name">{t("10+_text")}</div>
            </div>
            <div>
              <div className="count">1000+</div>
              <div className="quality-name">
                {t("trademark_registration_8")}
              </div>
            </div>
            {windowWidth <= 880 && (
              <div>
                <div className="count">50+</div>
                <div className="quality-name">
                  Юрисдикцій для реестрації компаній
                </div>
              </div>
            )}
          </Flex>
          <Link to={CONTACTS_ROUTE} className="contact-us-link">
            {t("button_main_page_contact_us")}
          </Link>
        </Flex>
      </div>
      <FlagsContainer />
      <div className="our-services">
        <div className="title">{t("our_service_include")}</div>
        <div className="description">{t("our_service_include_text")}</div>
        <Flex
          align="center"
          justify="space-around"
          className="our-services-wrapper"
        >
          <Flex vertical={true} className="our-services-item" align="center">
            <Icon name="global-existing" />
            <p className="title">{t("global_existense")}</p>
            <p className="description">{t("main_1")}</p>
          </Flex>

          <Flex vertical={true} className="our-services-item" align="center">
            <Icon name="efficiency" />
            <p className="title">{t("main_2")}</p>
            <p className="description">{t("main_3")}</p>
          </Flex>

          <Flex vertical={true} className="our-services-item" align="center">
            <Icon name="individual" />
            <p className="title">{t("main_4")}</p>
            <p className="description">{t("main_5")}</p>
          </Flex>
        </Flex>
      </div>
      <div className="choose-us">
        <p className="title">
          {t("main_6_choose")}
          <span className="selected">LionsInLaw</span> {t("main_6")}
        </p>
        <Flex align="start" justify="space-between">
          <div className="image-wrapper">
            <img src={chooseUsImg} alt="LionsInLaw" />
          </div>
          <Flex vertical={true} className="advantages-wrapper">
            <p className="description">{t("main_7")}</p>
            <Flex className="advantages-item" align="center">
              <Icon name="expansion" />
              <Flex vertical={true}>
                <p className="title">{t("main_8")}</p>
                <p className="advantages-item-description">{t("main_9")}</p>
              </Flex>
            </Flex>
            <Flex className="advantages-item" align="center">
              <Icon name="actives" />
              <Flex vertical={true}>
                <p className="title">{t("main_10")}</p>
                <p className="advantages-item-description">{t("main_11")}</p>
              </Flex>
            </Flex>
            <Flex className="advantages-item" align="center">
              <Icon name="optimization" />
              <Flex vertical={true}>
                <p className="title">{t("main_12")}</p>
                <p className="advantages-item-description">{t("main_13")}</p>
              </Flex>
            </Flex>
            <Flex className="advantages-item" align="center">
              <Icon name="global-traiding" />
              <Flex vertical={true}>
                <p className="title">{t("main_14")}</p>
                <p className="advantages-item-description">{t("main_15")}</p>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </div>
      <div className="services-list">
        <div className="services-list-title">{t("main_16")}</div>
        <BlockElement
          description={t("main_18")}
          linkValue={`${COMPANY_REGISTRATION_ROUTE}/default`}
          title={t("main_17")}
          isDark={false}
        />
        <Flex className="image-container" align="center" justify="center">
          <img src={lionsInLawTeam} alt="LionsInLaw team" />
        </Flex>
        <BlockElement
          description={t("main_21")}
          linkValue={""}
          title={t("main_20")}
          isDark={false}
        />
        <BlockElement
          description={t("main_24")}
          linkValue={BANK_ACCOUNT_ROUTE}
          title={t("main_23")}
          isDark={true}
        />
        <Flex className="grid-item-2" vertical={true}>
          <div className="item-2-title">
            {t("main_32_in")}
            <span className="selected">LionsInLaw </span>
            {t("main_32")}
          </div>
          <div>{t("main_33")}</div>
        </Flex>
        <BlockElement
          description={t("main_27")}
          linkValue={""}
          title={t("main_26")}
          isDark={true}
          blockClass="sales-block"
        />
        <BlockElement
          description={t("main_30")}
          linkValue={JURISDICTIONS_ROUTE}
          title={t("main_29")}
          isDark={false}
        />
      </div>
      <div className="law-business">
        <div className="business-gradient" />
        <div>
          <div className="title">
            {t("main_34")}
            <span className="selected"> LionsInLaw</span>
          </div>
          <div className="description">{t("main_36")}</div>
          <div>
            <Link className="contact-us-link" to={CONTACTS_ROUTE}>
              {t("main_37")}
            </Link>
          </div>
          <Flex
            align="center"
            justify="space-between"
            className="business-types"
          >
            <Link to={TAX_PLANNING_ROUTE} className="business-item">
              <Icon name="taxes-plan-img" />
              <div>
                <p className="title">{t("main_38")}</p>
                <p>{t("main_39")}</p>
              </div>
            </Link>
            <Link to={CRYPTO_LICENSE_ROUTE} className="business-item">
              <Icon name="crypto-license-img" />
              <div>
                <p className="title">{t("main_40")}</p>
                <p>{t("main_41")}</p>
              </div>
            </Link>
          </Flex>
        </div>
      </div>
      <div className="our-functions">
        <div className="our-functions-header">
          <p className="title">
            From Startup to Enterprise: Legal Plans that Scale with You
          </p>
          {/* <Flex align="center" justify="center">
            <span>Оплата щомісяця</span>
            <Switch
              className="plann-switcher"
              defaultChecked
              onChange={() => {}}
            />
            <span>Оплата щорічно</span>
          </Flex> */}
          {/* <Flex align="center" justify="center" className="discount-wrapper">
            <Icon name="wavy-arrow" />
            <span>Знижка 25%</span>
          </Flex> */}
        </div>
        <div className="tarrif-plan-types">
          <Carousel slidesPerRow={getCountSlide()}>
            <div className="tarrif-plan-item">
              <p className="title">{t("plan_start_header")}</p>
              <p className="description">{t("plan_start_target_audience")}</p>
              {/* <Flex className="price-wrapper" align="center">
                <span className="price">$0</span>
                <span>/ Місяць</span>
              </Flex> */}
              <div>
                <Button className="start-plan-btn light">Починай зараз</Button>
              </div>
              {config.tariffPlanOptions.free.map((item, index) => (
                <Flex
                  align="center"
                  key={`${item.name}:${index}`}
                  className="plan-option-item"
                >
                  <Flex
                    align="center"
                    justify="center"
                    className="icon-wrapper"
                  >
                    <Icon name="ok" />
                  </Flex>
                  <span>{t(item)}</span>
                </Flex>
              ))}
            </div>
            <div className="tarrif-plan-item dark">
              <p className="title">{t("plan_business_header")}</p>
              <p className="description">
                {t("plan_business_target_audience")}
              </p>
              {/* <Flex className="price-wrapper" align="center">
                <span className="price">$0</span>
                <span>/ Місяць</span>
              </Flex> */}
              <div>
                <Button className="start-plan-btn dark">Починай зараз</Button>
              </div>
              {config.tariffPlanOptions.prof.map((item, index) => (
                <Flex
                  align="center"
                  key={`${item.name}:${index}`}
                  className="plan-option-item"
                >
                  <Flex
                    align="center"
                    justify="center"
                    className="icon-wrapper dark"
                  >
                    <Icon name="ok" />
                  </Flex>
                  <span>{t(item)}</span>
                </Flex>
              ))}
            </div>
            <div className="tarrif-plan-item">
              <p className="title">{t("plan_vip_header")}</p>
              <p className="description">{t("plan_vip_target_audience")}</p>
              <div>
                <Button className="start-plan-btn light">Починай зараз</Button>
              </div>
              {config.tariffPlanOptions.enterprise.map((item, index) => (
                <Flex
                  align="center"
                  key={`${item.name}:${index}`}
                  className="plan-option-item"
                >
                  <Flex
                    align="center"
                    justify="center"
                    className="icon-wrapper"
                  >
                    <Icon name="ok" />
                  </Flex>
                  <span>{t(item)}</span>
                </Flex>
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
