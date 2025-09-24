import { Flex, Row, Col } from "antd";
import Icon from "../iconComponent/Icon";
import "./style.scss";
import config from "../../config";

export default function ContactPhones() {
  return (
    <div className="contact-phones-list">
      <Flex className="title">
        <Icon name="phone" />
        <span>Контакти</span>
      </Flex>
      <Row gutter={[60, 24]} className="phone-list-row">
        {config.contactPhones.map((item, index) => (
          <Col key={`${item.flag}:${index}`} span={8}>
            <Flex
              align="center"
              className="phone-info-item"
            >
              <Flex align="center">
                <Icon name={`${item.flag}-icon`} />
                <span>{item.name}:</span>
              </Flex>
              <span>{item.phone}</span>
            </Flex>
          </Col>
        ))}
        <Col className="gutter-row" span={8}>
          <Flex
            align="center"
            justify="flex-end"
            className="phone-info-item call-number"
          >
            <Icon name="whatsapp" />
            <span>+48 453 193 540 </span>
          </Flex>
        </Col>
        {/* <Col className="gutter-row" span={8}>
          <Flex
            align="center"
            justify="flex-end"
            className="phone-info-item call-number"
          >
            <Icon name="viber" />
            <span>+65 932 66888</span>
          </Flex>
        </Col> */}
      </Row>
    </div>
  );
}
