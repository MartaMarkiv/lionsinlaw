import { Flex } from "antd";
import "./style.scss";
import belizNature from "../../assets/images/belizNature.png";
import Faq from "../../components/faq/Faq";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import SecondaryDescriptionGrid from "../../components/secondaryDescriptionGrid/SecondaryDescriptionGrid";

export default function BelizeCompany() {
  return (
    <section className="belize-company-page-wrapper">
      <Flex align="center" justify="flex-end" className="belize-company-header">
        <Flex vertical={true} align="flex-start" className="header-wrapper">
          <p className="title">Перетніть межі: Відкрийте офшорну компанію в</p>
          <p className="title second">
            Беліз з <span className="selected-text">LionsInLaw</span>
          </p>
          <p className="description">
            Юридична захищеність та глобальні можливості для вашого бізнесу
          </p>
        </Flex>
      </Flex>
      <CompanySubDescriptionBlock
        description="Беліз, країна в Центральній Америці, відома своєю привабливою офшорною юрисдикцією. Тут поєднується суміш правових традицій, включаючи вплив англійського загального права та місцевих законів."
        imageRef={belizNature}
        title={
          <p className="title">
            Беліз: Ваша Глобальна Офшорна Юрисдикція з Перевагами Англійського
            та Локального Права
          </p>
        }
        hasShadow={true}
      />
      <SecondaryDescriptionGrid
        businessDescr="Беліз привабливий для офшорних бізнесів з низькими
витратами на адміністративні послуги та доступом до американських ринків."
        financialDescr="Офшорна компанія в Белізі може скористатися низькими податковими
ставками та відсутністю податку на прибуток для міжнародних доходів."
        riskDescr="Беліз зобов'язаний дотримуватися міжнародних стандартів у сфері
фінансової прозорості та боротьби з відмиванням грошей."
        subDescr="Відкриття компанії в Белізі — це шлях до низьких податкових ставок, стабільного фінансового регулювання та доступу до міжнародних ринків, ідеальний для міжнародного бізнесу."
        taxesDescr="Офшорна компанія в Белізі може скористатися низькими податковими
ставками та відсутністю податку на прибуток для міжнародних доходів."
        title={
          <Flex className="title" vertical={true}>
            <p>Вигідна юрисдикція для вашого бізнесу: Створення компаній </p>
            <p className="selected-text">Беліз з </p>
            <p className="company-name">LionsInLaw</p>
          </Flex>
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
