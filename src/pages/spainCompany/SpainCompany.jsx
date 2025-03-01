import { Flex } from "antd";
import "./style.scss";
import spainNature from "../../assets/images/spainNature.png";
import Faq from "../../components/faq/Faq";
import ConsultingOffshoreComp from "../../components/consultingOffshoreComp/ConsultingOffshoreComp";
import CompanySubDescriptionBlock from "../../components/companySubDescriptionBlock/CompanySubDescriptionBlock";

export default function SpainCompany() {
  return <section className="spain-company-page-wrapper">
    <Flex align="center" justify="flex-end" className="spain-company-header">
      <div className="header-wrapper">
        <p className="title">Відкрийте нові горизонти бізнесу з LionsInLaw в Іспанії!</p>
        <p className="description">Зробіть перший крок до успіху: реєстрація офшорної компанії з нашими експертами</p>
      </div>
      <div className="header-image"/>
    </Flex>
    <CompanySubDescriptionBlock description="Іспанія - країна в Піренейському півострові з розвиненою економікоюта доступом до європейського ринку.Іспанія має цивільну правову систему, що базується на законодавстві та конституції країни." imageRef={spainNature} title={<p className="title">Іспанія: Вхід до Європейського Ринку</p>} hasShadow={true}/>
    <ConsultingOffshoreComp />
    <Faq />
  </section>
}