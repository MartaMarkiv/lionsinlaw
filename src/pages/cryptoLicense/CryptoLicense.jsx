import { Flex } from "antd";
import "./style.scss";
import Icon from "../../components/iconComponent/Icon";

export default function CryptoLicense() {
  return (
    <>
      <div className="crypto-license-header">
        <p className="title">LionsInLaw</p>
        <Flex align="center" justify="space-between">
          <Flex align="center" justify="space-between" vertical={true}>
            <div>
              <p>50+</p>
              <p>Ліцензовані фахівці, яким довіряють</p>
            </div>
            <p>
              Ваш експерт у міжнародному бізнесі та криптовалютному
              ліцензуванні. Професійні рішення для створення компаній та
              отримання ліцензій у будь-якій юрисдикції.
            </p>
          </Flex>
          <Flex align="center" justify="space-between">
            <div>
              <p className="title">Ліцензування Криптовалют</p>
              <Flex align="center" className="crypto-license-item">
                <span>дотримання вимог AML/KYC.</span>
                <Icon name="ok-white" />
              </Flex>
              <Flex align="center" className="crypto-license-item">
                <span>ліцензії на обмін криптовалютами</span>
                <Icon name="ok-white" />
              </Flex>
              <Flex align="center" className="crypto-license-item">
                <span>послуги зберігання цифровими активами</span>
                <Icon name="ok-white" />
              </Flex>
              <img src="" alt="" />
            </div>
            <div className="license-crypto-image-wrapper">
              <img src="" alt="" />
              <img src="" alt="Crypto monet" />
            </div>
          </Flex>
        </Flex>
      </div>
    </>
  );
}
