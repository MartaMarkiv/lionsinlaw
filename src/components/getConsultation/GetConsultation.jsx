import { Flex } from "antd";
import "./style.scss";
import { Link } from "react-router-dom";

export default function GetConsultation() {
  return (
    <div className="get-consultation-wrapper">
      <div className="banner-wrapper">
        <div className="banner-gradient" />
        <p className="title">
          Отримайте експертну консультацію щодо створення офшорної компанії з{" "}
          <span className="selected-text"> LionsInLaw</span>
        </p>
        <p className="description">
          Ефективне створення офшорної компанії: Консультації та підтримка
        </p>
        <Link>Консультація</Link>
      </div>
    </div>
  );
}
