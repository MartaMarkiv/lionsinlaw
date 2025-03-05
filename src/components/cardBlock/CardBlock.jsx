import { Flex, Form, Input } from "antd";
import "./style.scss";
import Icon from "../iconComponent/Icon";

export default function CardBlock({typeBlock}) {
  return <div className="card-block-wrapper">
    <Flex align="center" className="card-block-header">
      <Icon name="ok-red"/>
      {
        typeBlock === "idCard" ? <span className="sub-title">Паспортні дані</span> :
        <Flex vertical={true}>
          <span className="sub-title">Credit Card</span>
          <span className="description">Visa, Mastercard, American Amex</span>
        </Flex>
      }
    </Flex>
      <Form.Item name="blockNumber" label={typeBlock === "idCard" ? "Номер паспорта":"Номер карти"}>
        <Input className="full-input" placeholder="ХХХХХХХХХХХХХХХХХХХХ"/>
      </Form.Item>
      <Flex align="center" justify="space-between" className="card-block-info-wrapper">
        <Form.Item name="personalNumber" label={typeBlock === "idCard" ? "Ким видано":"Ім'я власника"}>
          <Input className="full-input" placeholder={typeBlock === "idCard" ? "6879":"Іван Харітонович"}/>
        </Form.Item>
        <Form.Item name="blockDate" label="Дата">
          <Input type="date" className="full-input" placeholder="ММ/YYYY"/>
        </Form.Item>
        <Form.Item name="csvSeries" label={typeBlock === "idCard" ? "Серія" : "CSV"}>
          <Input className="full-input" placeholder={typeBlock === "idCard" ? "123456789" : "***"}/>
        </Form.Item>
      </Flex>
  </div>
}