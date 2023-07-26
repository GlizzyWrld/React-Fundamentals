import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Views from './views'
import Navbar from "./components/Navbar";

const routeConfig = [
  {
    path: "/",
    element: Views.DogsView,
  },
  {
    path: "/Dogs/Whiskey",
    element: Views.WhiskeyView,
  },
  {
    path: "/Dogs/Duke",
    element: Views.DukeView,
  },
  {
    path: "/Dogs/Perry",
    element: Views.PerryView,
  },
  {
    path: "/*",
    element: Views.DogsView,
  },
];

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routeConfig.map((route) => (
          <Route exact path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
