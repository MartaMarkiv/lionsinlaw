import { Outlet, useLocation } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ContactPhones from "./components/contactPhones/ContactPhones";
import { ENGLAND_COMPANY_ROUTE, CONTACTS_ROUTE } from "./routes/routes";

function App() {
  const location = useLocation();

  const showPhonesBlock = [ENGLAND_COMPANY_ROUTE, CONTACTS_ROUTE].indexOf(location.pathname) < 0;
  return (
    <>
      <Header />
      <main>
        <Outlet />
        { showPhonesBlock && <ContactPhones />}
      </main>
      <Footer />
    </>
  );
}

export default App;
