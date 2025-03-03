import { Flex } from "antd";
import "./style.scss";
import Faq from "../../components/faq/Faq";
import LicenseBlock from "../../components/licenseBlock/LicenseBlock";
import paymentLicense from "../../assets/images/paymentLicense.png";
import bankLicense from "../../assets/images/bankLicense.png";
import brokerLicense from "../../assets/images/brokerLicense.png";
import activesLicense from "../../assets/images/activesLicense.png";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";

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
        <ConsultingOffshoreComp
          title="Довіртеся надійному партеру для Експертизи у Фінансовому Ліцензуванні"
          description="Партнерство для отримання довіреної експертизи у сфері фінансового ліцензування та дотримання нормативних вимог в Англії, Маврикії, Канаді та США.*"
          linkLabel="Долучитися"
        />
        <Faq />
      </div>
    </>
  );
}
