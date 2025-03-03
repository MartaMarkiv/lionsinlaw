import "./style.scss";
import usaNature from "../../assets/images/usaNature.png";
import usaTaxes from "../../assets/images/usaTaxes.png";
import usaWhiteHouse from "../../assets/images/usaWhiteHouse.png";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import CompanyDescriptionGrid from "../../components/companyDescriptionGrid/CompanyDescriptionGrid";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import Faq from "../../components/faq/Faq";
import CountryTarrifList from "../../components/countryTarrifList/CountryTarrifList";

export default function UsaCompany() {
  return (
    <section className="usa-company-wrapper">
      <section className="usa-company-header">
        <p className="title">Відкрийте нові горизонти з LionsInLaw</p>
        <p className="description">
          Реєстрація офшорної компанії в США - ваш ключ до глобального успіху
        </p>
        <div className="usa-banner" />
      </section>
      <CompanySubDescriptionBlock
        title={
          <p className="title">
            Американські Правові Системи: Різноманіття та Унікальність
          </p>
        }
        description="Сполучені Штати Америки - федеральна держава з різними юридичними системами в кожному штаті. Вона має унікальну суміш правових традицій, включаючи загальне, прецедентне та конституційне право."
        imageRef={usaNature}
      />
      <CompanyDescriptionGrid
        businessDescr="США є великим ринком з високим рівнем інновацій та доступом
до капіталу для підприємств."
        businessImage={usaWhiteHouse}
        financialDescr="Фінансовий сектор США регулюється Федеральною
резервною системою (Fed), Securities and Exchange Commission (SEC) та іншими
агентствами."
        imageRef={usaTaxes}
        riskDescr="США мають строгі вимоги до фінансової звітності та регуляції, що
може становити виклик для деяких компаній."
        subDescr="Відкриття компанії в США відкриває безліч можливостей доступу до глобальних ринків, інноваційних технологій та економічного потенціалу."
        taxesDescr="Податкова система в США складна і включає федеральний
корпоративний податок та податки на рівні штатів."
        title="Особливості США для вашої офшорної компанії"
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
