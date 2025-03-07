import "./style.scss";
import gibraltarNature from "../../assets/images/GibraltarNature.png";
import gibraltarTaxes from "../../assets/images/GibraltarTaxes.png";
import gibraltarBuildings from "../../assets/images/GibraltarBuildings.png";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import CompanyDescriptionGrid from "../../components/companyDescriptionGrid/CompanyDescriptionGrid";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import Faq from "../../components/faq/Faq";
import { Flex } from "antd";
import CountryTarrifList from "../../components/countryTarrifList/CountryTarrifList";

export default function GibraltarCompany() {
  return (
    <section className="page-content-wrapper gibraltar-company-wrapper">
      <Flex
        vertical={true}
        align="flex-end"
        className="gibraltar-company-header"
      >
        <p className="title">
          <span>Заснуйте ваш бізнес у Гібралтарі разом із </span>
          <span className="selected-text">LionsInLaw</span>
        </p>
        <p className="description">
          професійна допомога у відкритті офшорних компаній, банківських
          рахунків та юридичних консультаціях у Гібралтар
        </p>
      </Flex>
      <CompanySubDescriptionBlock
        title={
          <p className="title">
            Особливості гібралтар для вашої офшорної компанії
          </p>
        }
        description="Гібралтар - британська територія з власною системою права та спеціальним статусом для бізнесу. Його правова система ґрунтується на англійському загальному праві з впливами місцевих законів."
        imageRef={gibraltarNature}
      />
      <CompanyDescriptionGrid
        businessDescr="Гібралтар має розвинені фінансові послуги та сприятливі умови для міжнародних інвестицій та фінансових технологій."
        businessImage={gibraltarBuildings}
        financialDescr="Фінансовий сектор Гібралтару регулюється Financial
Services Commission, що забезпечує стабільність та прозорість."
        imageRef={gibraltarTaxes}
        riskDescr="Гібралтар дотримується міжнародних стандартів у сфері фінансової
прозорості та має правила щодо дотримання регуляторних вимог."
        subDescr="Відкриття компанії в США відкриває безліч можливостей доступу до глобальних ринків, інноваційних технологій та економічного потенціалу."
        title="Особливості гібралтар для вашої офшорної компанії"
        taxesDescr="Податкова система в Гібралтарі приваблива для бізнесу з низькими
ставками корпоративного податку та податковими пільгами."
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
