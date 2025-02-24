import { Link } from "react-router-dom";
import Icon from "../iconComponent/Icon";
import "./style.scss";

export default function MoreLink({linkValue = "", theme="light"}) {
  return <Link className={`more-link ${theme}`} to={linkValue}><span>Детальніше</span><Icon name={`more-${theme}`}/></Link>
}