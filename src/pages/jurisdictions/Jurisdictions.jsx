import "./style.scss";
import { Flex, Select } from "antd";
import FlagsContainer from "../../components/flagsContainer/FlagsContainer";
import config from "../../config";
import ReasonsForChoice from "../../components/reasonsForChoice/ReasonsForChoice";

export default function Jurisdictions() {
  return <>
    <div className="jurisdictions-header-banner-wrapper">
      <Flex justify="center" align="end" className="banner" vertical={true}>
        <div className="banners-wrapper">
          <div className="lion-banner" />
          <div className="vector-banner" />
          <div className="law-lady-banner" />
        </div>
        <div className="banner-title">Оптимальні юрисдикції для вашого бізнесу</div>
        <div className="banner-description">Професійна консультація та підтримка на кожному етапі реєстрації компанії</div>
      </Flex>
    </div>
    <FlagsContainer />
    <p className="jurisdictions-description">
      Незалежно від того, де ви ведете бізнес - в Європі, Азії, Африці, на Близькому Сході чи Америці - <span className="selected"> LionsInLaw</span> створить найкращу торгову або холдингову структуру для вашого бізнесу. Ми забезпечуємо відповідність місцевим законам та правилам, надаючи професійну підтримку на кожному етапі.
    </p>
    <div className="select-region-wrapper">
      <Select placeholder="Виберіть Регіон" popupClassName="regions-list">
        {
          config.jurisdictionsRegions.map((item, index) => <Select.Option key={`${item.value}:${index}`} value={item.value}>{item.label}</Select.Option>)
        }
      </Select>
    </div>
    <ReasonsForChoice />
  </>
}