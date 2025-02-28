import { Flex } from "antd";
import "./style.scss";

export default function ScotlandCompany() {
  return <section className="scotland-company-page">
    <Flex className="scotland-header">
      <Flex vertical={true}>
        <p className="title">Перетніть межі бізнесу:</p>
        <p className="sub-title"> Відкрийте офшорну компанію з</p>
        <p className="name">LionsInLaw</p>
        <p className="description">"Ваша ключова до глобальних можливостей та фінансової свободи"</p>
      </Flex>
      <p className="country-name">ШОТЛАНДІЇ</p>
      <div className="scotland-image" />
    </Flex>
  </section>
}