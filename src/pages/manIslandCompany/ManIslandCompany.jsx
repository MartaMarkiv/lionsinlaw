import { Flex } from "antd";
import "./style.scss";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import manIslandNature from "../../assets/images/men-island.png";
import manIslandPeople from "../../assets/images/men-island-people.png";
import manEarth from "../../assets/images/men-earth.png";
import CompanyDescriptionGrid from "../../components/companyDescriptionGrid/CompanyDescriptionGrid";

export default function ManIslandCompany() {
  return (
    <div className="isle-man-company">
      <Flex justify="space-between" className="banner-wrapper">
        <div className="man-company-wrapper">
          <Flex vertical={true}>
            <p className="sub-title">Створіть вашу офшорну компанію на </p>
            <p className="company-name">острові Мен</p>
          </Flex>
          <p className="description">
            Оптимізуйте свій бізнес з нашими експертними послугами реєстрації
            компаній на Острові Мен. Глобальні можливості, податкові переваги та
            надійний партнер
          </p>
        </div>
        <Flex
          className="company-sub-header"
          vertical={true}
          justify="space-between"
        >
          <p className="title">LionsInLaw</p>
          <div>
            <p className="count">1000+</p>
            <p className="count-label">задоволених клієнтів</p>
          </div>
        </Flex>
        <div className="vector-wrapper" />
      </Flex>
      <CompanySubDescriptionBlock
        title={
          <p className="title">
            Відкрийте нові горизонти з офшорною компанією на острові Мен
          </p>
        }
        description="Острів Мен є коронною залежністю Британії зі своєю юридичною системою, що базується на англійському загальному праві. Ця система використовує прецедентне право, забезпечуючи стабільність і передбачуваність. Це створює сприятливі умови для розвитку бізнесу."
        imageRef={manIslandNature}
      />
      <CompanyDescriptionGrid
        businessDescr="Острів Мен відомий своїми привабливими умовами для офшорних компаній, з низькими податковими ставками та конфіденційністю."
        businessImage={manEarth}
        financialDescr="Фінансовий сектор на Острові Мен строго регулюється відповідно до нормативних вимог, що встановлюються урядом Гібралтару."
        imageRef={manIslandPeople}
        riskDescr="Існують міжнародні стандарти в області фінансової та фіскальної прозорості, які потрібно дотримуватися при діяльності на Острові Мен"
        subDescr="Острів Мен забезпечує стабільну юридичну систему на основі англійського права та суворе регулювання фінансового сектора, ідеальне середовище для успішного розвитку бізнесу."
        taxesDescr="Острів Мен пропонує адміністративні послуги і ставки податків, які дуже низькі і в адміністративній зон"
        title="Переваги та Виклики Відкриття Офшорної Компанії на"
        company="Острові Мен"
      />
    </div>
  );
}
