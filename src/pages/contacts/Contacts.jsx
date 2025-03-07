import { useState } from "react";

import { Flex, Form, Input, Select, Checkbox, Button } from "antd";
import "./style.scss";
const { TextArea } = Input;
import config from "../../config";
import Icon from "../../components/iconComponent/Icon";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Contacts() {
  const [phone, setPhone] = useState("");
  const [form] = Form.useForm();

  const changePhoneNumber = (value, country) => {
    console.log(value);
    console.log(country);
    setPhone(value);
  };
  return (
    <>
      <Flex
        align="center"
        justify="center"
        className="page-content-wrapper contacts-header-wrapper"
      >
        <Flex align="center" className="contacts-header">
          <div>
            <div className="extra-big">Зв'язатися з</div>
            <div className="contacts-description">
              Заплануйте консультацію або отримайте додаткову інформацію від
              наших експертів щодо корпоративних послуг і офшорних рішень.
            </div>
          </div>
          <div className="company-name">LionsInLaw</div>
        </Flex>
      </Flex>
      <Flex
        align="start"
        justify="space-between"
        className="law-contacts-wrapper"
      >
        <div>
          <p className="title">
            Контакти <span className="selected">LionsInLaw</span>
          </p>
          <p className="description">
            Швидкий і зручний зв'язок для вирішення ваших питань
          </p>
          {config.contactPhones.map((item, index) => (
            <Flex
              key={`${item.flag}:${index}`}
              align="center"
              justify="space-between"
              className="phone-wrapper"
            >
              <Flex align="center">
                <Icon name={`${item.flag}-icon`} />
                <span>{item.name}</span>
              </Flex>
              <span>{item.phone}</span>
            </Flex>
          ))}
        </div>
        <div>
          <Form
            name="contactUsForm"
            form={form}
            layout="vertical"
            className="contact-us-form"
          >
            <p className="form-title">Будемо на зв'язку</p>
            <Flex
              align="center"
              justify="space-between"
              className="form-item-wrapper"
            >
              <Form.Item
                label="Що ми можемо вам допомогти"
                name="theme"
                required={true}
              >
                <Select placeholder="Виберіть Теми">
                  <Select.Option value="theme1">тема 1</Select.Option>
                  <Select.Option value="theme2">тема 2</Select.Option>
                  <Select.Option value="theme3">тема 3</Select.Option>
                  <Select.Option value="theme4">тема 4</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="username"
                label="Повне ім'я"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input placeholder="Повне ім'я" />
              </Form.Item>
            </Flex>
            <Flex
              align="center"
              justify="space-between"
              className="form-item-wrapper"
            >
              <Form.Item
                name="email"
                label="Адреса електронної пошти"
                rules={[
                  { required: true, message: "Please input your email!" },
                  {
                    pattern: config.emailRegex,
                    message: "Please, check your email.",
                  },
                ]}
              >
                <Input type="email" placeholder="Адреса електронної пошти" />
              </Form.Item>

              <Form.Item name="skypeId" label="Skype ID">
                <Input placeholder="Skype ID" />
              </Form.Item>
            </Flex>
            <Flex
              align="center"
              justify="space-between"
              className="form-item-wrapper"
            >
              <Form.Item
                label="Номер телефону"
                required={true}
                name="phoneNumber"
                className="phone-number-item"
              >
                <PhoneInput
                  country={"us"}
                  placeholder="Номер телефону"
                  value={phone}
                  onChange={changePhoneNumber}
                />
              </Form.Item>
              <Form.Item label="Країна" name="country">
                <Input placeholder="Країна" />
              </Form.Item>
            </Flex>
            <Form.Item label="Повідомлення" required={true}>
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item
              label="Прикріпити файли"
              layout="horizontal"
              className="file-form-item"
            >
              <Input type="file" placeholder="Виберіть Файли" />
            </Form.Item>
            <p className="file-remark">
              (*.jpg, *.jpeg, *.png, *.gif, *.bmp, *.pdf, *.txt, *.doc, *.docx,
              *.xls, *.xlsx, {"<"}
              {"="} 20 МБ/файл , обмежити 3 файли)
            </p>
            <Form.Item>
              <Checkbox onChange={() => {}} className="checkbox-form-item">
                Електронна пошта та адреса для виставлення рахунків залишаються
                незмінними;
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                name="submitButton"
                className="submit-button"
                onClick={() => {}}
              >
                Зв'язатися з нами
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Flex>
    </>
  );
}
