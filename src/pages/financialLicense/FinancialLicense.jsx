import { Flex } from "antd";
import "./style.scss";
import Faq from "../../components/faq/Faq";
import ContactPhones from "../../components/contactPhones/ContactPhones";

export default function FinancialLicense() {
  return <>
    <div>
      <p className="sub-description">Ваш Партнер у Міжнародному Бізнесі та Фінансовому Ліцензуванні</p>
      <p className="title">LionsInLaw</p>
      <Flex align="center" justify="space-between">
        <p className="description">
          Комплексні Послуги з Реєстрації Компаній та Отримання Фінансових Ліцензій у Ключових Юрисдикціях
        </p>
        <div className="image-wrapper" />
      </Flex>
    </div>
    <Faq />
    <ContactPhones />
  </>
}