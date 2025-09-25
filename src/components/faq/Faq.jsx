import { Collapse } from "antd";
import "./style.scss";
import Icon from "../iconComponent/Icon";
import { useTranslation } from "react-i18next";

export default function Faq() {
  const { t } = useTranslation();
  const faqList = [
    {
      key: "ask1",
      label: t("questions_faq_3"),
      children: <p>{t("questions_faq_4")}</p>,
    },
    {
      key: "ask2",
      label: t("questions_faq_5"),
      children: <p>{t("questions_faq_6")}</p>,
      expandIcon: <Icon name="plus" />,
    },
    {
      key: "ask3",
      label: t("questions_faq_7"),
      children: <p>{t("questions_faq_8")}</p>,
    },
    {
      key: "ask4",
      label: t("questions_faq_9"),
      children: <p>{t("questions_faq_10")}</p>,
    },
    {
      key: "ask5",
      label: t("questions_faq_11"),
      children: <p>{t("questions_faq_12")}</p>,
    },
  ];

  return (
    <div className="page-content-wrapper faq-wrapper">
      <p className="title">{t("questions_faq_1")}</p>
      <p className="description">{t("questions_faq_2")}</p>
      <Collapse
        className="faq-list"
        onChange={() => {}}
        items={faqList}
        expandIconPosition="end"
        expandIcon={<Icon name="plus" />}
      />
    </div>
  );
}
