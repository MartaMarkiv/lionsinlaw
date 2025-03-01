import "./style.scss";
import BlockElement from "../blockElement/BlockElement";
import { Link } from "react-router-dom";
import { BELIZE_COMPANY_ROUTE, CURACAO_COMPANY_ROUTE, USA_COMPANY_ROUTE } from "../../routes/routes";

export default function AmericanRegion() {
  return (
    <div className="american-region-wrapper">
      <Link to={USA_COMPANY_ROUTE}>
        <BlockElement
          description="Міжнародний фінансовий центр з простою податковою системою. Ідеальне місце для оптимізації вашого бізнесу та зростання на глобальному рівні."
          linkValue={""}
          title="Офшорна компанія в USA"
          isDark={false}
          hasLink={false}
          blockClass="usa"
        />
      </Link>
      <BlockElement
        description="Відкрийте нові можливості разом з LionsInLaw: швидка та надійна реєстрація компаній у Панамі, що забезпечує глобальні перспективи та фінансові переваги."
        linkValue={""}
        title="Офшорна компанія в Панамі"
        isDark={true}
      />
      <div className="image-wrapper">
        <div className="american-region"></div>
      </div>
      <Link to={CURACAO_COMPANY_ROUTE} className="curacao-link">
        <BlockElement
          description="Маючи багаторічний досвід роботи в міжнародному бізнесі та фінансових послугах, Lionsinlaw розуміє тонкощі вимог до облікових записів торговців у різних юрисдикція."
          linkValue={""}
          title="ОФШОРНА КОМПАНІЯ Кюрасао"
          isDark={false}
          hasLink={false}
          blockClass="curacao"
        />
      </Link>
      <Link to={BELIZE_COMPANY_ROUTE}>
      <BlockElement
        description="Відкриття компанії в Белізі — це шлях до низьких податкових ставок, стабільного фінансового регулювання та доступу до міжнародних ринків, ідеальний для міжнародного бізнесу."
        linkValue={""}
        hasLink={false}
        title="Офшорна компанія в БЕЛІЗ"
        isDark={true}
        blockClass="beliz"
      />
      </Link>
      <BlockElement
        description="Відкрийте нові можливості разом з LionsInLaw: швидка та надійна реєстрація компаній у КАНАДІ що забезпечує глобальні перспективи та фінансові переваги."
        linkValue={""}
        title="ОФШОРНА КОМПАНІЯ В КанадІ"
        isDark={false}
        blockClass="canada"
      />
    </div>
  );
}
