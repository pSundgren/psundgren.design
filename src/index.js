import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* Styling */
import "./index.css";

/* Wrapper view */
import App from "./App";

/* Pages */
import Home from "./views/Home";
import WPAppen from "./views/catalogue/WPAppen";
import WPTech from "./views/catalogue/WPTech";
import Twiceme from "./views/catalogue/Twiceme";
import Timelog from "./views/catalogue/Timelog";
import Stormer from "./views/catalogue/Stormer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Home />
      </App>
    ),
  },
  {
    path: "/wp_appen",
    element: (
      <App>
        <WPAppen />
      </App>
    ),
  },
  {
    path: "/wp_tech",
    element: (
      <App>
        <WPTech />
      </App>
    ),
  },
  {
    path: "/twiceme",
    element: (
      <App>
        <Twiceme />
      </App>
    ),
  },
  {
    path: "/time_log",
    element: (
      <App>
        <Timelog />
      </App>
    ),
  },
  {
    path: "/stormer",
    element: (
      <App>
        <Stormer />
      </App>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
