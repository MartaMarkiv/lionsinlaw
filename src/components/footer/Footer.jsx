import { Button, Flex, Input } from "antd";
import Icon from "../iconComponent/Icon";
import "./style.scss";
import { Link } from "react-router-dom";
import {
  BANK_ACCOUNT_ROUTE,
  CONTACTS_ROUTE,
  CRYPTO_LICENSE_ROUTE,
  FINANCIAL_LICENSE_ROUTE,
} from "../../routes/routes";

export default function Footer() {
  return (
    <footer className="footer">
      <Flex className="logo-wrapper" align="center">
        <Icon name="logo" />
        <span>LionsInLaw</span>
      </Flex>
      <Flex className="footer-links-contacts">
        <Flex align="start" justify="space-between">
          <Flex vertical={true} className="page-links">
            <p>Про нас</p>
            <Link>Консультації</Link>
            <Link>Блог</Link>
            <Link>Статті</Link>
            <Link>Питання та відповіді</Link>
            <Link to={CONTACTS_ROUTE}>Контакти</Link>
          </Flex>
          <Flex vertical={true} className="services-footer">
            <p>Послуги</p>
            <Link>Реєстрація Компаній</Link>
            <Link to={BANK_ACCOUNT_ROUTE}>відкриття банківських рахунків</Link>
            <Link>відкриття мерчант рахунків</Link>
            <Link>реєстрація товарних знаків</Link>
            <Link to={CRYPTO_LICENSE_ROUTE}>криптоконсалтинг</Link>
            <Link to={FINANCIAL_LICENSE_ROUTE}>
              відкриття фінансових ліцензій
            </Link>
          </Flex>
        </Flex>
        <Flex className="contacts-form" justify="flex-end">
          <div>
            <p className="title">
              Зв'яжіться з нами для отримання додаткової інформації або
              заплануйте консультацію"
            </p>
            <p className="description">
              Наші експерти готові допомогти вам з будь-якими питаннями щодо
              корпоративних послуг і офшорних рішень.
            </p>
            <Flex
              align="center"
              justify="space-between"
              className="send-email-form"
            >
              <Input type="email" placeholder="Enter your email address" />
              <Button>Зв'язатися </Button>
            </Flex>
            <p className="secondary-title">Слідкуйте в соц. мережах</p>
            <Flex align="center">
              <Flex className="social-wrapper" align="center" justify="center">
                <Icon name="facebook" />
              </Flex>
              <Flex className="social-wrapper" align="center" justify="center">
                <Icon name="twitter" />
              </Flex>
              <Flex className="social-wrapper" align="center" justify="center">
                <Icon name="instagram" />
              </Flex>
              <Flex className="social-wrapper" align="center" justify="center">
                <Icon name="linkedin" />
              </Flex>
              <Flex className="social-wrapper" align="center" justify="center">
                <Icon name="telegram" />
              </Flex>
            </Flex>
          </div>
        </Flex>
      </Flex>
    </footer>
  );
}
