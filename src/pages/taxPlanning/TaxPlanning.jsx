import { Flex } from "antd";
import "./style.scss";
import LinkComponent from "../../components/linkComponent/LinkComponent";
import taxesImage from "../../assets/images/taxesPlanMore.png";
import taxesPlanning from "../../assets/images/taxesPlanning.png";
import partneringTeam from "../../assets/images/globalPartnersList.png";
import { CONTACTS_ROUTE } from "../../routes/routes";
import Icon from "../../components/iconComponent/Icon";

export default function TaxPlanning() {
  return (
    <section className="tax-planning-page">
      <Flex className="tax-planning-page-header">
        <div className="info-part">
          <p className="title">LionsInLaw</p>
          <p className="description">
            Ваш партнер у створенні міжнародних компаній та податковому
            плануванні
          </p>
          <LinkComponent
            linkLabel="Зв'язатися з нами"
            linkValue={CONTACTS_ROUTE}
          />
        </div>
        <p className="secondary-description">
          Індивідуальні стратегії податкового планування для вашого бізнесу
        </p>
      </Flex>
      <Flex className="more-block">
        <div className="info-block">
          <p className="title">
            Дізнайтеся більше про <span className="red-text">Lionsinlaw</span>
          </p>
          <p className="description">
            Lionsinlaw - це ваш надійний партнер у створенні міжнародних
            компаній та комплексному податковому плануванні. Ми спеціалізуємося
            на забезпеченні безпроблемного процесу реєстрації компаній у різних
            юрисдикціях по всьому світу. Наші експерти надають індивідуальне
            керівництво та розробляють надійні стратегії податкового планування,
            що відповідають унікальним потребам вашого бізнесу.
          </p>
          <p className="description">
            Ми розуміємо, що кожен бізнес має свої особливості та виклики. Тому
            ми пропонуємо персоналізований підхід, орієнтований на досягнення
            оптимальних результатів для наших клієнтів. Незалежно від того, чи
            ви тільки починаєте свій шлях на міжнародному ринку, чи вже маєте
            успішний бізнес, наші фахівці допоможуть вам орієнтуватися в
            складних юридичних і податкових питаннях.
          </p>
        </div>
        <div className="image-wrapper">
          <img src={taxesImage} alt="Libra" />
        </div>
      </Flex>
      <div className="taxes-planning-why-block">
        <p className="title">
          Чому для податкового планування варто вибрати Lionsinlaw
        </p>
        <p className="description">
          Експертне керівництво та індивідуальні стратегії для оптимізації
          податкових зобов'язань вашого бізнесу
        </p>
        <Flex justify="space-between">
          <Flex vertical={true} align="center" className="item-block">
            <Icon name="experience" />
            <p className="title">Експертиза та досвід</p>
            <p className="description">
              Наша команда складається з кваліфікованих професіоналів із великим
              досвідом у сфері міжнародного податкового права, що забезпечує
              прийняття обґрунтованих рішень та ефективне управління податками..
            </p>
          </Flex>
          <Flex vertical={true} align="center" className="item-block">
            <Icon name="sub-global-network" />
            <p className="title">Глобальна мережа</p>
            <p className="description">
              - **Глобальна мережа:** Завдяки глобальній присутності та мережі
              довірених консультантів Lionsinlaw надає комплексні рішення для
              податкового планування в Європі, Америці,
              Азіатсько-Тихоокеанському регіоні та за її межами.
            </p>
          </Flex>
          <Flex vertical={true} align="center" className="item-block">
            <Icon name="client-approach" />
            <p className="title">Клієнтоорієнтований підхід:</p>
            <p className="description">
              ми надаємо пріоритет розумінню ваших бізнес-цілей і викликів,
              пропонуючи персоналізовані рішення, які відповідають вашим
              довгостроковим стратегічним цілям.
            </p>
          </Flex>
        </Flex>
      </div>
      <Flex justify="space-between" className="tax-planning-grid">
        <div className="grid-wrapper">
          <Flex vertical={true}>
            <Flex className="cell-header" align="center">
              <Icon name="tax-structure" />
              <span>Міжнародне податкове структурування:</span>
            </Flex>
            <p>
              Ми зменшуємо податкові зобов’язання і підвищуємо ефективність
              ваших міжнародних операцій. Від структурування до трансфертного
              ціноутворення – забезпечте свій бізнес нашими рішеннями.
            </p>
          </Flex>
          <Flex vertical={true} className="dark-cell transaction-block">
            <Flex className="cell-header" align="center">
                <Icon name="transaction" />
              <span>Транскордонні транзакції</span>
            </Flex>
            <p>
              Lionsinlaw оптимізує транскордонні транзакції, управління
              податками та ПДВ/GST для зменшення витрат і ризиків відповідності.
            </p>
          </Flex>
          <Flex vertical={true} className="dark-cell">
            <Flex className="cell-header" align="center">
                <Icon name="benefits" />
              <span>Податкові пільги та кредити</span>
            </Flex>
            <p>
              Наші експерти використовують податкові пільги і кредити для
              покращення фінансового стану вашого бізнесу, включаючи місцеві
              стимули та кредити на дослідження і розробки.
            </p>
          </Flex>
          <Flex vertical={true} className="reporting-wrapper">
            <Flex className="cell-header" align="center">
                <Icon name="reporting" />
              <span>Відповідність і звітність</span>
            </Flex>
            <p>
              Lionsinlaw забезпечує відповідність новим податковим нормам,
              включаючи FATCA і CRS, щоб уникнути штрафів і зберегти репутацію
              вашого бізнесу.
            </p>
          </Flex>
        </div>
        <Flex vertical={true} className="image-wrapper-block">
          <p className="main-title">
            Рішення для стратегічного податкового плануванняі{" "}
            <span className="red-text">з LionsInLaw</span>
          </p>
          <p className="description">
            Ефективне податкове планування має важливе значення для оптимізації
            прибутковості та забезпечення дотримання нормативних вимог на
            глобальних ринках. Lionsinlaw надає ряд послуг, які допоможуть вам
            орієнтуватися в складних податкових ландшафтах:
          </p>
          <img src={taxesPlanning} alt="Law taxes planning"/>
        </Flex>
      </Flex>
      <div className="grow-business">
        <p className="title">Розвивайте бізнес з Lionsinlaw</p>
        <p className="description">
          Максимізуйте фінансові можливості та забезпечте відповідність з нашими
          експертними рішеннями.
        </p>
        <Flex align="center" className="items-wrapper">
          <Flex vertical={true}>
            <Icon name="optimization" />
            <p className="item-title">Оптимізація міжнародних операцій</p>
          </Flex>
          <Flex vertical={true}>
            <Icon name="efficiency" />
            <p className="item-title">
              Фінансова ефективність та відповідність
            </p>
          </Flex>
          <Flex vertical={true}>
            <Icon name="tax-planning" />
            <p className="item-title">Стратегічне податкове планування</p>
          </Flex>
        </Flex>
      </div>
      <Flex vertical={true} className="partnering-block">
        <p className="title">Партнерство з Lionsinlaw для глобального успіху</p>
        <p className="description">
          Отримайте експертні рішення з податкового планування, що підтримають
          ваші міжнародні амбіції.
        </p>
        <LinkComponent
          linkLabel="Розпочати співпрацю"
          linkValue={CONTACTS_ROUTE}
        />
        <img src={partneringTeam} alt="Partnering team" />
      </Flex>
    </section>
  );
}
