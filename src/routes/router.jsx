import { createBrowserRouter } from "react-router-dom";
import { MAIN_ROUTE, CONTACTS_ROUTE, JURISDICTIONS_ROUTE } from "./routes";
import Main from "../pages/main/Main";
import App from "../App";
import Contacts from "../pages/contacts/Contacts";
import Jurisdictions from "../pages/jurisdictions/Jurisdictions";

const router = createBrowserRouter([
  {
    path: MAIN_ROUTE,
    element: <App />,
    children: [
      {
        path: MAIN_ROUTE,
        element: <Main />,
      },
      {
        path: CONTACTS_ROUTE,
        element: <Contacts />,
      },
      {
        path: JURISDICTIONS_ROUTE,
        element: <Jurisdictions />,
      },
    ],
  },
]);

export default router;
