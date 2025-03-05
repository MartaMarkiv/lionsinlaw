import "./style.scss";
import englandNature from "../../assets/images/englandNature.png";
import englandTaxes from "../../assets/images/englandTaxes.png";
import englandBuilding from "../../assets/images/englandBuilding.png";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import CompanyDescriptionGrid from "../../components/companyDescriptionGrid/CompanyDescriptionGrid";
import Faq from "../../components/faq/Faq";
import { Flex } from "antd";
import LinkComponent from "../../components/linkComponent/LinkComponent";
import { COMPANY_REGISTRATION_ROUTE } from "../../routes/routes";

export default function EnglandCompany() {
  return (
    <>
      <section className="england-company-wrapper">
        <Flex
          className="england-company-header"
          vertical={true}
          align="flex-end"
        >
          <Flex className="title-wrapper" vertical={true}>
            <p className="title">
              Створення офшорної компанії в Англії: Переваги та можливості
            </p>
            <p className="description">
              Юридична захищеність та глобальні можливості для вашого бізнесу
            </p>
          </Flex>
        </Flex>
        <CompanySubDescriptionBlock
          title={<p className="title">Відкрийте свій бізнес у Англії</p>}
          description="Англія є частиною Об'єднаного Королівства Великої Британії та Північної Ірландії. Вона має багату історію і впливову правову систему, яка включає елементи загального права та прецедентного права. /n
        Англія має загальну правову систему, яка базується на прецедентному праві. Корпоративне законодавство в Англії добре розвинене, з детальними правилами щодо утворення та управління компаніями"
          imageRef={englandNature}
        />
        <CompanyDescriptionGrid
          businessDescr="Англія має розвинені фінансові ринки та доступ до міжнародних ринків капіталу. Існує можливість створення різних типів компаній, включаючи публічні та приватні."
          businessImage={englandBuilding}
          financialDescr="Фінансовий сектор Англії суворо регулюється урядом та Фінансовою повноважною службою Великої Британії (FCA), що забезпечує стабільність і прозорість в фінансових операціях"
          imageRef={englandTaxes}
          riskDescr="Англія дотримується міжнародних стандартів у сфері протидії відмиванню грошей і боротьби з фінансуванням тероризму. Крім того, можуть існувати певні адміністративні обмеження для іноземних інвесторів у певних секторах."
          subDescr="Детальний огляд процесу реєстрації компанії в Англії через онлайн-систему Companies House та переваги корпоративного податку на рівні 19%, що забезпечує конкурентоспроможність і привабливість для бізнесу."
          title="Створення компанії в Англії: Податкові переваги та практичні аспекти"
          taxesDescr="Корпоративний податок в Англії становить 19% (станом на 2024 рік). Існує система податкових льгот для малих компаній та інвестиційних проектів."
        />
      </section>

      <Flex className="england-consulting" align="center" justify="flex-end">
        <div>
          <p className="title">
            Отримайте експертну консультацію щодо створення офшорної компанії{" "}
            <span className="selected-text">LionsInLaw</span>
          </p>
          <p className="description">
            Дізнайтеся про вартість і умови реєстрації вашої майбутньої офшорної
            компанії від наших експертів
          </p>
          <LinkComponent
            linkLabel="Зареєструвати компанію"
            linkValue={`${COMPANY_REGISTRATION_ROUTE}/england`}
          />
        </div>
      </Flex>
      <Faq />
    </>
  );
}
