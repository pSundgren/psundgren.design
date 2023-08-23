import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

/* Utils */
import { spring, useVariants } from "./utils/cursor";

/* Views */
import Home from "./views/Home.jsx";
import Navbar from "./components/Navbar.jsx";

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

  return (
    <div className="App font-primary scroll-smooth" ref={ref}>
      <motion.div
        variants={variants}
        className="circle invisible lg:visible"
        animate={cursorVariant}
        transition={spring}
      />
      <Navbar
        changeCursorVariant={changeCursorVariant}
        fill={scrollPosition <= 500 ? "#F0FDFA" : "#042F2E"}
      />
      <Home />
    </div>
  );
}

export default App;
