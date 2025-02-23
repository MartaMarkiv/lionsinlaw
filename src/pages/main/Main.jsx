import { Flex } from "antd";
import "./style.scss";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div className="main-section">
        <Flex align="center" justify="space-between">
          <div>
            <div>Глобальні корпоративні послуги</div>
            <div>
              Комплексні корпоративні послуги по всьому світу: реєстрація
              компаній, відкриття банківських рахунків, торгові послуги,
              криптоліцензії та експертні податкові консультації
            </div>
            <Flex>
              <div>
                <div>10+</div>
                <div>Років Досвіду</div>
              </div>
              <div>
                <div>1000+</div>
                <div>Задоволених клієнтів</div>
              </div>
            </Flex>
          </div>
          <div>
            <div>50+</div>
            <div>Юрисдикцій для реєстрації компаній</div>
            <div>LionsInLaw</div>
            <div>
              Ваш надійний партнер у сфері глобальних корпоративних послуг і
              офшорних рішень
            </div>
            <Link to={""}>Зв'язатися з нами</Link>
          </div>
        </Flex>
        <div>Flags container</div>
      </div>
    </>
  );
}
