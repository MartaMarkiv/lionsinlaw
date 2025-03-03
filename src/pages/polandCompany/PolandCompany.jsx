import "./style.scss";
import polandNature from "../../assets/images/polandNature.png";
import polandTaxes from "../../assets/images/polandTaxes.png";
import polandBuilding from "../../assets/images/polandBuilding.png";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import CompanyDescriptionGrid from "../../components/companyDescriptionGrid/CompanyDescriptionGrid";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import Faq from "../../components/faq/Faq";
import CountryTarrifList from "../../components/countryTarrifList/CountryTarrifList";

export default function PolandCompany() {
  return (
    <section className="poland-company-wrapper">
      <section className="poland-company-header">
        <p className="title">
          Розпочніть вашу офшорну подорож з LionsInLaw в Польщі!
        </p>
        <p className="description">
          Офшорні Можливості Без Меж: Реєстрація Компанії з Надійним Партнером
        </p>
      </section>
      <CompanySubDescriptionBlock
        title={
          <p className="title">
            Офшорні Можливості в Серці Європи: Реєстрація Компанії в Польщі
          </p>
        }
        description="Польща - країна в Центральній Європі з розвиненою економікою та членством в Європейському Союзі. Вона має цивільну правову систему, що базується на законодавстві та конституції країни"
        imageRef={polandNature}
      />
      <CompanyDescriptionGrid
        businessDescr="Польща є важливим ринком у Центральній Європі з доступом
до європейського ринку та розвиненою інфраструктурою."
        businessImage={polandBuilding}
        financialDescr="Фінансовий сектор Польщі регулюється Національним банком Польщі та іншими фінансовими органами."
        imageRef={polandTaxes}
        riskDescr="Польща є важливим ринком у Центральній Європі з доступом
до європейського ринку та розвиненою інфраструктурою.."
        subDescr="Відкриття компанії в Польщі привабливе через її зручне географічне положення у центрі Європи та стабільну економіку. Країна має сучасну цивільну правову систему, що забезпечує стабільність та прозорість у бізнес-операціях"
        title="Особливості Польші для вашої офшорної компанії"
        taxesDescr="Податкова система в Польщі включає корпоративний податок та ряд інших податкових ставок для різних типів доходів."
      />
      <ConsultingOffshoreComp
        title="Отримайте експертну консультацію щодо створення офшорної компанії"
        description="Дізнайтеся про вартість і умови реєстрації вашої майбутньої офшорної
      компанії від наших експертів"
        linkLabel="Зареєструвати компанію"
      >
        <CountryTarrifList />
      </ConsultingOffshoreComp>
      <Faq />
    </section>
  );
}
