import { Link } from "react-router-dom";
import "./style.scss";

export default function LinkComponent({ linkValue, linkLabel }) {
  return (
    <Link className="link" to={linkValue}>
      {linkLabel}
    </Link>
  );
}
