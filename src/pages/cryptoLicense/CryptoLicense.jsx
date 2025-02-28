import { Flex } from "antd";
import "./style.scss";
import Icon from "../../components/iconComponent/Icon";
import Faq from "../../components/faq/Faq";
import libraMonet from "../../assets/images/libraMonet.png";
import cryptoLibrary from "../../assets/images/cryptoLibrary.png";
import cryptoLicense from "../../assets/images/cryptiLicense.png";
import cryptoWallet from "../../assets/images/cryptoWallet.png";
import amlKyc from "../../assets/images/aml-kys.png";
import icoSto from "../../assets/images/iso-sto.png";
import LicenseBlock from "../../components/licenseBlock/LicenseBlock";

export default function CryptoLicense() {
  return (
    <>
      <div className="crypto-license-page-wrapper">
        <div className="crypto-license-header">
          <div className="title">
            <span>LionsInLaw</span>
            <div className="monet-wrapper" />
          </div>
          <Flex align="center" justify="space-between">
            <Flex
              align="center"
              justify="space-between"
              vertical={true}
              className="description-block"
            >
              <div className="cont-wrapper">
                <p className="count">50+</p>
                <p>Ліцензовані фахівці, яким довіряють</p>
              </div>
              <p style={{ textAlign: "left" }}>
                Ваш експерт у міжнародному бізнесі та криптовалютному
                ліцензуванні. Професійні рішення для створення компаній та
                отримання ліцензій у будь-якій юрисдикції.
              </p>
            </Flex>
            <Flex justify="space-between" className="license-description">
              <Flex vertical={true} justify="space-between">
                <div>
                  <p className="title">Ліцензування Криптовалют</p>
                  <Flex align="center" className="crypto-license-item">
                    <span>Дотримання вимог AML/KYC.</span>
                    <Icon name="ok-white" />
                  </Flex>
                  <Flex align="center" className="crypto-license-item">
                    <span>Ліцензії на обмін криптовалютами</span>
                    <Icon name="ok-white" />
                  </Flex>
                  <Flex align="center" className="crypto-license-item">
                    <span>Послуги зберігання цифровими активами</span>
                    <Icon name="ok-white" />
                  </Flex>
                </div>
                <img src={cryptoLibrary} alt="Crypto library" />
              </Flex>
              <div className="license-crypto-image-wrapper">
                <img src={libraMonet} alt="Crypto license" />
              </div>
            </Flex>
          </Flex>
        </div>
        <LicenseBlock
          description="Ми допомагаємо в отриманні ліцензій на обмін криптовалютами, забезпечуючи дотримання місцевих норм і операційних вимог. Наша команда допомагає зорієнтуватися в складному процесі подання заявки та нормативно-правовій базі, щоб полегшити затвердження ліцензій."
          imgInst={cryptoLicense}
          linkRef={"/"}
          title="Ліцензії на обмін криптовалютами"
        />
        <LicenseBlock
          description="Lionsinlaw підтримує клієнтів в отриманні ліцензій на послуги гаманця та зберігання криптовалюти, забезпечуючи безпечне керування цифровими активами, дотримуючись нормативних стандартів."
          imgInst={cryptoWallet}
          linkRef={"/"}
          title="Послуги гаманця та зберігання"
          isRevert={true}
        />
        <LicenseBlock
          description="Для клієнтів, які запускають початкові пропозиції монет (ICO) або пропозиції токенів безпеки (STO), ми надаємо вказівки щодо дотримання нормативних вимог і допомагаємо отримати необхідні ліцензії для законного продажу токенів"
          imgInst={icoSto}
          linkRef={"/"}
          title="Відповідність ICO/STO:"
        />
        <LicenseBlock
          description="Забезпечення відповідності нормам щодо боротьби з відмиванням грошей (AML) і «Знай свого клієнта» (KYC) має вирішальне значення в індустрії криптовалют. Lionsinlaw допомагає впроваджувати надійні рамки відповідності, щоб відповідати нормативним вимогам і зменшувати ризики."
          imgInst={amlKyc}
          linkRef={"/"}
          title="Відповідність AML/KYC:"
          isRevert={true}
        />
        <Faq />
      </div>
    </>
  );
}
