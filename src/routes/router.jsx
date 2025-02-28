import { createBrowserRouter } from "react-router-dom";
import {
  MAIN_ROUTE,
  CONTACTS_ROUTE,
  JURISDICTIONS_ROUTE,
  BANK_ACCOUNT_ROUTE,
  CRYPTO_LICENSE_ROUTE,
  FINANCIAL_LICENSE_ROUTE,
  ISLA_MAN_COMPANY_ROUTE,
  IRELAND_COMPANY_ROUTE,
  SCOTLAND_COMPANY_ROUTE,
  USA_COMPANY_ROUTE,
  CURACAO_COMPANY_ROUTE,
  GIBRALTAR_COMPANY_ROUTE,
} from "./routes";
import Main from "../pages/main/Main";
import App from "../App";
import Contacts from "../pages/contacts/Contacts";
import Jurisdictions from "../pages/jurisdictions/Jurisdictions";
import BankAccounts from "../pages/bankAccounts/BankAccounts";
import CryptoLicense from "../pages/cryptoLicense/CryptoLicense";
import FinancialLicense from "../pages/financialLicense/FinancialLicense";
import ManIslandCompany from "../pages/manIslandCompany/ManIslandCompany";
import IrelandCompany from "../pages/irelandCompany/IrelandCompany";
import ScotlandCompany from "../pages/scotlandCompany/ScotlandCompany";
import UsaCompany from "../pages/usaCompany/UsaCompany";
import CuracaoCompany from "../pages/curacaoCompany/CuracaoCompany";
import GibraltarCompany from "../pages/gibraltarCompany/GibraltarCompany";

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
        element: <FinancialLicense />,
      },
      {
        path: ISLA_MAN_COMPANY_ROUTE,
        element: <ManIslandCompany />,
      },
      {
        path: IRELAND_COMPANY_ROUTE,
        element: <IrelandCompany />,
      },
      {
        path: SCOTLAND_COMPANY_ROUTE,
        element: <ScotlandCompany />,
      },
      {
        path: USA_COMPANY_ROUTE,
        element: <UsaCompany />,
      },
      {
        path: CURACAO_COMPANY_ROUTE,
        element: <CuracaoCompany />
      },
      {
        path: GIBRALTAR_COMPANY_ROUTE,
        element: <GibraltarCompany />
      }
    ],
  },
]);

export default router;
