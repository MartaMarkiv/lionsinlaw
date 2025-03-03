import { Button, Flex } from "antd";
import "./style.scss";
import czechNature from "../../assets/images/CzechNature.png";
import Faq from "../../components/faq/Faq";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import SecondaryDescriptionGrid from "../../components/secondaryDescriptionGrid/SecondaryDescriptionGrid";
import Icon from "../../components/iconComponent/Icon";

export default function CzechCompany() {
  return (
    <section className="czech-company-page-wrapper">
      <Flex vertical={true} justify="flex-end" className="czech-company-header">
        <p className="title">
          Завдяки LionsInLaw: Відкрийте Офшорну Компанію в Чехії Легко та
          Швидко!
        </p>
        <Flex className="header-part" justify="space-between" align="start">
          <p className="description">
            Ефективні рішення з міжнародною підтримкою та надійною юридичною
            консультацією
          </p>
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
      </Flex>
      <CompanySubDescriptionBlock
        description="Польща - країна в Центральній Європі з розвиненою економікою та членством в Європейському Союзі. Її цивільна правова система базується на законодавстві та конституції країни, що забезпечує стабільність і прозорість правового середовища для бізнесу та інвестицій."
        imageRef={czechNature}
        title={
          <p className="title">
            Польща: Цивільна Правова Система та Членство в ЄС
          </p>
        }
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
            <span className="selected-text">в Чехії з LionsInLaw</span>
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
