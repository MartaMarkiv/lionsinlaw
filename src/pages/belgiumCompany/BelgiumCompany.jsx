import belgiumBanner from "../../assets/images/belgiumBanner.png";
import belgiumNature from "../../assets/images/belgiumNature.png";
import belgiumTaxes from "../../assets/images/belgiumTaxes.png";
import belgiumBusiness from "../../assets/images/belgiumBusiness.png";
import belgiumGirl from "../../assets/images/belgiumGirl.png";
import userImage from "../../assets/images/User.png";
import "./style.scss";
import { Button, Flex } from "antd";
import CompanyDescriptionGrid from "../../components/companyDescriptionGrid/CompanyDescriptionGrid";
import Icon from "../../components/iconComponent/Icon";
import LinkComponent from "../../components/linkComponent/LinkComponent";
import { COMPANY_REGISTRATION_ROUTE } from "../../routes/routes";
import Faq from "../../components/faq/Faq";

export default function BelgiumCompany() {
  return (
    <section className="page-content-wrapper belgium-company-page-wrapper">
      <Flex className="belgium-header">
        <div className="header-info">
          <p className="title">
            Відкрийте Бізнес у Бельгії: Ваш Шлях до Європейського Ринку{" "}
          </p>
          <p className="description">
            Простий та надійний старт вашого бізнесу в Бельгії – мінімум
            бюрократії, максимум можливостей!
          </p>
        </div>
        <div className="image-wrapper">
          <img src={belgiumBanner} alt="Law company member" />
        </div>
      </Flex>
      <div className="belgium-company-description">
        <Flex justify="space-between" className="main-info-wrapper">
          <p className="title">
            Бельгія: ідеальне місце для бізнесу в самому серці Європи
          </p>
          <p className="description">
            Бельгія — країна, розташована в центрі Європи, з розвинутою
            економікою і стабільною політичною ситуацією. Вона є членом
            Європейського Союзу та пропонує вигідні умови для бізнесу.З
            привабливими податковими пільгами та високим рівнем фінансової
            стабільності Бельгія надає численні переваги для підприємців.
          </p>
        </Flex>
        <Flex className="secondary-part">
          <div>
            <img src={belgiumNature} alt="Belgium nature" />
          </div>
          <Flex
            vertical={true}
            justify="space-around"
            className="description-info"
          >
            <p className="sub-title">Захист ваших прав та інтересів</p>
            <p className="sub-description">
              Юридична система країни гарантує дотримання контрактів, прав
              власності та інтелектуальної власності, а також захищає від
              несанкціонованих дій з боку державних органів.
            </p>
            <Flex
              align="flex-end"
              className="tariffs-wrapper"
              justify="space-between"
            >
              <Button>
                <span>Тарифи</span>
                <Flex align="center" justify="center" className="icon-wrapper">
                  <Icon name="tariff" />
                </Flex>
              </Button>
              <div className="tariffs-wrapper-info">
                <Flex
                  align="center"
                  justify="space-between"
                  className="counts-wrapper"
                >
                  <span>310K</span>
                  <span>70%</span>
                </Flex>
                <p className="sub-description">
                  LionsInLaw гордитися високим рівнем задоволення наших
                  клієнтів.
                </p>
              </div>
            </Flex>
          </Flex>
        </Flex>
      </div>
      <CompanyDescriptionGrid
        businessDescr="Бельгія є важливим фінансовим центром Європи, з низьким рівнем бюрократії, що робить її привабливою для компаній, які шукають доступ до європейських ринків."
        businessImage={belgiumBusiness}
        financialDescr=" Фінансовий сектор у Бельгії строго регулюється Національною комісією з фінансових послуг та ринків, що забезпечує високий рівень стабільності та прозорості."
        imageRef={belgiumTaxes}
        riskDescr="Потрібно дотримуватися європейських стандартів фінансової прозорості та дотримуватися вимог щодо звітності та оподаткування."
        subDescr="Бельгія є важливим фінансовим центром Європи, з низьким рівнем бюрократії, що робить її привабливою для компаній, які шукають доступ до європейських ринків."
        title="Особливості Бельгії для вашої офшорної компанії"
        taxesDescr="Бельгія має конкурентоспроможні податкові ставки, включаючи корпоративний податок на прибуток. Існує система податкових пільг для інвесторів у дослідження та розвиток."
      />
      <div className="belgium-consultation-wrapper">
        <p className="main-title">Отримайте експертну консультацію щодо </p>
        <p className="secondary-title">створення офшорної компанії </p>
        <Flex>
          <div className="info-wrapper">
            <p className="description">
              Як експерт в області офшорних реєстрацій, ми надаємо професійну
              підтримку на кожному етапі відкриття компанії в Бельгії. Наш
              досвід та глибоке розуміння місцевих норм і вимоги вам безпечно та
              ефективно почати бізнес у цій привабливій юрисдикції.
            </p>
            <p className="secondary-description">
              Дізнайтеся про вартість і умови реєстрації вашої майбутньої
              офшорної компанії від наших експертів
            </p>
            <LinkComponent
              linkLabel="Зареєструвати Компанію"
              linkValue={`${COMPANY_REGISTRATION_ROUTE}/belgium`}
            />
          </div>
          <div className="image-wrapper">
            <img src={belgiumGirl} alt="Belgium team member" />
            <Flex className="start-block" align="center" vertical={true}>
              <img src={userImage} alt="" />
              <p>100% успішність</p>
              <div className="circle-img" />
            </Flex>
            <Flex
              vertical={true}
              align="center"
              justify="center"
              className="time-block"
            >
              <p>Підтримка</p>
              <Flex>
                <span className="hours-value">24/</span>
                <span className="day-value">7</span>
              </Flex>
            </Flex>
            <Flex className="counts-block" align="center">
              <Icon name="count-circle" />
              <div>
                <p className="count-title">+ 6.202.203,00 €</p>
                <p className="count-description">
                  Швидко, легко та з max конфіденційністю через захищені системи
                </p>
              </div>
            </Flex>
          </div>
        </Flex>
      </div>
      <Faq />
    </section>
  );
}
