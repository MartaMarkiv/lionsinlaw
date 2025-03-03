import "./style.scss";
import { Flex } from "antd";
import LinkComponent from "../../components/linkComponent/LinkComponent";
import Icon from "../../components/iconComponent/Icon";
import clientsGroup from "../../assets/images/clientsGroup.png";
import bannerImage from "../../assets/images/traidingMarkBanner.png";
import traidingMarkExp from "../../assets/images/traidingMarkExp.png";
import lawSignet from "../../assets/images/lawSignet.png";
import DescriptionBlock from "../../components/descriptionBlock/DescriptionBlock";
import Faq from "../../components/faq/Faq";

export default function TrademarkRegistration() {
  return (
    <section className="trademark-registration-page">
      <Flex justify="space-between" className="trademark-registration-header">
        <div className="title-wrapper">
          <p className="title">LionsInLaw</p>
          <p className="description">
            Ваш Партнер у Міжнародному Бізнесі та Реєстрації Торгових Марок
          </p>
          <LinkComponent
            linkLabel="Зареєструвати торгову  марку"
            linkValue="/"
          />
          <div className="partners-wrapper">
            <p className="partners-title">довірені партнери</p>
            <Flex align="center" justify="space-between">
              <Icon name="hitech" />
              <Icon name="devwise" />
              <Icon name="invert" />
            </Flex>
          </div>
        </div>
        <Flex
          className="info-wrapper"
          vertical={true}
          align="flex-end"
          justify="space-between"
        >
          <p className="sub-description">
            Експертні Рішення для Створення Компаній та Реєстрації Торгових
            Марок у Європі, Канаді та США
          </p>
          <div className="time-info-wrapper">
            <Flex align="flex-start" className="time-wrapper" vertical={true}>
              <span className="count">1.45 K</span>
              <span className="month">/ місяць</span>
            </Flex>
            <p>Реєстрації Торгових Марок у Європі, Канаді та США</p>
          </div>
          <Flex className="clients-wapper" align="center">
            <div className="image-wrapper">
              <img src={clientsGroup} alt="Clients" />
            </div>
            <div>
              <Flex align="center">
                <Icon name="smile" />
                <span className="count">100+</span>
              </Flex>
              <p>Задоволених клієнтів</p>
            </div>
          </Flex>
        </Flex>
        <div className="banner-image">
          <img src={bannerImage} alt="Trademark banner" />
        </div>
      </Flex>
      <Flex className="trademark-experiance">
        <Flex vertical={true} justify="space-between" className="info-wrapper">
          <div className="experiance-info-wrapper">
            <p className="title">Досвід у Реєстрації Торгових Марок</p>
            <p className="description">
              Захист ваших прав інтелектуальної власності має вирішальне
              значення на сучасному глобальному ринку. Lionsinlaw пропонує
              експертне керівництво та комплексні послуги для швидкої та
              ефективної реєстрації торгових марок у Європі, Канаді та США
            </p>
          </div>
          <Flex justify="space-between">
            <Flex
              vertical={true}
              justify="space-between"
              align="center"
              className="experiance-item"
            >
              <Icon name="global-security" />
              <p className="title">Глобальний захист</p>
              <p className="description">
                Захист ваших прав інтелектуальної власності має вирішальне
                значення на сучасному конкурентному глобальному ринку.
              </p>
            </Flex>
            <Flex
              vertical={true}
              justify="space-between"
              align="center"
              className="experiance-item"
            >
              <Icon name="effective-registration" />
              <p className="title">Ефективна Реєстрація</p>
              <p className="description">
                Lionsinlaw пропонує експертне керівництво та комплексні послуги
                для швидкої реєстрації торгових марок у Європі, Канаді та США.
              </p>
            </Flex>
          </Flex>
        </Flex>
        <div className="image-wrapper">
          <img src={traidingMarkExp} alt="Law blocks" />
        </div>
      </Flex>
      <div className="choose-trademarks">
        <div className="title-block">
          <p className="title">
            чому Обрати Lionsinlaw для Реєстрації Торгової Марки?
          </p>
          <p className="description">
            Експертний Підхід до Захисту Вашого Бренду
          </p>
        </div>
        <DescriptionBlock
          description="Наша команда складається з кваліфікованих юридичних професіоналів із великим досвідом у законодавстві про торговельні марки в багатьох юрисдикціях."
          title="Юридична експертиза:"
        />
        <DescriptionBlock
          description="Lionsinlaw надає безперебійні послуги з реєстрації торгових марок на ключових ринках, включаючи Європу, Канаду та США, забезпечуючи захист вашого бренду за кордоном."
          title="Глобальне покриття:"
          isDark={true}
        />
        <DescriptionBlock
          description="Ми розуміємо важливість персоналізованого обслуговування та тісно співпрацюємо з кожним клієнтом, щоб адаптувати наші послуги з реєстрації торгових марок відповідно до їхніх конкретних потреб і цілей."
          title="Індивідуальне обслуговування:"
          isDark={true}
        />
        <DescriptionBlock
          description="Ми спрощуємо процес реєстрації, обробляємо всі документи та листування з місцевими органами влади, щоб забезпечити дотримання місцевих законів і правил щодо торговельних марок."
          title="Ефективність і відповідність"
        />
        <div className="image-wrapper-block">
          <img src={lawSignet} alt="Law signet"/>
        </div>
      </div>
      <Faq />
    </section>
  );
}
