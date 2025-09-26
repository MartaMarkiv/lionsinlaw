import { Button, Flex, Input, Form } from "antd";
import Icon from "../iconComponent/Icon";
import "./style.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import {
  BANK_ACCOUNT_ROUTE,
  COMPANY_REGISTRATION_ROUTE,
  CONTACTS_ROUTE,
  CRYPTO_LICENSE_ROUTE,
  FINANCIAL_LICENSE_ROUTE,
  MERCHANT_ACCOUNTS_ROUTE,
  TRADEMARK_REGISTRATION_ROUTE,
} from "../../routes/routes";
import { openNotification } from "../../hooks/useNotification";
import { useState } from "react";
import { sendEmail } from "../../services/emailService";

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const [form] = Form.useForm();

  const sendEmailMessage = ({ email }) => {
    setLoading(true);
    sendEmail(
      import.meta.env.VITE_TEMPLATE_ID,
      { email },
      () => openNotification("success"),
      () => openNotification("error"),
      () => {
        form.resetFields();
        setLoading(false);
      }
    );
  };

  return (
    <footer className="footer">
      <Flex className="logo-wrapper" align="center">
        <Icon name="logo" />
        <span>LionsInLaw</span>
      </Flex>
      <Flex className="footer-links-contacts">
        <Flex align="start" justify="space-between">
          <Flex vertical={true} className="page-links">
            <p>{t("footer_about_us")}</p>
            <Link>{t("footer_consultation")}</Link>
            <Link>{t("footer_blog")}</Link>
            <Link>{t("footer_articles")}</Link>
            <Link>{t("footer_faq")}</Link>
            <Link to={CONTACTS_ROUTE}>{t("footer_contacts")}</Link>
          </Flex>
          <Flex vertical={true} className="services-footer">
            <p>{t("footer_services")}</p>
            <Link to={`${COMPANY_REGISTRATION_ROUTE}/default`}>
              {t("footer_1")}
            </Link>
            <Link to={BANK_ACCOUNT_ROUTE}>{t("footer_2")}</Link>
            <Link to={MERCHANT_ACCOUNTS_ROUTE}>{t("footer_3")}</Link>
            <Link to={TRADEMARK_REGISTRATION_ROUTE}>{t("footer_4")}</Link>
            <Link to={CRYPTO_LICENSE_ROUTE}>{t("footer_5")}</Link>
            <Link to={FINANCIAL_LICENSE_ROUTE}>{t("footer_1")}</Link>
          </Flex>
        </Flex>
        <Flex className="contacts-form" justify="flex-end">
          <div>
            <p className="title">{t("footer_7")}</p>
            <p className="description">{t("footer_8")}</p>
            <Form
              className="send-email-form"
              name="sendEmailForm"
              form={form}
              autoComplete="off"
              onFinish={sendEmailMessage}
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input type="email" placeholder="Enter your email address" />
              </Form.Item>

              <Form.Item label={null}>
                <Button htmlType="submit" disabled={loading}>
                  {t("footer_10")}
                </Button>
              </Form.Item>
            </Form>
            <p className="secondary-title">{t("footer_11")}</p>
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
