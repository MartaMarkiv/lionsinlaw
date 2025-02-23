import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
