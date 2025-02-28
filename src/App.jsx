import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ContactPhones from "./components/contactPhones/ContactPhones";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <ContactPhones />
      </main>
      <Footer />
    </>
  );
}

export default App;
