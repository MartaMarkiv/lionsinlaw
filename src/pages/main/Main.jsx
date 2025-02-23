import { Flex } from "antd";
import "./style.scss";
import { Link } from "react-router-dom";
import FlagsContainer from "../../components/flagsContainer/FlagsContainer";

export default function Main() {
  return (
    <>
      <Flex className="main-section" justify="space-between">
        <div className="main-background" />
        <Flex
          vertical={true}
          align="center"
          justify="space-between"
          className="main-sub-part global"
        >
          <div>
            <div className="main-title" style={{ textTransform: "uppercase" }}>
              Глобальні корпоративні послуги
            </div>
            <div className="description">
              Комплексні корпоративні послуги по всьому світу: реєстрація
              компаній, відкриття банківських рахунків, торгові послуги,
              криптоліцензії та експертні податкові консультації
            </div>
          </div>
          <Flex className="quality" justify="space-between" align="center">
            <div>
              <div className="count">10+</div>
              <div className="quality-name">Років Досвіду</div>
            </div>
            <div>
              <div className="count">1000+</div>
              <div className="quality-name">Задоволених клієнтів</div>
            </div>
          </Flex>
        </Flex>
        <Flex
          vertical={true}
          align="center"
          justify="start"
          className="main-sub-part registration"
        >
          <Flex
            align="center"
            justify="center"
            vertical={true}
            style={{ maxWidth: 440 }}
          >
            <div className="count-company">50+</div>
            <div className="main-title" style={{ textAlign: "center" }}>
              Юрисдикцій для реєстрації компаній
            </div>
          </Flex>
          <Flex
            vertical={true}
            align="center"
            justify="center"
            className="law-name-info"
          >
            <div className="name-law">LionsInLaw</div>
            <span
              className="description medium"
              style={{ textAlign: "center" }}
            >
              Ваш надійний партнер у сфері глобальних корпоративних послуг і
              офшорних рішень
            </span>
          </Flex>

          <Link to={""} className="contact-us">
            Зв'язатися з нами
          </Link>
        </Flex>
      </Flex>
      <FlagsContainer />
    </>
  );
}
