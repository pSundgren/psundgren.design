import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

/* Router import */
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

/* Utils */
import { spring, useVariants } from "./utils/cursor";

/* Views */
import Home from "./views/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WPAppen from "./views/catalogue/WPAppen.jsx";
import WPTech from "./views/catalogue/WPTech.jsx";
import Twiceme from "./views/catalogue/Twiceme.jsx";
import Timelog from "./views/catalogue/Timelog.jsx";
import Stormer from "./views/catalogue/Stormer.jsx";

function App() {
  const [cursorVariant, changeCursorVariant] = useState("default");
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ref = useRef(null);
  const variants = useVariants(ref);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home changeCursorVariant={changeCursorVariant} />,
    },
    {
      path: "/wp_appen",
      element: <WPAppen changeCursorVariant={changeCursorVariant} />,
    },
    {
      path: "/wp_tech",
      element: <WPTech changeCursorVariant={changeCursorVariant} />,
    },
    {
      path: "/twiceme",
      element: <Twiceme changeCursorVariant={changeCursorVariant} />,
    },
    {
      path: "/time_log",
      element: <Timelog changeCursorVariant={changeCursorVariant} />,
    },
    {
      path: "/stormer",
      element: <Stormer changeCursorVariant={changeCursorVariant} />,
    },
  ]);

  return (
    <RouterProvider router={router} ref={ref}>
      <ScrollRestoration />
      {/* <div className="App font-primary scroll-smooth" ref={ref}>
        <motion.div
          variants={variants}
          className="circle invisible lg:visible"
          animate={cursorVariant}
          transition={spring}
        />
        <Navbar
          changeCursorVariant={changeCursorVariant}
          fill={scrollPosition <= 500 ? "light" : "dark"}
        />
        <Home changeCursorVariant={changeCursorVariant} />
        <Footer changeCursorVariant={changeCursorVariant} />
      </div> */}
    </RouterProvider>
  );
}

export default App;
