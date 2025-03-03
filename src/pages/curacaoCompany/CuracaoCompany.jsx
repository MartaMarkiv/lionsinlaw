import "./style.scss";
import curacaoNature from "../../assets/images/curacaoNature.png";
import curacaoTaxes from "../../assets/images/curacaoTaxes.png";
import curacaoBuildings from "../../assets/images/curacaoBuildings.png";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import CompanyDescriptionGrid from "../../components/companyDescriptionGrid/CompanyDescriptionGrid";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import Faq from "../../components/faq/Faq";

export default function CuracaoCompany() {
  return (
    <section className="curacao-company-wrapper">
      <section className="curacao-company-header">
        <p className="title">
          Перетворіть мрію на реальність: відкрийте офшорну компанію з
          LionsInLaw у Кюракао!
        </p>
        <p className="description">
          Експертиза, яка змінює ваш бізнес у глобальний успіх. Довіртеся
          професіоналам в LionsInLaw
        </p>
      </section>
      <CompanySubDescriptionBlock
        title={
          <p className="title">
            Кюракао: Карибський Офшор із Нідерландським Правом
          </p>
        }
        description="Кюракао - це карибський острів, що входить до складу Нідерландського королівства. Юридична система острова ґрунтується на нідерландському цивільному праві з деякими місцевими варіаціями."
        imageRef={curacaoNature}
      />
      <CompanyDescriptionGrid
        businessDescr="Кюрасао є привабливим місцем для офшорних інвестицій з
високим рівнем конфіденційності та доступом до міжнародних ринків."
        businessImage={curacaoBuildings}
        financialDescr="Фінансовий сектор Кюрасао регулюється
Центральним банком Кюрасао та іншими регуляторами."
        imageRef={curacaoTaxes}
        riskDescr="Кюрасао має строгі вимоги до дотримання міжнародних стандартів
        у сфері фінансової прозорості та правил щодо іноземних інвестицій."
        subDescr="Податкова система на Кюрасао включає корпоративний податок та інші податкові ставки, які регулюються місцевим законодавством."
        title="Особливості kuracao для вашої офшорної компанії"
        taxesDescr="Податкова система на Кюрасао включає корпоративний податок та інші податкові ставки, які регулюються місцевим законодавством."
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
