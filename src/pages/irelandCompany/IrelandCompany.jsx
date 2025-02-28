import { Flex } from "antd";
import "./style.scss";
import Icon from "../../components/iconComponent/Icon";
import irelandNature from "../../assets/images/iralendNature.png";
import iralendTaxes from "../../assets/images/iralendTaxes.png";
import irelandBusiness from "../../assets/images/men-in-green.png";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import CompanyDescriptionGrid from "../../components/companyDescriptionGrid/CompanyDescriptionGrid";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import Faq from "../../components/faq/Faq";

export default function IrelandCompany() {
  return <section className="ireland-company-wrapper">
    <section className="ireland-company-header">
      <Flex>
        <Flex vertical={true}>
          <p className="sub-title">Започаткуйте свою офшорну компанію в Ірландії з </p>
          <p className="title">LionsInLaw</p>
          <p className="description">Ефективні рішення для міжнародного бізнесу та надійна підтримка на кожному кроці</p>
        </Flex>
        <div className="secondary-banner"></div>
      </Flex>
      <Flex>
        <div className="mountain-banner"></div>
        <div>
          <p className="description">
            Ефективне обслуговування вашої офшорної компанії на 1 або 2 роки з <span className="selected-text"> LionsInLaw</span>
          </p>
          <Flex align="center" justify="space-between">
            <span>Тарифи</span>
            <Icon name="tariff" />
          </Flex>
        </div>
      </Flex>
    </section>
    <CompanySubDescriptionBlock
      title={<p className="title"><span className="selected-text"> Ірландія:</span> Сильна правова підтримка для вашої офшорної компанії </p>}
      description="Ірландія - суверенна держава в Західній Європі, яка є членом Європейського Союзу і має суміш правових традицій, включаючи загальне право та елементи європейського права"
      imageRef={irelandNature}
    />
    <CompanyDescriptionGrid
      businessDescr="Ірландія має розвинені фінансові ринки та сприятливі умови для міжнародних інвестицій."
      businessImage={irelandBusiness}
      financialDescr="Фінансовий сектор Ірландії регулюється Центральним банком Ірландії та є частиною європейської системи фінансового нагляду"
      imageRef={iralendTaxes}
      riskDescr="Ірландія дотримується міжнародних стандартів у сфері фінансової та фіскальної прозорості, а також має правила щодо залучення іноземних інвестицій"
      subDescr="Відкрийте нові горизонти для вашого бізнесу з вигодами ірландської юрисдикції"
      taxesDescr="Податкова система Ірландії приваблива для бізнесу, з низькими
ставками корпоративного податку та рядом податкових пільг для технологічних компаній."
      title="основні переваги та практичні Аспекти реєстрації компанії"
      company="ірландії"
    />
    <ConsultingOffshoreComp />
    <Faq />
  </section>
}