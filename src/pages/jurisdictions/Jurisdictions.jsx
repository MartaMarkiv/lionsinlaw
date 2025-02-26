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

export default function Jurisdictions() {
  const [region, setRegion] = useState(null);

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
      <div className="jurisdictions-header-banner-wrapper">
        <Flex justify="center" align="end" className="banner" vertical={true}>
          <div className="banners-wrapper">
            <div className="lion-banner" />
            <div className="vector-banner" />
            <div className="law-lady-banner" />
          </div>
          <div className="banner-title">
            Оптимальні юрисдикції для вашого бізнесу
          </div>
          <div className="banner-description">
            Професійна консультація та підтримка на кожному етапі реєстрації
            компанії
          </div>
        </Flex>
      </div>
      <FlagsContainer />
      <p className="jurisdictions-description">
        Незалежно від того, де ви ведете бізнес - в Європі, Азії, Африці, на
        Близькому Сході чи Америці -{" "}
        <span className="selected"> LionsInLaw</span> створить найкращу торгову
        або холдингову структуру для вашого бізнесу. Ми забезпечуємо
        відповідність місцевим законам та правилам, надаючи професійну підтримку
        на кожному етапі.
      </p>
      <div className="select-region-wrapper">
        <Select
          placeholder="Виберіть Регіон"
          popupClassName="regions-list"
          onChange={changeRegion}
          value={region}
        >
          {config.jurisdictionsRegions.map((item, index) => (
            <Select.Option key={`${item.value}:${index}`} value={item.value}>
              {item.label}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div className="regions-wrapper">{getRegionComponent()}</div>
      <ReasonsForChoice />
      <GetConsultation />
      <Faq />
    </>
  );
}
