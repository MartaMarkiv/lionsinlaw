import "./style.scss";
import config from "../../config";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { COMPANY_REGISTRATION_ROUTE } from "../../routes/routes";

export default function FlagsContainer() {
  return (
    <Marquee className="flags-container">
      {config.nameFlags.map((itemFlag, index) => (
        <Link
          key={`${index}:${itemFlag.flag}`}
          to={`${COMPANY_REGISTRATION_ROUTE}/${itemFlag.link}`}
          title={itemFlag.name}
        >
          <div className={`flag-item ${itemFlag.flag}`} />
        </Link>
      ))}
    </Marquee>
  );
}
