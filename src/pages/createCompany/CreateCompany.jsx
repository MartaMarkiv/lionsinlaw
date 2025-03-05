import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import config from "../../config";
import { Steps, Flex, Input, Form, Select, Button, Checkbox } from "antd";
import ReactFlagsSelect from "react-flags-select";
import Icon from "../../components/iconComponent/Icon";
import Faq from "../../components/faq/Faq";
import PhoneInput from "react-phone-input-2";

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
    label: "Компанія з обмеженою віповідальністю",
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

const traidingOptions = [
  {
    value: "jurisdiction",
    label: "Юрисдикція",
  },
  {
    value: "jurisdiction 2",
    label: "Юрисдикція 2",
  },
  {
    value: "jurisdiction 3",
    label: "Юрисдикція 3",
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

const recomendedServicesOptions = [
  { value: "consultation", label: "Консультаційні послуги" },
  { value: "consultation2", label: "Консультаційні послуги 2" },
  { value: "consultation 3", label: "Консультаційні послуги 3" },
];

export default function CreateCompany() {
  const { country } = useParams();

  //1 Step
  const [countryName, setCountryName] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [bankCountry, setBankCountry] = useState("");
  const [jurisdictionCountry, setJurisdictionCountry] = useState("");
  const [traidingJurisdiction, setTraidingJurisdiction] = useState(
    traidingOptions[0]
  );
  const [serviceType, setServiceType] = useState("");
  const [registrationType, setRegistrationType] = useState("");
  const [directorsCount, setDirectorsCount] = useState(1);
  const [processingTime, setProcessingTime] = useState(1);
  const [recomendedService, setRecomendedService] = useState(
    recomendedServicesOptions[0]
  );

  //2 Step
  const [userName, setUserName] = useState("");
  const [secondaryName, setSecondaryName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nationality, setNationality] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  //3
  const [issuerBankCountry, setIssuerBankCountry] = useState("");

  const changeIssuerBankCountry = (value) => {
    setIssuerBankCountry(value);
  }

  const changeComment = (event) => {
    setComment(event.target.value);
  };

  const changeUserName = (event) => {
    setUserName(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changeAddress = (event) => {
    setAddress(event.target.value);
  };

  const changeRegion = (event) => {
    setRegion(event.target.value);
  };

  const changeCity = (event) => {
    setCity(event.target.value);
  };

  const changePostalCode = (event) => {
    setPostalCode(event.target.value);
  };

  const changePhoneNumber = (value, country) => {
    console.log(value);
    console.log(country);
    setPhoneNumber(value);
  };

  const changeSecondaryName = (event) => {
    setSecondaryName(event.target.value);
  };
  const changeSurname = (event) => {
    setSurname(event.target.value);
  };
  const changeBirthday = (event) => {
    setBirthday(event.target.value);
  };
  const changeNationality = (value) => {
    setNationality(value);
  };

  const changeServiceType = (event) => {
    setServiceType(event.target.value);
  };

  const changeJurisdictionCountry = (value) => {
    setJurisdictionCountry(value);
  };

  useEffect(() => {
    const countryLabel = config.countriesList[country];
    if (countryLabel) {
      setCountryName(countryLabel);
    }
  }, []);

  const changeProcessingTime = (value) => {
    setProcessingTime(value);
  };

  const changeStep = (value) => {
    setCurrentStep(value);
  };

  const changeRegistrationType = (_value, label) => {
    setRegistrationType(label);
  };

  const changeRecomendedService = (_value, label) => {
    setRecomendedService(label);
  };

  const changeTraidingJurisdiction = (_value, label) => {
    setTraidingJurisdiction(label);
  };

  const changDirectorsCount = (value) => {
    setDirectorsCount(value);
  };

  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
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
      <Flex className="create-company-forms" justify="space-between">
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
          {currentStep === 0 && (
            <div>
              <p className="title">Налаштування системи</p>
              <Form layout="vertical" name="settingsSystem">
                <div className="main-form-wrapper border-top settings-part">
                  <Form.Item
                    label="Тип обслуговування"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    name="serviceType"
                  >
                    <Input
                      type="text"
                      className="full-input"
                      placeholder="Тип обслуговування"
                      onChange={changeServiceType}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Юрисдикція компанії"
                    name="companyCountry"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <ReactFlagsSelect
                      className="country-select"
                      placeholder="Виберіть країну"
                      selected={selectedCountry}
                      onSelect={(code) => setSelectedCountry(code)}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Тип реєстрації"
                    name="registrationType"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      options={typeRegistrationOptions}
                      onChange={changeRegistrationType}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Кількість директорів"
                    name="directorsNumber"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      options={directorsOptions}
                      onChange={changDirectorsCount}
                      value={directorsCount}
                    />
                  </Form.Item>
                </div>
                <div className="main-form-wrapper border-top recomendation-part">
                  <p className="title">Рекомендувати послуги</p>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    name="recomendedService"
                  >
                    <Flex
                      align="center"
                      justify="space-between"
                      className="select-wrapper"
                    >
                      <Select
                        options={recomendedServicesOptions}
                        className="border-bottom-input"
                        onChange={changeRecomendedService}
                        value={recomendedService}
                      />
                      <Icon name="ok-red" />
                    </Flex>
                  </Form.Item>
                  <Form.Item
                    name="consultationPrice"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      className="full-input border-bottom red-input"
                      placeholder="0.00 USD"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Країна банку"
                    name="bankCountry"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <ReactFlagsSelect
                      selected={bankCountry}
                      className="country-select"
                      onSelect={(code) => setBankCountry(code)}
                    />
                  </Form.Item>
                  <Form.Item name="officeServices">
                    <Flex
                      className="checkbox-wrapper"
                      align="center"
                      justify="space-between"
                    >
                      <Checkbox>Обслуговування офісів</Checkbox>
                      <Flex align="center" justify="space-between">
                        <span className="red-text">0.00 USD</span>
                        <Button icon={<Icon name="ask-red" />} />
                      </Flex>
                    </Flex>
                  </Form.Item>
                  <Form.Item name="tradeReport">
                    <Flex
                      className="checkbox-wrapper"
                      align="center"
                      justify="space-between"
                    >
                      <Checkbox>Торговий звіт</Checkbox>
                      <Flex align="center" justify="space-between">
                        <span className="red-text">0.00 USD</span>
                        <Button icon={<Icon name="ask-red" />} />
                      </Flex>
                    </Flex>
                  </Form.Item>
                  <Form.Item name="merchantAccounts">
                    <Flex
                      className="checkbox-wrapper"
                      align="center"
                      justify="space-between"
                    >
                      <Checkbox>Мерчант рахунки</Checkbox>
                      <Flex align="center" justify="space-between">
                        <span className="red-text">0.00 USD</span>
                        <Button icon={<Icon name="ask-red" />} />
                      </Flex>
                    </Flex>
                  </Form.Item>
                </div>
                <div className="main-form-wrapper border-top padding-top-delete">
                  <p className="title">Реєстрація торгових знаків</p>
                  <Form.Item
                    name="traidingSelect"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Flex
                      align="center"
                      justify="space-between"
                      className="select-wrapper"
                    >
                      <Select
                        options={traidingOptions}
                        onChange={changeTraidingJurisdiction}
                        value={traidingJurisdiction}
                      />
                      <Icon name="ok-red" />
                    </Flex>
                  </Form.Item>
                  <Form.Item
                    name="traidingPrice"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      className="full-input red-input border-bottom"
                      placeholder="0.00 USD"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Юрисдикція компанії"
                    name="jurisdictionCountry"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <ReactFlagsSelect
                      selected={jurisdictionCountry}
                      className="country-select"
                      onChange={changeJurisdictionCountry}
                    />
                  </Form.Item>
                </div>
              </Form>
            </div>
          )}
          {currentStep === 1 && (
            <Form layout="vertical" name="personalData">
              <div className="main-form-wrapper border-top padding-top-delete personal-data">
                <div className="border-bottom-block">
                <p className="title left-align">Персональні дані</p>
                <Flex
                  className="sub-title-wrapper"
                  justify="space-between"
                  align="center"
                >
                  <span>Контактна Інформація</span>
                  <Icon name="ok-red" />
                </Flex>
                <Flex justify="space-between" className="form-values-divider">
                  <Form.Item
                    label="Ім'я власника"
                    name="userNameValue"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input
                      className="full-input"
                      placeholder="Іван"
                      onChange={changeUserName}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Прізвище"
                    name="surnameValue"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input
                      className="full-input"
                      placeholder="Харитонов"
                      onChange={changeSurname}
                    />
                  </Form.Item>
                </Flex>
                <Flex justify="space-between" className="form-values-divider">
                  <Form.Item
                    label="По батькові"
                    name="secondaryNameValue"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input
                      className="full-input"
                      placeholder="Платонович"
                      onChange={changeSecondaryName}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Дата народження"
                    name="birthdayValue"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input
                      type="date"
                      className="full-input"
                      onChange={changeBirthday}
                    />
                  </Form.Item>
                </Flex>
                </div>
                <Form.Item
                  label="Громадянство"
                  name="nationality"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <ReactFlagsSelect
                    className="country-select"
                    selected={nationality}
                    placeholder="Виберіть країну"
                    onSelect={changeNationality}
                  />
                </Form.Item>
                <Form.Item name="officeServices">
                  <Flex
                    className="checkbox-wrapper"
                    align="center"
                    justify="space-between"
                  >
                    <Checkbox>Обслуговування офісів</Checkbox>
                    <Flex align="center" justify="space-between">
                      <span className="red-text">0.00 USD</span>
                      <Button icon={<Icon name="ask-red" />} />
                    </Flex>
                  </Flex>
                </Form.Item>
                <Form.Item name="tradeReport">
                  <Flex
                    className="checkbox-wrapper"
                    align="center"
                    justify="space-between"
                  >
                    <Checkbox>Торговий звіт</Checkbox>
                    <Flex align="center" justify="space-between">
                      <span className="red-text">0.00 USD</span>
                      <Button icon={<Icon name="ask-red" />} />
                    </Flex>
                  </Flex>
                </Form.Item>
                <Form.Item name="merchantAccounts">
                  <Flex
                    className="checkbox-wrapper not-bordered"
                    align="center"
                    justify="space-between"
                  >
                    <Checkbox>Мерчант рахунки</Checkbox>
                    <Flex align="center" justify="space-between">
                      <span className="red-text">0.00 USD</span>
                      <Button icon={<Icon name="ask-red" />} />
                    </Flex>
                  </Flex>
                </Form.Item>
              </div>
            </Form>
          )}

          { currentStep === 2 &&  <Form layout="vertical" name="bankDetails">
                <div className="main-form-wrapper border-top padding-top-delete">
                  <p className="title left-align">банківські реквізити</p>
                  <Form.Item
                    label="Країна банку емітенту"
                    name="issuerBankCountry"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <ReactFlagsSelect
                      className="country-select"
                      selected={issuerBankCountry}
                      placeholder="Виберіть країну"
                      onSelect={changeIssuerBankCountry}
                    />
                  </Form.Item>
                </div>
              </Form>
              }
        </div>

        <div>
          {(currentStep === 0 || currentStep === 2) && (
            <>
              <div className="secondary-form-wrapper order-details">
                <p className="title border-top">Деталі замовлення</p>
                <Flex vertical={true}>
                  <p className="form-label">Тип обслуговування</p>
                  <p className="form-value border-bottom-block">
                    {serviceType}
                  </p>
                </Flex>
                <Flex vertical={true}>
                  <p className="form-label">Юрисдикція компанії</p>
                  <p className="form-value border-bottom-block">
                    {jurisdictionCountry}
                  </p>
                </Flex>
                <Flex vertical={true}>
                  <p className="form-label">Тип реєстрації</p>
                  <p className="form-item-description">
                    {registrationType?.label}
                  </p>
                  <p className="form-value border-bottom-block">0.00 USD</p>
                </Flex>
                <Flex vertical={true}>
                  <p className="form-label">Кількість директорів</p>
                  <p className="form-value border-bottom-block">
                    {directorsCount}
                  </p>
                </Flex>
                <Flex vertical={true}>
                  <p className="form-label">Кількість акціонерів</p>
                  <p className="form-value border-bottom-block">1</p>
                </Flex>
                <Flex vertical={true}>
                  <Flex
                    className="form-label"
                    justify="space-between"
                    align="center"
                  >
                    <span>Час обробки</span>
                    <Button icon={<Icon name="ask-red" />} />
                  </Flex>
                  <p className="red-text" style={{ marginBottom: 10 }}>
                    Виберіть
                  </p>
                  <Select
                    options={directorsOptions}
                    className="border-bottom-input right-alignet"
                    onChange={changeProcessingTime}
                    value={processingTime}
                  />
                </Flex>
              </div>
              <div className="secondary-form-wrapper">
                <p className="title border-top">Промокод</p>
                <Flex className="promocode-wrapper">
                  <Input placeholder="Введіть промокод" />
                  <Button>Застосувати</Button>
                </Flex>
              </div>
            </>
          )}
          {currentStep === 1 && (
            <>
              <Form
                layout="vertical"
                name="personalDataInfo"
                className="secondary-form-wrapper border-top padding-top-delete personal-info"
              >
                <p className="title">Деталі даних</p>
                <Form.Item
                  label="Місто/Село"
                  name="cityValue"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    className="full-input"
                    placeholder="м. Київ"
                    onChange={changeCity}
                  />
                </Form.Item>
                <Form.Item
                  label="Область"
                  name="regionValue"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    className="full-input"
                    placeholder="м. Київ"
                    onChange={changeRegion}
                  />
                </Form.Item>
                <Form.Item
                  label="Вулиця, будинок, квартира"
                  name="addressValue"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    className="full-input"
                    placeholder="Вул Пушкінська б.32 кв. 1"
                    onChange={changeAddress}
                  />
                </Form.Item>
                <Form.Item
                  label="Поштовий індекс"
                  name="postalCodeValue"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    className="full-input"
                    placeholder="62116"
                    onChange={changePostalCode}
                  />
                </Form.Item>
                <Form.Item
                  label="Телефон"
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <PhoneInput
                    country={"us"}
                    placeholder="Номер телефону"
                    className="phone-number-input"
                    value={phoneNumber}
                    onChange={changePhoneNumber}
                  />
                </Form.Item>
                <Form.Item
                  label="Електронна адрера"
                  name="emailValue"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    className="full-input"
                    placeholder="kvitca1433@gmail.com"
                    onChange={changeEmail}
                  />
                </Form.Item>
                <Form.Item
                  name="consentValue"
                >
                  <Checkbox className="consent-checkbox">Згода на обробку персональних даних</Checkbox>
                </Form.Item>
              </Form>
              <div className="secondary-form-wrapper">
                <p className="title border-top">Коментар</p>
                <Flex className="promocode-wrapper">
                  <Input
                    placeholder="Введіть коментар"
                    onChange={changeComment}
                  />
                  <Button>Застосувати</Button>
                </Flex>
              </div>
            </>
          )}
          <Button className="next-step-button" onClick={goToNextStep}>
            Далі
          </Button>
        </div>
      </Flex>
      <Faq />
    </section>
  );
}
