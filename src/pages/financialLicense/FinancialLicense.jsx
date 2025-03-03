import { Flex } from "antd";
import "./style.scss";
import Faq from "../../components/faq/Faq";
import LicenseBlock from "../../components/licenseBlock/LicenseBlock";
import paymentLicense from "../../assets/images/paymentLicense.png";
import bankLicense from "../../assets/images/bankLicense.png";
import brokerLicense from "../../assets/images/brokerLicense.png";
import activesLicense from "../../assets/images/activesLicense.png";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import Icon from "../../components/iconComponent/Icon";
import LinkComponent from "../../components/linkComponent/LinkComponent";
import { CONTACTS_ROUTE } from "../../routes/routes";

export default function FinancialLicense() {
  return (
    <>
      <div className="financial-license-page-wrapper">
        <Flex vertical={true} className="banner-wrapper">
          <p className="sub-description">
            Ваш Партнер у Міжнародному Бізнесі та Фінансовому Ліцензуванні
          </p>
          <p className="title">LionsInLaw</p>
          <Flex align="center" justify="flex-start" className="financical-info">
            <p className="description">
              Комплексні Послуги з Реєстрації Компаній та Отримання Фінансових
              Ліцензій у Ключових Юрисдикціях
            </p>
            <div className="image-wrapper" />
          </Flex>
        </Flex>
        <LicenseBlock
          description="Ми допомагаємо клієнтам отримати банківські ліцензії в таких юрисдикціях, як Англія та Маврикій, що дозволяє їм працювати як повноцінні банки та пропонувати банківські послуги клієнтам у всьому світі."
          imgInst={bankLicense}
          linkRef={"/"}
          title="Банківські ліцензії"
        />
        <LicenseBlock
          description="Lionsinlaw допомагає компаніям отримати ліцензії на платіжні послуги в таких юрисдикціях, як Канада та США, дозволяючи їм надавати рішення для обробки платежів і послуги електронних грошей відповідно до вимог."
          imgInst={paymentLicense}
          linkRef={"/"}
          title="Ліцензії на платіжні послуги:"
          isRevert={true}
        />
        <LicenseBlock
          description="Для клієнтів, які займаються управлінням активами та консультуванням з інвестицій, ми сприяємо придбанню ліцензій, які дозволяють їм управляти активами та надавати інвестиційні консультації на законних підставах."
          imgInst={activesLicense}
          linkRef={"/"}
          title="Ліцензії на управління активами"
        />
        <LicenseBlock
          description="Незалежно від того, чи йдеться про отримання ліцензій на брокерську діяльність для торгівлі цінними паперами чи ліцензій на біржі криптовалют, Lionsinlaw веде клієнтів через нормативні вимоги для законної торгівлі."
          imgInst={brokerLicense}
          linkRef={"/"}
          title="Ліцензії на брокерську діяльність і торгівлю."
          isRevert={true}
        />
        <div className="risk-management-wrapper">
          <div className="wrapper">
            <p className="title">Управління Ризиками з Lionsinlaw</p>
            <p className="description">Зменшення регуляторних ризиків має першорядне значення. Lionsinlaw гарантує, що заявки клієнтів на ліцензії ретельно підготовлені та відповідають місцевим нормативним стандартам, мінімізуючи затримки та відмови.</p>
            <LinkComponent linkLabel="Зв'язатися з нами" linkValue={CONTACTS_ROUTE}/>
          </div>
        </div>
        <ConsultingOffshoreComp
          title="Довіртеся надійному партеру для Експертизи у Фінансовому Ліцензуванні"
          description="Партнерство для отримання довіреної експертизи у сфері фінансового ліцензування та дотримання нормативних вимог в Англії, Маврикії, Канаді та США.*"
          linkLabel="Долучитися"
          showPrice={false}
        >
          <Flex align="center" className="tariff-item">
            <Icon name="ok-rounded-white" />
            <p>Фінансове Ліцензування:</p>
          </Flex>
          <Flex className="tariff-item">
            <Icon name="ok-rounded-white" />
            <p>Юрисдикційна Спеціалізація</p>
          </Flex>
          <Flex className="tariff-item">
            <Icon name="ok-rounded-white" />
            <p>
              Розробка індивідуальних стратегій для досягнення бізнес-цілей і
              відповідності регуляторним вимогам.
            </p>
          </Flex>
        </ConsultingOffshoreComp>
        <Faq />
      </div>
    </>
  );
}
