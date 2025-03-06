import Faq from "../../components/faq/Faq";
import "./style.scss";
import { Flex } from "antd";
import Icon from "../../components/iconComponent/Icon";
import canadaCastle from "../../assets/images/canadaCastle.png";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import CountryTarrifList from "../../components/countryTarrifList/CountryTarrifList";
import { COMPANY_REGISTRATION_ROUTE } from "../../routes/routes";

export default function CanadaCompany() {
  return (
    <section className="canada-company-page">
      <div className="canada-company-header-wrapper">
        <div className="canada-company-header">
          <p className="title">
            Канада: Стабільна та вигідна юрисдикція для міжнародного бізнесу
          </p>
          <p className="description">
            Канада пропонує високий рівень життя, стабільну правову систему та
            вигідні умови для ведення бізнесу з поміркованими податковими
            ставками та доступом до великих ринків
          </p>
        </div>
      </div>
      <Flex className="theory-practice-wrapper" justify="space-between">
        <div className="image-wrapper">
          <img src={canadaCastle} alt="Canada castle" />
          <div className="shadow" />
        </div>
        <div className="info-wrapper">
          <p className="title">Теорія і практика на Розвиток вашого бізнесу</p>
          <p className="description">
            Якщо ви тільки починаєте будувати свій бізнес або хочете його
            масштабувати, наш фахівці допоможуть уникнути помилок
          </p>
          <Flex className="grid-wrapper theory-item" align="center">
            <div className="icon-wrapper">
              <Icon name="bank-dollar" />
            </div>
            <div>
              <p className="item-title">Оподаткування</p>
              <p className="item-description">
                Канада має помірковані податкові ставки, з корпоративним
                податком на прибуток близько 15%, а також надає різні податкові
                пільги для малого та середнього бізнесу.
              </p>
            </div>
          </Flex>
          <Flex className="grid-wrapper theory-item" align="center">
            <div className="icon-wrapper">
              <Icon name="libra" />
            </div>
            <div>
              <p className="item-title">Регулювання фінансового сектору</p>
              <p className="item-decription">
                Фінансовий сектор Канади суворо регулюється Федеральною комісією
                з цінних паперів та іншими органами, що забезпечують
                стабільність і безпеку фінансових послуг.
              </p>
            </div>
          </Flex>
          <Flex className="grid-wrapper theory-item" align="center">
            <div className="icon-wrapper">
              <Icon name="business" />
            </div>
            <div>
              <p className="item-title">Преференції для бізнесу</p>
              <p className="item-description">
                Канада є привабливою для міжнародних компаній завдяки розвиненій
                інфраструктурі, доступу до Північної Америки та торгових угод.
              </p>
            </div>
          </Flex>
          <Flex className="grid-wrapper theory-item" align="center">
            <div className="icon-wrapper">
              <Icon name="attention" />
            </div>
            <div>
              <p className="item-title">Ризики і обмеження.</p>
              <p className="item-description">
                Більшість компаній повинні дотримуватись строгих екологічних та
                корпоративних стандартів, а також виконувати звітність по
                податках.
              </p>
            </div>
          </Flex>
        </div>
      </Flex>
      <Flex
        className="knowledge-sharing-wrapper"
        vertical={true}
        align="center"
      >
        <div className="image-wrapper" />
        <p className="title">Від бізнесменів до бізнесменів</p>
        <p className="description">
          Ми ділимося тільки реальними знаннями, які ви можете застосувати на
          практиці. Тому тисячі підприємці обирають нас
        </p>
        <Flex className="counts-wrapper" justify="space-between">
          <Flex className="count-item" vertical={true} align="center">
            <p className="count">24</p>
            <p className="count-label">Кваліфіковані спеціалісти</p>
          </Flex>
          <Flex className="count-item" vertical={true} align="center">
            <p className="count">35</p>
            <p className="count-label">Сфери діяльності</p>
          </Flex>
          <Flex className="count-item" vertical={true} align="center">
            <p className="count">805</p>
            <p className="count-label">Клієнтів в 2025 році</p>
          </Flex>
          <Flex className="count-item" vertical={true} align="center">
            <p className="count">3,946</p>
            <p className="count-label">Години особистих консультацій</p>
          </Flex>
        </Flex>
      </Flex>
      <Flex className="business-coaching" vertical={true} align="center">
        <p className="title">Як працює коучинг для бізнесу?</p>
        <p className="description">
          Наші фахівці розвіюють міфи про марність коучингу і пропонують тільки
          реальні знання, які виможна застосувати на практиці. Ось як ми
          працюємо:
        </p>
        <Flex className="business-coaching-items-list" justify="space-between">
          <Flex className="coaching-item" vertical={true} align="center">
            <Icon name="business-analysis" />
            <p className="item-title">Аналіз бізнесу та цілей</p>
            <p className="item-description">
              Коуч проводити детальний аналіз поточного стану бізнесу, вибирати
              ключові виклики та на основі формувати стратегічні цілі.
            </p>
          </Flex>
          <Flex className="coaching-item" vertical={true} align="center">
            <Icon name="business-optimisation" />
            <p className="item-title">Оптимізація бізнес-процесів</p>
            <p className="item-description">
              Впроваджуються ефективні методи управління командою, фінансами,
              маркетингом та операційною діяльністю
            </p>
          </Flex>
          <Flex className="coaching-item" vertical={true} align="center">
            <Icon name="business-motivation" />
            <p className="item-title">Мотивація та підтримка</p>
            <p className="item-description">
              Коуч підтримує підприємця на всіх етапах розвитку, допомагаючи
              подолати кризу, страхи та бар'єри, що захоплюють зростання
              бізнесу.
            </p>
          </Flex>
          <Flex className="coaching-item" vertical={true} align="center">
            <Icon name="business-results" />
            <p className="item-title">Досягнення запланованих результатів</p>
            <p className="item-description">
              Власник бізнесу отримує чіткі інструменти та рішення для
              масштабування компанії, підвищення прибутковості та виходу на нові
              ринки.
            </p>
          </Flex>
        </Flex>
      </Flex>
      <ConsultingOffshoreComp
        title="Отримайте експертну консультацію щодо створення офшорної компанії"
        description="Дізнайтеся про вартість і умови реєстрації вашої майбутньої офшорної
      компанії від наших експертів"
        linkLabel="Зареєструвати компанію"
        linkRoute={`${COMPANY_REGISTRATION_ROUTE}/canada`}
      >
        <CountryTarrifList />
      </ConsultingOffshoreComp>
      <Faq />
    </section>
  );
}
