import BlockElement from "../blockElement/BlockElement";
import "./style.scss";

export default function AsianRegion() {
  return <div className="asian-region-wrapper">
    <BlockElement
      description="Міжнародний фінансовий центр з простою податковою системою. Ідеальне місце для оптимізації вашого бізнесу та зростання на глобальному рівні."
      linkValue={""}
      title="Офшорна компанія в Сейшели"
      isDark={false}
      blockClass="seychelles"
    />
    <BlockElement
      description="Міжнародний фінансовий центр з простою податковою системою. Ідеальне місце для оптимізації вашого бізнесу та зростання на глобальному рівні."
      linkValue={""}
      title="Офшорна компанія в Мауріцій"
      isDark={false}
      blockClass="mauritius"
    />
  </div>
}