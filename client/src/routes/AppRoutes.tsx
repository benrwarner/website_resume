import type { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/Resume";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default routes;
