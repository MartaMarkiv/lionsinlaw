import { Flex, Switch } from "antd";
import "./style.scss";
import { Link } from "react-router-dom";
import FlagsContainer from "../../components/flagsContainer/FlagsContainer";
import Icon from "../../components/iconComponent/Icon";
import chooseUsImg from "../../assets/images/chooseLionsInLaw.png";
import lionsInLawTeam from "../../assets/images/team.png";
import BlockElement from "../../components/blockElement/BlockElement";
import config from "../../config";
import { Button } from "react-scroll";
import ContactPhones from "../../components/contactPhones/ContactPhones";

export default function Main() {
  return (
    <>
      <Flex className="main-section" justify="space-between">
        <div className="main-background" />
        <Flex
          vertical={true}
          align="center"
          justify="space-between"
          className="main-sub-part global"
        >
          <div>
            <div className="main-title" style={{ textTransform: "uppercase" }}>
              Глобальні корпоративні послуги
            </div>
            <div className="description">
              Комплексні корпоративні послуги по всьому світу: реєстрація
              компаній, відкриття банківських рахунків, торгові послуги,
              криптоліцензії та експертні податкові консультації
            </div>
          </div>
          <Flex className="quality" justify="space-between" align="center">
            <div>
              <div className="count">10+</div>
              <div className="quality-name">Років Досвіду</div>
            </div>
            <div>
              <div className="count">1000+</div>
              <div className="quality-name">Задоволених клієнтів</div>
            </div>
          </Flex>
        </Flex>
        <Flex
          vertical={true}
          align="center"
          justify="start"
          className="main-sub-part registration"
        >
          <Flex
            align="center"
            justify="center"
            vertical={true}
            style={{ maxWidth: 440 }}
          >
            <div className="count-company">50+</div>
            <div className="main-title" style={{ textAlign: "center" }}>
              Юрисдикцій для реєстрації компаній
            </div>
          </Flex>
          <Flex
            vertical={true}
            align="center"
            justify="center"
            className="law-name-info"
          >
            <div className="name-law">LionsInLaw</div>
            <span
              className="description medium"
              style={{ textAlign: "center" }}
            >
              Ваш надійний партнер у сфері глобальних корпоративних послуг і
              офшорних рішень
            </span>
          </Flex>

          <Link to={""} className="contact-us-link">
            Зв'язатися з нами
          </Link>
        </Flex>
      </Flex>
      <FlagsContainer />
      <div className="our-services">
        <div className="title">Наші послуги включають</div>
        <div className="description">
          Ми працюємо пліч-о-пліч із керівниками вищої ланки, щоб прискорити виконання за допомогою поєднання
        аналітичні та управлінські підходи.
        </div>
        <Flex align="center" justify="space-around"  className="our-services-wrapper">
          <Flex vertical={true} className="our-services-item" align="center">
            <Icon name="global-existing"/>
            <p className="title">Глобальна Присутність</p>
            <p className="description">Вибір з різних юрисдикцій по всьому світу, що найкраще відповідає вашим потребам у збереженні конфіденційності та захисту активів.</p>
          </Flex>

          <Flex vertical={true} className="our-services-item" align="center">
            <Icon name="efficiency"/>
            <p className="title">Ефективність Та Надійність</p>
            <p className="description">Забезпечення швидкості та високої якості обслуговування під час процесу реєстрації компаній.</p>
          </Flex>

          <Flex vertical={true} className="our-services-item" align="center">
            <Icon name="individual"/>
            <p className="title">Індивідуальний Підхід</p>
            <p className="description">Підбір оптимальної юрисдикції з урахуванням вашого бізнес-профілю та стратегічних цілей.</p>
          </Flex>
        </Flex>
      </div>
      <div className="choose-us">
        <div className="title">
        Обирайте <span className="selected">LionsInLaw</span> для комплексних корпоративних рішень
        </div>
        <Flex align="start" justify="space-between">
          <div className="image-wrapper">
            <img src={chooseUsImg} alt="LionsInLaw" />
          </div>
          <Flex vertical={true} className="advantages-wrapper">
            <p className="description">
              Ми пропонуємо широкий спектр рішень для офшорних компаній, забезпечуючи оптимальні варіанти для міжнародного розширення, захисту активів та підвищення ефективності бізнесу, з комплексним керівництвом та підтримкою від нашої команди експертів.
            </p>
            <Flex className="advantages-item" align="center">
              <Icon name="expansion" />
              <Flex vertical={true}>
                <p className="title">Міжнародна експансія</p>
                <p className="advantages-item-description">
                  Створення офшорної компанії спрощує вихід на нові ринки, сприяючи глобальній експансії зі зручними адміністративними процесами.
                </p>
              </Flex>
            </Flex>
            <Flex className="advantages-item" align="center">
              <Icon name="actives" />
              <Flex vertical={true}>
                <p className="title">Захист активів</p>
                <p className="advantages-item-description">
                Офшорні організації захищають активи від юридичних ризиків та судових процесів, забезпечуючи підвищену конфіденційність і безпеку.
                </p>
              </Flex>
            </Flex>
            <Flex className="advantages-item" align="center">
              <Icon name="optimization" />
              <Flex vertical={true}>
                <p className="title">Оптимізація оподаткування</p>
                <p className="advantages-item-description">
                Розташувавши бізнес у сприятливій податковій юрисдикції, ви зменшите податкові зобов'язання та підвищите фінансову ефективність
                </p>
              </Flex>
            </Flex>
            <Flex className="advantages-item" align="center">
              <Icon name="global-traiding" />
              <Flex vertical={true}>
                <p className="title">Глобальна торгівля та інвестиції</p>
                <p className="advantages-item-description">
                Офшорні структури спрощують міжнародну торгівлю та інвестиції, забезпечуючи гнучкість у управлінні валютою та транскордонними транзакціями.
                </p>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </div>
      <div className="services-list">
        <div className="services-list-title">послуги</div>
        <BlockElement 
          description="Ми забезпечуємо безперебійну реєстрацію компаній у різних юрисдикціях по всьому світу, забезпечуючи відповідність і ефективність відповідно до потреб вашого бізнесу"
          linkValue={""}
          title="Реєстрація компаній"
          isDark={false}
        />
        <Flex className="image-container" align="center" justify="center">
          <img src={lionsInLawTeam} alt="LionsInLaw team" />
        </Flex>
        <BlockElement 
          description="Ознайомтеся з нашими спеціалізованими послугами для створення офшорних компаній, які забезпечують конфіденційність, захист активів і стратегічну глобальну присутність."
          linkValue={""}
          title="Офшорні корпорації"
          isDark={false}
        />
        <BlockElement 
          description="Отримайте доступ до нашої розгалуженої мережі, щоб відкривати корпоративні банківські рахунки по всьому світу, оптимізуючи свої фінансові операції та полегшуючи міжнародні транзакції."
          linkValue={""}
          title="Відкриття банківських рахунків"
          isDark={true}
        />
        <Flex className="grid-item-2" vertical={true}>
          <div className="item-2-title">
            У <span className="selected">LionsInLaw</span> кожен клієнт отримує індивідуальний підхід, адаптований до конкретних потреб їх бізнесу.
          </div>
          <div>
            Міжнародна поєднуємо великий досвід із орієнтованим на клієнта підходом, щоб надавати індивідуальні рішення, які відповідають вашим конкретним бізнес-цілям. Незалежно від того, чи збираєтеся ви виходити на міжнародний рівень, шукаєте захист активів чи покращуєте свої фінансові стратегії, LionsInLaw є вашим відданим партнером на кожному кроці.
          </div>
        </Flex>
        <BlockElement 
          description="Скористайтеся послугами стратегічного податкового планування та дотримання законодавства, спрямованих на мінімізацію податкових зобов’язань і водночас максимальну фінансову ефективність."
          linkValue={""}
          title="Послуги продавця"
          isDark={true}
        />
        <BlockElement 
          description="Ми надаємо професійну консультацію та підтримку на кожному етапі процесу вибору юрисдикції та реєстраційної служби, забезпечуючи відповідність місцевим законодавчим вимогам."
          linkValue={""}
          title="Юрисдикції для Реєстрації Компанії"
          isDark={false}
        />
      </div>
      <div className="law-business">
        <div className="business-gradient"/>
        <div>
          <div className="title">Зробіть свій бізнес успішним з <span className="selected">LionsInLaw</span></div>
          <div className="description">Зв’яжіться з нами сьогодні, щоб дізнатися, як ми можемо допомогти вашому бізнесу процвітати в динамічному глобальному середовищі</div>
          <div>
            <Link className="contact-us-link">Зв'язатися з нами</Link>
          </div>
          <Flex align="center" justify="space-between" className="business-types">
            <Flex className="business-item">
              <Icon name="taxes-plan-img"/>
              <div>
                <p className="title">Податкове Планування</p>
                <p>Мінімізація податків та максимізація ефективності</p>
              </div>
            </Flex>
            <Flex className="business-item">
              <Icon name="crypto-license-img"/>
              <div>
                <p className="title">Крипто-ліцензії</p>
                <p>Регулювання криптовалют та дотримання нормативів</p>
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
      <div className="our-functions">
        <div className="our-functions-header">
          <p className="title">Потужні функції для потужних творців</p>
          <p className="description">Виберіть план, який підходить саме вам</p>
          <Flex align="center" justify="center">
            <span>Оплата щомісяця</span>
            <Switch className="plann-switcher" defaultChecked onChange={()=>{}} />
            <span>Оплата щорічно</span>
          </Flex>
          <Flex align="center" justify="center" className="discount-wrapper">
            <Icon name="wavy-arrow"/>
            <span>Знижка 25%</span>
          </Flex>
        </div>
        <Flex className="tarrif-plan-types" align="start" justify="space-between">
          <div className="tarrif-plan-item">
            <p className="title">Халява</p>
            <p className="description">Ідеально підходить для людей, яким потрібен швидкий доступ до основних функцій.</p>
            <Flex className="price-wrapper" align="center">
              <span className="price">$0</span>
              <span>/ Місяць</span>
            </Flex>
            <div>
              <Button className="start-plan-btn light">Почни зараз</Button>
            </div>
            {
              config.tariffPlanOptions.free.map((item, index)=> <Flex align="center" key={`${item.name}:${index}`} className="plan-option-item">
                <Flex align="center" justify="center" className="icon-wrapper"><Icon name={item.isAvailable ? "ok" : "fail"}/></Flex>
                <span>{item.name}</span>
              </Flex>)
            }
          </div>
          <div className="tarrif-plan-item dark">
            <p className="title">Професійний</p>
            <p className="description">Ідеально підходить для людей, яким потрібні розширені функції та інструменти для роботи з клієнтами.</p>
            <Flex className="price-wrapper" align="center">
              <span className="price">$0</span>
              <span>/ Місяць</span>
            </Flex>
            <div>
              <Button className="start-plan-btn dark">Почни зараз</Button>
            </div>
            {
              config.tariffPlanOptions.prof.map((item, index)=> <Flex align="center" key={`${item.name}:${index}`} className="plan-option-item">
                <Flex align="center" justify="center" className="icon-wrapper dark"><Icon name={item.isAvailable ? "ok" : "fail"}/></Flex>
                <span>{item.name}</span>
              </Flex>)
            }
          </div>
          <div className="tarrif-plan-item">
            <p className="title">Підприємство</p>
            <p className="description">Ідеально підходить для підприємств, яким потрібні персоналізовані послуги та безпека для великих команд.</p>
            <Flex className="price-wrapper" align="center">
              <span className="price">$0</span>
              <span>/ Місяць</span>
            </Flex>
            <div>
              <Button className="start-plan-btn light">Почни зараз</Button>
            </div>
            {
              config.tariffPlanOptions.enterprise.map((item, index)=> <Flex align="center" key={`${item.name}:${index}`} className="plan-option-item">
                <Flex align="center" justify="center" className="icon-wrapper"><Icon name={item.isAvailable ? "ok" : "fail"}/></Flex>
                <span>{item.name}</span>
              </Flex>)
            }
          </div>
        </Flex>
      </div>
      <ContactPhones />
    </>
  );
}
