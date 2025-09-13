import { createHashRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import PDPPage from "./pages/politica-de-privacidad/PDPPage";
import EliminarCuentaPage from "./pages/eliminar-cuenta/EliminarCuentaPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/politica-de-privacidad",
    element: <PDPPage />,
  },
  {
    path: "/eliminar-cuenta",
    element: <EliminarCuentaPage />,
  },
]);
