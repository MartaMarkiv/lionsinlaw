import { useState } from "react";
import "./style.scss";
import { Flex, Select } from "antd";
import FlagsContainer from "../../components/flagsContainer/FlagsContainer";
import config from "../../config";
import ReasonsForChoice from "../../components/reasonsForChoice/ReasonsForChoice";
import GetConsultation from "../../components/getConsultation/GetConsultation";
import Faq from "../../components/faq/Faq";
import EuropeanRegion from "../../components/europeanRegion/EuropeanRegion";
import AmericanRegion from "../../components/americanRegion/AmericanRegion";
import AsianRegion from "../../components/asianRegion/AsianRegion";
import { useTranslation } from "react-i18next";

export default function Jurisdictions() {
  const [region, setRegion] = useState(null);

  const { t } = useTranslation();

  const changeRegion = (value) => {
    setRegion(value);
  };

  const getRegionComponent = () => {
    switch (region) {
      case "europe":
        return <EuropeanRegion />;
      case "asia":
        return <AsianRegion />;
      case "america":
        return <AmericanRegion />;
    }
  };
  return (
    <>
      <div className="page-content-wrapper jurisdictions-header-banner-wrapper">
        <Flex justify="center" align="end" className="banner" vertical={true}>
          <div className="banners-wrapper">
            <div className="lion-banner" />
            <div className="vector-banner" />
            <div className="law-lady-banner" />
          </div>
          <div className="banner-title">{t("jurisdictions_1")}</div>
          <div className="banner-description">{t("jurisdictions_2")}</div>
        </Flex>
      </div>
      <FlagsContainer />
      <p className="jurisdictions-description">
        {t("jurisdictions_3")}
        <span className="selected"> LionsInLaw</span>
        {t("jurisdictions_3.1")}
      </p>
      <div className="page-content-wrapper select-region-wrapper">
        <Select
          placeholder={t("jurisdictions_4")}
          popupClassName="regions-list"
          onChange={changeRegion}
          value={region}
        >
          {config.jurisdictionsRegions.map((item, index) => (
            <Select.Option key={`${item.value}:${index}`} value={item.value}>
              {t(item.translationValue)}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div className="page-content-wrapper regions-wrapper">
        {getRegionComponent()}
      </div>
      <ReasonsForChoice />
      <GetConsultation />
      <Faq />
    </>
  );
}
