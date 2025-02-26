import { Flex } from "antd";
import LinkComponent from "../../components/linkComponent/LinkComponent";
import { CONTACTS_ROUTE } from "../../routes/routes";
import "./style.scss";
import Icon from "../../components/iconComponent/Icon";
import ContactPhones from "../../components/contactPhones/ContactPhones";

export default function BankAccounts() {
  return <>
  <div className="bank-account-header">
    <p className="title">
      <span className="selected-text">LionsInLaw</span> Ваш надійний партнер у створенні міжнародної компанії
      <p className="description">
        Експертні послуги з реєстрації компаній та відкриття банківських рахунків по всьому світу
      </p>
      <LinkComponent linkLabel="Зв'язатися з нами" linkValue={CONTACTS_ROUTE}/>
    </p>
  </div>
  <div className="copmany-experts">
    <p className="title">
      LionsInLaw - Експерти зі створення міжнародних компаній
    </p>
    <p className="description">
      ми спеціалізуємося на сприянні створенню міжнародних компаній та забезпеченні безперебійних рішень для відкриття банківських рахунків. Наші послуги охоплюють клієнтів у всьому світі, надаючи професійну підтримку на кожному етапі. Ми сприяємо плавному та швидкому відкриттю банківських рахунків відповідно до потреб вашого бізнесу, забезпечуючи доступ до основних фінансових послуг без зайвих затримок і ускладнень.
    </p>
    <Flex align="center">
      <Flex vertical={true} align="center">
        <Icon name=""/>
        <p>Досвід створення міжнародної компанії</p>
      </Flex>
      <Flex vertical={true} align="center">
        <Icon name=""/>
        <p>Безперешкодне відкриття банківських рахунків</p>
      </Flex>
    </Flex>
  </div>
  <div className="international-business">
    <Flex>
      <span>Започаткуйте свій міжнародний бізнес з </span>
      <span>LionsInLaw :  </span>
      <span>надійна підтримка стартапів та </span>
      <span>корпорацій у глобальному зростанні.</span>
    </Flex>
    <div>
      <p>
        Від стартапів до корпорацій - ми підтримуємо ваші глобальні амбіції з експертними послугами зі створення компанії та відкриття банківського рахунку.
      </p>
      <Flex className="contact-experts">
        <Flex align="start" justify="space-between">
          <p>Експерти в створенні компаній та відкритті банківських рахунків, готові допомогти вам сьогодні!</p>
          <img src="" alt=""/>
        </Flex>
        <LinkComponent linkLabel="Зв'язатися з нами" linkValue={CONTACTS_ROUTE}/>
      </Flex>
    </div>
    <img src="" alt=""/>
  </div>
  <div>
    <Flex align="start" justify="space-between" className="why-lionsinlaw">
      <div>
        <p>Чому обирають Lionsinlaw?</p>
        <p>Професійні консультації та глобальне охоплення для вашого успіху з LionsInLaw</p>
      </div>
      <div>
        <p>Клієнтоорієнтований підхід</p>
        <p>Ми розуміємо унікальні потреби наших клієнтів і прагнемо надавати виняткові послуги та цінності</p>
      </div>
    </Flex>
    <Flex align="start" justify="space-between">
      <div>
        <p>Експертне керівництво</p>
        <p>Наша команда складається з юридичних і фінансових експертів, які надають індивідуальні консультації та підтримку під час створення компанії та банківського процесу.</p>
      </div>
      <div>
        <p>надійність</p>
        <p>ми віддаємо пріоритет ефективності та надійності, забезпечуючи точне та вчасне створення вашої компанії та відкриття банківського рахунку.</p>
      </div>
      <div>
        <p>Глобальне охоплення:</p>
        <p>Маючи присутність у ключових юрисдикціях по всьому світу, ми пропонуємо комплексні рішення, які відповідають місцевим нормативним вимогам і міжнародним стандартам.</p>
      </div>
    </Flex>
  </div>
  <div className="ask-bank-account-wrapper">
    <p className="title">
      Забезпечте свої глобальні амбіції з Lionsinlaw - вашим надійним партнером у міжнародних бізнес-рішеннях
    </p>
    <p className="description">
      Замовлення банківського рахунку: Простіше, швидше, надійніше з нашою експертною підтримкою.
    </p>
    <LinkComponent linkLabel="Замовити" linkValue={CONTACTS_ROUTE}/>
  </div>
  <ContactPhones />
  </>
}