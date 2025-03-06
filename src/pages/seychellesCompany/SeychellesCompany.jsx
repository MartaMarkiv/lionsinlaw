import "./style.scss";
import libraImage from "../../assets/images/seychellesLinbra.png";
import { Flex } from "antd";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import CountryTarrifList from "../../components/countryTarrifList/CountryTarrifList";
import { COMPANY_REGISTRATION_ROUTE } from "../../routes/routes";
import Faq from "../../components/faq/Faq";
import SecondaryDescriptionGrid from "../../components/secondaryDescriptionGrid/SecondaryDescriptionGrid";

export default function SeychellesCompany() {
  return (
    <section className="page-content-wrapper seychelles-company-page-wrapper">
      <Flex className="seychelles-company-header" justify="space-between">
        <div>
          <p className="title">
            Сейшели – ідеальна офшорна юрисдикція для бізнесу без кордонів{" "}
          </p>
          <p className="description">
            Мінімальні дані, повна конфіденційність і просте регулювання для
            міжнародних компаній
          </p>
        </div>
        <div className="banner" />
        <p className="law-name">LionsInLaw</p>
      </Flex>
      <CompanySubDescriptionBlock
        description="Сейшелі — популярна офшорна юрисдикція в Індійському океані, знає свою політичну стабільність та вигідні умови для міжнародних інвестицій"
        imageRef={libraImage}
        title={
          <p className="title">
            Сейшелі – ваш шлях до вигідного та конфіденційного бізнесу
          </p>
        }
      />
      <SecondaryDescriptionGrid
        businessDescr="Реєстрація компанії на Сейшелах є швидким процесом і може бути завершена за кілька днів з мінімальними вимогами до документів."
        financialDescr="Сейшели мають добре розвинену фінансову інфраструктуру, що регулюється Сейшельською фінасовою службою, яка дотримується міжнародних стандартів."
        riskDescr="Хоча Сейшели є привабливою юрисдикцією для офшорних компаній, важливо дотримуватись міжнародних стандартів фінансової прозорості та боротися з відмиванням грошей"
        taxesDescr="Сейшели пропонують низькі податкові ставки, зокрема відсутність корпоративного податку на прибуток для компаній, що ведуть бізнес за межами архіпелагу."
        subDescr="Сейшелі пропонують швидку та просту процедуру реєстрації компаній з мінімальними вимогами до звітності. Відсутність податку на прибуток для міжнародного бізнесу робить цю юрисдикцію привабливою для підприємців у всьому світі. Крім того, законодавство забезпечує високий рівень конфіденційності власників компаній, що сприяє збереженню фінансової інформації в таємниці"
        title={
          <p className="title">
            Переваги Офшорної Компанії{" "}
            <span className="selected-text">в сейшилах з LionsInLaw</span>
          </p>
        }
      />
      <ConsultingOffshoreComp
        description="Дізнайтеся про вартість і умови реєстрації вашої майбутньої офшорної компанії від наших експертів"
        linkLabel="Зареєструвати компанію"
        title="Отримайте експертну консультацію щодо створення офшорної компанії"
        linkRoute={`${COMPANY_REGISTRATION_ROUTE}/seychelles`}
      >
        <CountryTarrifList />
      </ConsultingOffshoreComp>
      <Faq />
    </section>
  );
}
