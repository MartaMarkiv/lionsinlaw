import { Button, Flex } from "antd";
import "./style.scss";
import panamaNature from "../../assets/images/panamaNature.png";
import Faq from "../../components/faq/Faq";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import SecondaryDescriptionGrid from "../../components/secondaryDescriptionGrid/SecondaryDescriptionGrid";
import Icon from "../../components/iconComponent/Icon";

export default function PanamaCompany() {
  return (
    <section className="panama-company-page-wrapper">
      <Flex
        vertical={true}
        justify="space-between"
        align="flex-end"
        className="panama-company-header"
      >
        <Flex vertical={true} align="flex-start" className="header-wrapper">
          <p className="title">
            Розпочніть нову пригоду з офшорною компанією в Панамі
          </p>
          <p className="description">
            Відкрийте нові можливості разом з LionsInLaw: швидка та надійна
            реєстрація компаній у Панамі, що забезпечує глобальні перспективи та
            фінансові переваги
          </p>
        </Flex>
        <div className="tariff-block">
          <p>
            Ефективне обслуговування вашої офшорної компанії на 1 або 2 роки з{" "}
            <span className="selected-text">LionsInLaw</span>
          </p>
          <Flex
            className="tariff-select"
            justify="space-between"
            align="center"
          >
            <span>Тарифи</span>
            <Button icon={<Icon name="tariff" />} />
          </Flex>
        </div>
      </Flex>
      <CompanySubDescriptionBlock
        description="Панама, центральноамериканська країна з привабливою офшорною юрисдикцією, має унікальну правову систему, яка поєднує елементи цивільного та романського права з елементами загального права. Ця комбінація робить Панаму привабливим місцем для ведення бізнесу та реєстрації офшорних компаній"
        imageRef={panamaNature}
        title={
          <p className="title">
            Панама: Ваш ключ до успіху в привабливій офшорній юрисдикції
            Центральної Америки
          </p>
        }
        hasShadow={true}
      />
      <SecondaryDescriptionGrid
        businessDescr="Панама приваблива для міжнародних бізнесів з низькими
витратами на адміністративні послуги та доступом до латиноамериканських ринків."
        financialDescr="Фінансовий сектор Панами регулюється
Національними банком Панами та іншими регуляторами."
        riskDescr="Панама зобов'язана дотримуватися міжнародних стандартів у сфері
фінансової прозорості та боротьби з відмиванням грошей."
        subDescr="Відкриття бізнесу в Панамі забезпечує стратегічне розташування для міжнародної торгівлі завдяки Панамському каналу, що сполучає Атлантичний і Тихий океани. Стабільна економіка і політична ситуація в країні створюють сприятливе середовище для інвесторів. Панама також пропонує сучасну інфраструктуру та висококваліфіковану робочу силу, що сприяє ефективному веденню бізнесу."
        taxesDescr="Офшорна компанія в Панамі може скористатися низькими податковими
ставками та конфіденційністю."
        title={
          <p className="title">
            Переваги Офшорної Компанії{" "}
            <span className="selected-text">в Панамі з LionsInLaw</span>
          </p>
        }
      />
      <ConsultingOffshoreComp
        title="Отримайте експертну консультацію щодо створення офшорної компанії"
        description="Дізнайтеся про вартість і умови реєстрації вашої майбутньої офшорної
      компанії від наших експертів"
        linkLabel="Зареєструвати компанію"
      />
      <Faq />
    </section>
  );
}
