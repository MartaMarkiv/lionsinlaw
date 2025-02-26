import { createBrowserRouter } from "react-router-dom";
import {
  MAIN_ROUTE,
  CONTACTS_ROUTE,
  JURISDICTIONS_ROUTE,
  BANK_ACCOUNT_ROUTE,
  CRYPTO_LICENSE_ROUTE,
  FINANCIAL_LICENSE_ROUTE,
} from "./routes";
import Main from "../pages/main/Main";
import App from "../App";
import Contacts from "../pages/contacts/Contacts";
import Jurisdictions from "../pages/jurisdictions/Jurisdictions";
import BankAccounts from "../pages/bankAccounts/BankAccounts";
import CryptoLicense from "../pages/cryptoLicense/CryptoLicense";
import FinancialLicense from "../pages/financialLicense/FinancialLicense";

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
      {
        path: BANK_ACCOUNT_ROUTE,
        element: <BankAccounts />,
      },
      {
        path: CRYPTO_LICENSE_ROUTE,
        element: <CryptoLicense />,
      },
      {
        path: FINANCIAL_LICENSE_ROUTE,
        element: <FinancialLicense />
      }
    ],
  },
]);

export default router;
