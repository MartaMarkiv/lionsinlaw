import { Flex } from "antd";
import "./style.scss";
import LinkComponent from "../../components/linkComponent/LinkComponent";
import Icon from "../../components/iconComponent/Icon";
import lionRectangles from "../../assets/images/lionRectangles.png";
import bannerImage from "../../assets/images/traidingMarkBanner.png";
import library from "../../assets/images/library.png";
import DescriptionBlock from "../../components/descriptionBlock/DescriptionBlock";
import { CONTACTS_ROUTE } from "../../routes/routes";

export default function MerchantAccounts() {
  return (
    <section className="page-content-wrapper merchant-accounts-page">
      <Flex
        justify="space-between"
        vertical={true}
        className="merchant-accounts-header"
      >
        <Flex vertical={true} className="title-wrapper" align="flex-start">
          <p className="title">LionsInLaw</p>
          <p className="description">
            Створення міжнародних компаній та рішення для торгових рахунків
          </p>
          <p className="sub-description">
            Ми сприяємо створенню міжнародних компаній та надаємо безперебійні
            рішення для відкриття торгових рахунків по всьому світу
          </p>
          <LinkComponent
            linkLabel="Зв'язатися з нами"
            linkValue={CONTACTS_ROUTE}
          />
        </Flex>
        <div className="banner-image">
          <img src={lionRectangles} alt="LawInLions lion symbol" />
        </div>
      </Flex>
      <Flex className="spec-solutions">
        <Flex vertical={true} justify="space-between" className="info-wrapper">
          <p className="title">
            Спеціалізовані рішення для облікових записів продавців
          </p>
          <p className="description">
            Навігація в складних процесах обробки платежів і відкриття
            облікового запису продавця за кордоном може бути складною.{" "}
            <span className="selected-text">Lionsinlaw</span> спрощує цей
            процес, пропонуючи індивідуальні рішення для облікових записів
            торговців, які відповідають конкретним потребам вашого бізнесу.
            Незалежно від того, чи працюєте ви в електронній комерції, фінтех чи
            інших галузях, які потребують можливостей онлайн-платежів, наша
            команда експертів гарантує вам доступ до надійних і сумісних
            торгових послуг
          </p>
        </Flex>
        <div className="image-wrapper">
          <img src={library} alt="Library" />
        </div>
      </Flex>
      <div className="choose-merchant-account">
        <div className="title-block">
          <p className="title">
            Чому варто вибрати Lionsinlaw для потреб свого торгового облікового
            запису?
          </p>
        </div>
        <Flex
          className="phone-block-wrapper"
          align="flex-end"
          justify="flex-end"
        >
          <Flex className="contact-wrapper" vertical={true}>
            <Flex className="contact-wrapper-header" align="center">
              <Icon name="agree-hands" />
              <span>Експертні консультації для вашого бізнесу</span>
            </Flex>
            <LinkComponent
              linkLabel="Зв'язатися з нами"
              linkValue={CONTACTS_ROUTE}
            />
          </Flex>
        </Flex>
        <DescriptionBlock
          description="Ми використовуємо нашу розгалужену мережу банківських партнерів і платіжних систем по всьому світу, щоб полегшити ефективне та безпечне відкриття торгових рахунків відповідно до вашої бізнес-моделі"
          title="Глобальна мережа:"
        />
        <DescriptionBlock
          description="Забезпечення відповідності місцевим і міжнародним нормам має першочергове значення. Lionsinlaw гарантує, що налаштування вашого торгового облікового запису відповідають усім нормативним стандартам, забезпечуючи душевний спокій і безпеку для ваших транзакцій."
          title="Відповідність і безпека"
          isDark={true}
          blockClass="security-block"
        />
        <DescriptionBlock
          description="Маючи багаторічний досвід роботи в міжнародному бізнесі та фінансових послугах, Lionsinlaw розуміє тонкощі вимог до облікових записів торговців у різних юрисдикція"
          title="Знання та досвід"
          blockClass="experiance-block"
        />
        <DescriptionBlock
          description="Ми віримо в надання персоналізованого обслуговування, яке відповідає вашим унікальним бізнес-потребам. Наша команда професіоналів прагне супроводжувати вас на кожному етапі процесу відкриття торгового рахунку."
          title="Індивідуальне обслуговування:"
          isDark={true}
        />
        <DescriptionBlock
          description="Завдяки впровадженню передових технологій, Lionsinlaw забезпечує максимальну ефективність і зручність у керуванні вашим торговим обліковим записом. Наші інноваційні рішення дозволяють автоматизувати процеси, мінімізувати ручну роботу та підвищити точність обробки транзакцій."
          title="Передові технології"
        />
      </div>
      <div className="empowerment-wrapper">
        <div>
          <p className="title">
            Розширення можливостей вашого бізнесу з Lionsinlaw
          </p>
          <p className="description">
            Вибирайте комплексні рішення для торгових завдань та експертну
            підтримку для доопрацювання ваших глобальних бізнес-цілей.
          </p>
          <LinkComponent
            linkLabel="Зв'язатися з нами"
            linkValue={CONTACTS_ROUTE}
          />
        </div>
      </div>
    </section>
  );
}
