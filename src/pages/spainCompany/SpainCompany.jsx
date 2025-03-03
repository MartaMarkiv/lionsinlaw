import { Flex } from "antd";
import "./style.scss";
import spainNature from "../../assets/images/spainNature.png";
import Faq from "../../components/faq/Faq";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import SecondaryDescriptionGrid from "../../components/secondaryDescriptionGrid/SecondaryDescriptionGrid";

export default function SpainCompany() {
  return (
    <section className="spain-company-page-wrapper">
      <Flex align="center" justify="flex-end" className="spain-company-header">
        <div className="header-wrapper">
          <p className="title">
            Відкрийте нові горизонти бізнесу з LionsInLaw в Іспанії!
          </p>
          <p className="description">
            Зробіть перший крок до успіху: реєстрація офшорної компанії з нашими
            експертами
          </p>
        </div>
        <div className="header-image" />
      </Flex>
      <CompanySubDescriptionBlock
        description="Іспанія - країна в Піренейському півострові з розвиненою економікоюта доступом до європейського ринку.Іспанія має цивільну правову систему, що базується на законодавстві та конституції країни."
        imageRef={spainNature}
        title={<p className="title">Іспанія: Вхід до Європейського Ринку</p>}
        hasShadow={true}
      />
      <SecondaryDescriptionGrid
        businessDescr="Польща є важливим ринком у Центральній Європі з доступом
        до європейського ринку та розвиненою інфраструктурою."
        financialDescr="Фінансовий сектор Польщі регулюється Національним банком Польщі та іншими фінансовими органами."
        riskDescr="Польща дотримується європейських стандартів у сфері фінансової прозорості та регулює іноземні інвестиції відповідно до національного законодавства."
        subDescr="Відкриття бізнесу в Чехії приваблює підприємців своїм стратегічним розташуванням у центрі Європи, що сприяє зручному доступу до ринків ЄС і сусідніх країн. Крім того, Чехія відома своєю прогресивною бізнес-інфраструктурою та надійною юридичною системою, що сприяє стабільності і прозорості у веденні бізнесу. Не останнє місце в цьому списку займає динамічна економіка країни, яка надає сприятливі умови для розвитку та росту підприємств."
        taxesDescr="Податкова система в Польщі включає корпоративний податок та ряд інших податкових ставок для різних типів доходів."
        title={
          <p className="title">
            Переваги Офшорної Компанії{" "}
            <span className="selected-text"> в Чехії з LionsInLaw</span>
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
