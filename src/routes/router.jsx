import { createBrowserRouter } from "react-router-dom";
import { MAIN_ROUTE } from "./routes";
import Main from "../pages/main/Main";
import App from "../App";

const router = createBrowserRouter([
  {
    path: MAIN_ROUTE,
    element: <App />,
    children: [
      {
        path: MAIN_ROUTE,
        element: <Main />,
      },
    ],
  },
]);

export default router;
