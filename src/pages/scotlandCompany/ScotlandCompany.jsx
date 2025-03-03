import { Flex } from "antd";
import "./style.scss";
import scotlandNature from "../../assets/images/ScotlandNature.png";
import scotlandTaxes from "../../assets/images/ScotlandTaxes.png";
import scotlandTeam from "../../assets/images/ScotlandTeam.png";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import CompanyDescriptionGrid from "../../components/companyDescriptionGrid/CompanyDescriptionGrid";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import Faq from "../../components/faq/Faq";
import CountryTarrifList from "../../components/countryTarrifList/CountryTarrifList";

export default function ScotlandCompany() {
  return (
    <section className="scotland-company-page">
      <Flex
        className="scotland-header"
        justify="space-between"
        align="flex-end"
      >
        <Flex vertical={true}>
          <p className="title">Перетніть межі бізнесу:</p>
          <p className="sub-title"> Відкрийте офшорну компанію з</p>
          <p className="name">LionsInLaw</p>
          <p className="description">
            "Ваша ключова до глобальних можливостей та фінансової свободи"
          </p>
        </Flex>
        <div className="scotland-image" />
      </Flex>
      <CompanySubDescriptionBlock
        title={
          <p className="title">
            Реєстрація компанії в{" "}
            <span className="selected-text"> Шотландії:</span> Ваш шлях до
            успіху з <span className="selected-text"> LionsInLaw</span>
          </p>
        }
        description="Перетніть межі бізнесу з відкриттям офшорної компанії в Шотландії разом з LionsInLaw. Шотландія, частина Об'єднаного Королівства, пропонує унікальну юридичну систему, основану на прецедентному праві та шотландських законах, що відрізняється від системи Англії. Довірте свої амбіції надійному партнерству з LionsInLaw для досягнення вашого бізнесового потенціалу в Шотландії та за її межами."
        imageRef={scotlandNature}
      />
      <CompanyDescriptionGrid
        businessDescr="Шотландія має розвинені фінансові ринки та сприятливі умови
для підприємництва, зокрема в технологічному секторі.."
        businessImage={scotlandTeam}
        financialDescr="Фінансовий сектор Шотландії регулюється Financial
Conduct Authority (FCA) та іншими місцевими органами регулювання."
        imageRef={scotlandTaxes}
        riskDescr="Шотландія також дотримується міжнародних стандартів фінансової
прозорості та має свої правила щодо іноземних інвестицій."
        subDescr="Відкриття офшорної компанії в Шотландії приваблює завдяки сприятливому податковому клімату та унікальній юридичній системі з прецедентним правом."
        taxesDescr="Податкова система в Шотландії часто відрізняється від системи у решті
Великої Британії, що включає спеціальні ставки і пільги."
        title="Особливості Шотландії для вашої офшорної компанії"
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
