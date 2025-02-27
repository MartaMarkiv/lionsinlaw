import { Flex } from "antd";
import LinkComponent from "../../components/linkComponent/LinkComponent";
import { CONTACTS_ROUTE } from "../../routes/routes";
import "./style.scss";
import Icon from "../../components/iconComponent/Icon";
import ContactPhones from "../../components/contactPhones/ContactPhones";
import bankAccountBanner from "../../assets/images/openBankBanner.png";
import lawMember from "../../assets/images/lawMember.png";
import lawLady from "../../assets/images/lawLady2.png";
import contactGirl from "../../assets/images/contactGirl.png";
import bankBuilding from "../../assets/images/bankKolons.png";

export default function BankAccounts() {
  return (
    <div className="create-bank-account-page">
      <Flex align="start" justify="space-between" className="bank-account-header">
        <div className="title">
          <span className="selected-text">LionsInLaw</span> Ваш надійний партнер
          у створенні міжнародної компанії
          <p className="description">
            Експертні послуги з реєстрації компаній та відкриття банківських
            рахунків по всьому світу
          </p>
          <LinkComponent
            linkLabel="Зв'язатися з нами"
            linkValue={CONTACTS_ROUTE}
          />
        </div>
        <div className="create-bank-banner">
          <img src={bankAccountBanner} alt="Create bank account"/>
        </div>
      </Flex>
      <div className="copmany-experts">
        <p className="title">
          LionsInLaw - <span className="uppercase"> Експерти зі створення міжнародних компаній</span>
        </p>
        <p className="description">
          Ми спеціалізуємося на сприянні створенню міжнародних компаній та
          забезпеченні безперебійних рішень для відкриття банківських рахунків.
          Наші послуги охоплюють клієнтів у всьому світі, надаючи професійну
          підтримку на кожному етапі. Ми сприяємо плавному та швидкому відкриттю
          банківських рахунків відповідно до потреб вашого бізнесу, забезпечуючи
          доступ до основних фінансових послуг без зайвих затримок і ускладнень.
        </p>
        <Flex align="start" justify="space-between">
          <Flex align="center" justify="space-around" className="experts-types-wrapper">
            <Flex vertical={true} align="center" className="experts-type-item">
              <Icon name="agreement" />
              <p>Досвід створення міжнародної компанії</p>
            </Flex>
            <Flex vertical={true} align="center" className="experts-type-item">
              <Icon name="bank-account" />
              <p>Безперешкодне відкриття банківських рахунків</p>
            </Flex>
          </Flex>
          <p className="sub-description">
            Відкриття банківського рахунку з <span className="selected-text"> Lionsinlaw</span> стає простим завдяки нашій глобальній мережі банківських партнерів
          </p>
        </Flex>
        <div className="experts-image">
          <img src={lawMember} alt="LionsInLaw member" />
        </div>
        <img src={lawLady} alt="Law lady" className="law-lady-image"/>
      </div>
      <div className="international-business">
        <Flex className="international-business-title" align="center" vertical={true}>
          <span>Започаткуйте свій міжнародний бізнес з </span>
          <div>
          <span className="selected-text">LionsInLaw : </span>
          <span>надійна підтримка стартапів та </span>
          </div>
          
          <span>корпорацій у глобальному зростанні.</span>
        </Flex>
        <Flex className="startaps-wrapper" justify="space-between" align="start">
          <p>
            Від стартапів до корпорацій - ми підтримуємо ваші глобальні амбіції
            з експертними послугами зі створення компанії та відкриття
            банківського рахунку.
          </p>
          <Flex className="contact-experts" vertical={true}>
            <Flex align="start" justify="space-between">
              <p>
                Експерти в створенні компаній та відкритті банківських рахунків,
                готові допомогти вам сьогодні!
              </p>
              <img src={contactGirl} alt="Contact us" />
            </Flex>
            <LinkComponent
              linkLabel="Зв'язатися з нами"
              linkValue={CONTACTS_ROUTE}
            />
          </Flex>
        </Flex>
        <img src={bankBuilding} alt="Bank building" className="bank-building"/>
      </div>
      <div className="why-lionsinlaw-wrapper">
        <Flex align="start" justify="space-between" className="why-lionsinlaw">
          <div>
            <p className="title">Чому обирають <span className="selected-text">Lionsinlaw</span>?</p>
            <p className="description">
              Професійні консультації та глобальне охоплення для вашого успіху з
              <span className="selected-text"> LionsInLaw</span>
            </p>
          </div>
          <div className="selected-block customer-oriented">
            <p className="title">Клієнтоорієнтований підхід</p>
            <p className="description">
              Ми розуміємо унікальні потреби наших клієнтів і прагнемо надавати
              виняткові послуги та цінності
            </p>
          </div>
        </Flex>
        <Flex align="flex-start" justify="space-between" className="expert-guidance-wrapper">
          <Flex vertical={true}  align="flex-end" className="selected-block expert-guidance">
            <p className="title">Експертне керівництво</p>
            <p className="description">
              Наша команда складається з юридичних і фінансових експертів, які
              надають індивідуальні консультації та підтримку під час створення
              компанії та банківського процесу.
            </p>
          </Flex>
          <div className="expert-guidance-item">
            <p className="title">надійність</p>
            <p className="description">
              Ми віддаємо пріоритет ефективності та надійності, забезпечуючи
              точне та вчасне створення вашої компанії та відкриття банківського
              рахунку.
            </p>
          </div>
          <div className="expert-guidance-item">
            <p className="title">Глобальне охоплення:</p>
            <p className="description">
              Маючи присутність у ключових юрисдикціях по всьому світу, ми
              пропонуємо комплексні рішення, які відповідають місцевим
              нормативним вимогам і міжнародним стандартам.
            </p>
          </div>
        </Flex>
      </div>
      <div className="ask-bank-account-wrapper">
        <div>
        <p className="title">
          Забезпечте свої глобальні амбіції з Lionsinlaw - вашим надійним
          партнером у міжнародних бізнес-рішеннях
        </p>
        <p className="description">
          Замовлення банківського рахунку: Простіше, швидше, надійніше з нашою
          експертною підтримкою.
        </p>
        <LinkComponent linkLabel="Замовити" linkValue={CONTACTS_ROUTE} />
        </div>
      </div>
      <ContactPhones />
    </div>
  );
}
