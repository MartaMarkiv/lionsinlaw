import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import config from "../../config";
import { Steps, Flex, Input, Form, Select } from "antd";

const items = [
  {
    title: "Тип послуги",
  },
  {
    title: "Персональні дані",
  },
  {
    title: "Персональні дані",
  },
  {
    title: "Підтвердження оплати",
  },
];

const typeRegistrationOptions = [
  {
    value: "type1",
    label: "Type 1",
  },
  {
    value: "type2",
    label: "Type 2",
  },
  {
    value: "type3",
    label: "Type 3",
  },
  {
    value: "type4",
    label: "Type 4",
  },
];

const directorsOptions = [
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
];

export default function CreateCompany() {
  const { country } = useParams();

  const [countryName, setCountryName] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const countryLabel = config.countriesList[country];
    console.log("country label:  ", countryLabel);
    if (countryLabel) {
      setCountryName(countryLabel);
    }
  }, []);

  const changeStep = (value) => {
    console.log("onChange:", value);
    setCurrentStep(value);
  };

  return (
    <section className="create-company-page">
      <div className="create-company-page-header">
        <p className="title">
          Реєстрація офшорної компанії {countryName !== "" && "в"} {countryName}
        </p>
        <p className="description">
          Проста та ефективна процедура через онлайн-систему Companies House
        </p>
      </div>
      <Flex className="create-company-forms">
        <div>
          <p className="title">ЗАПОВНЮЙ ФОРМУ РЕЄСТРАЦІЇ</p>
          <div className="step-label">
            Крок {currentStep + 1}: {items[currentStep].title}
          </div>
          <Steps
            className="steps-wrapper"
            labelPlacement="vertical"
            current={currentStep}
            items={items}
            onChange={changeStep}
          />
          <div>
            <p className="title">Налаштування системи</p>
            <Form
              className="form-wrapper"
              layout="vertical"
              name="settingsSystem"
            >
              <Form.Item
                label="Тип обслуговування"
                rules={[
                  {
                    required: true,
                  },
                ]}
                name="serviceType"
              >
                <Input type="text" placeholder="Тип обслуговування" />
              </Form.Item>
              <Form.Item label="Тип реєстрації" name="registrationType">
                <Select options={typeRegistrationOptions} />
              </Form.Item>
              <Form.Item label="Кількість дирекрорів" name="directorsNumber">
                <Select options={directorsOptions} />
              </Form.Item>
              <p className="input-label">Юрисдикція компанії</p>
            </Form>
          </div>
        </div>
        <div>
          <div className="form-wrapper">
            <p>Деталі заказу</p>
          </div>
        </div>
      </Flex>
    </section>
  );
}
