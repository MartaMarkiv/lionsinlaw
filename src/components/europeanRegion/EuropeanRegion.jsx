import "./style.scss";
import BlockElement from "../blockElement/BlockElement";
import {
  GIBRALTAR_COMPANY_ROUTE,
  IRELAND_COMPANY_ROUTE,
  ISLA_MAN_COMPANY_ROUTE,
  SCOTLAND_COMPANY_ROUTE,
  USA_COMPANY_ROUTE,
} from "../../routes/routes";
import { Link } from "react-router-dom";

export default function EuropeanRegion() {
  return (
    <div className="european-region-wrapper">
      <BlockElement
        description="Міжнародний фінансовий центр з простою податковою системою. Ідеальне місце для оптимізації вашого бізнесу та зростання на глобальному рівні."
        linkValue={""}
        title="Офшорна компанія в Англії"
        isDark={false}
        blockClass="england"
      />
      <BlockElement
        description="Міжнародний фінансовий центр з простою податковою системою. Ідеальне місце для оптимізації вашого бізнесу та зростання на глобальному рівні."
        linkValue={GIBRALTAR_COMPANY_ROUTE}
        title="Офшорна компанія в Гібралтарі"
        isDark={false}
      />
      <BlockElement
        description="Міжнародний фінансовий центр з простою податковою системою. Ідеальне місце для оптимізації вашого бізнесу та зростання на глобальному рівні."
        linkValue={""}
        title="Офшорна компанія в ІСПАНІї"
        isDark={true}
        blockClass="spain"
      />
      <BlockElement
        description="Міжнародний фінансовий центр з простою податковою системою. Ідеальне місце для оптимізації вашого бізнесу та зростання на глобальному рівні."
        linkValue={ISLA_MAN_COMPANY_ROUTE}
        title="Офшорна компанія в Острів Мен"
        isDark={false}
        blockClass="men-island"
      />
      <Link to={IRELAND_COMPANY_ROUTE}>
        <BlockElement
          description="Міжнародний фінансовий центр з простою податковою системою. Ідеальне місце для оптимізації вашого бізнесу та зростання на глобальному рівні."
          linkValue={IRELAND_COMPANY_ROUTE}
          hasLink={false}
          title="Офшорна компанія в Ірландії"
          isDark={false}
          blockClass="ireland"
        />
      </Link>
      <BlockElement
        description="Міжнародний фінансовий центр з простою податковою системою. Ідеальне місце для оптимізації вашого бізнесу та зростання на глобальному рівні."
        linkValue={SCOTLAND_COMPANY_ROUTE}
        title="Офшорна компанія в Шотландії"
        isDark={true}
      />
      <Link to={USA_COMPANY_ROUTE} className="usa-link">
      <BlockElement
        description="Міжнародний фінансовий центр з простою податковою системою. Ідеальне місце для оптимізації вашого бізнесу та зростання на глобальному рівні."
        linkValue={""}
        hasLink={false}
        title="Офшорна компанія в USA"
        isDark={false}
        blockClass="usa"
      />
      </Link>
      <BlockElement
        description="Міжнародний фінансовий центр з простою податковою системою. Ідеальне місце для оптимізації вашого бізнесу та зростання на глобальному рівні."
        linkValue={""}
        title="Офшорна компанія в ПОЛЬШІ"
        isDark={true}
        blockClass="poland"
      />
      <Link className="czech-link">
      <BlockElement
        description="Міжнародний фінансовий центр з простою податковою системою. Ідеальне місце для оптимізації вашого бізнесу та зростання на глобальному рівні."
        linkValue={""}
        title="Офшорна компанія в ЧЕХІЇ"
        isDark={false}
        hasLink={false}
        blockClass="czech"
      />
        </Link>
      <BlockElement
        description="Міжнародний фінансовий центр з простою податковою системою. Ідеальне місце для оптимізації вашого бізнесу та зростання на глобальному рівні."
        linkValue={""}
        title="Офшорна компанія в БЕЛЬГІЇ"
        isDark={true}
      />
    </div>
  );
}
