import Icon from "../../components/iconComponent/Icon";
import "./style.scss";
import mauritiusNature from "../../assets/images/mauritiusNature.png";
import mauritiusLibra from "../../assets/images/mauritiusLibra.png";
import mauritiusTaxes from "../../assets/images/mauritiusTaxes.png";
import mauritiusBusiness from "../../assets/images/mauritiusBusiness.png";
import { Button, Flex } from "antd";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";
import CompanyDescriptionGrid from "../../components/companyDescriptionGrid/CompanyDescriptionGrid";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import CountryTarrifList from "../../components/countryTarrifList/CountryTarrifList";
import { COMPANY_REGISTRATION_ROUTE } from "../../routes/routes";
import Faq from "../../components/faq/Faq";

export default function MauritiusCompany() {
  return (
    <section className="page-content-wrapper mauritius-page-wrapper">
      <Flex className="header-info-wrapper">
        <Flex vertical={true} className="data-info-wrapper">
          <p className="title">Мауріцій: Лояльне оподаткування та стабільний бізнес-клімат для вашого успіху від</p>
          <p className="law-name">LionsInLaw</p>
          <p className="description">Вибір Мауріцію для вашого бізнесу — це шанс отримати вигідними податковими пільгами та стабільною економічною ситуацією з підтримкою професії</p>
        </Flex>
        <div className="image-wrapper" />
      </Flex>
      <Flex className="tariff-header-wrapper">
        <img src={mauritiusNature} alt="" />
        <Flex vertical={true} className="tariff-info" justify="center">
          <p className="title">Ефективне обслуговування вашої офшорної компанії на 1 або 2 роки з <span className="red-text">LionsInLaw</span></p>
          <Flex className="tariff-btn" justify="space-between" align="center">
            <span>Тарифи</span>
            <Button icon={<Icon name="tariff" />} />
          </Flex>
        </Flex>
      </Flex>
      <CompanySubDescriptionBlock
        description="Мауріцій — острівна країна в Індійському океані, яка є популярною юрисдикцією для реєстрації офшорних компаній завдяки низьким податкам та лояльному законодавств"
        imageRef={mauritiusLibra}
        hasShadow={false}
        title={
          <p className="title">
            <span className="selected-text">Юридична система Мауріціусу:</span>{" "}
            синтез англійського загального та французького цивільного права.
          </p>
        }
      />
      <CompanyDescriptionGrid
        businessDescr="Реєстрація компанії на Мауріції є простою та може бути завершена в короткий термін за допомогою місцевих юристів або агентів."
        businessImage={mauritiusBusiness}
        imageRef={mauritiusTaxes}
        financialDescr="Фінансовий сектор Мауріцію регулюється Центральним банком та Національною фінансовою комісією, що забезпечує високий рівень прозорості та відповідності міжнародним стандартам"
        subDescr="Мауріцій є популярною юрисдикцією для міжнародних компаній завдяки стабільній економіці, сприятливим умовам для іноземних інвестицій і бізнесу."
        riskDescr="Хоча Мауріцій пропонує сприятливі умови для бізнесу, існують міжнародні вимоги до фінансової прозорості, яких необхідно дотримуватись."
        taxesDescr="Мауріцій пропонує одну з найнижчих податкових ставок на прибуток (15%), а також низькі ставки ПДВ та інші вигідні податкові пільги для інвесторів."
        title="основні переваги та практичні Аспекти реєстрації компанії"
        company="Мауріцію"
      />
      <ConsultingOffshoreComp description="Дізнайтеся про вартість і умови реєстрації вашої майбутньої офшорної компанії від наших експертів" linkLabel="Зареєструвати компанію" title="Отримайте експертну консультацію щодо створення офшорної компанії" linkRoute={`${COMPANY_REGISTRATION_ROUTE}/mauritius`}>
        <CountryTarrifList />
      </ConsultingOffshoreComp>
      <Faq />
    </section>
  );
}
