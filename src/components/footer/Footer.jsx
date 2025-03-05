import { Button, Flex, Input } from "antd";
import Icon from "../iconComponent/Icon";
import "./style.scss";
import { Link } from "react-router-dom";
import {
  BANK_ACCOUNT_ROUTE,
  COMPANY_REGISTRATION_ROUTE,
  CONTACTS_ROUTE,
  CRYPTO_LICENSE_ROUTE,
  FINANCIAL_LICENSE_ROUTE,
  MERCHANT_ACCOUNTS_ROUTE,
  TRADEMARK_REGISTRATION_ROUTE,
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
            <Link to={`${COMPANY_REGISTRATION_ROUTE}/default`}>
              Реєстрація Компаній
            </Link>
            <Link to={BANK_ACCOUNT_ROUTE}>відкриття банківських рахунків</Link>
            <Link to={MERCHANT_ACCOUNTS_ROUTE}>відкриття мерчант рахунків</Link>
            <Link to={TRADEMARK_REGISTRATION_ROUTE}>
              реєстрація товарних знаків
            </Link>
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
              <Link
                to="https://facebook.com/lionsinlawpro"
                className="social-wrapper"
              >
                <Icon name="facebook" />
              </Link>
              <Link to="https://x.com/lionsinlaw" className="social-wrapper">
                <Icon name="twitter" />
              </Link>
              <Link to="https://t.me/lionsinlaw" className="social-wrapper">
                <Icon name="telegram" />
              </Link>
            </Flex>
          </div>
        </Flex>
      </Flex>
    </footer>
  );
}
