import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

/* Utils */
import { spring, useVariants } from "./utils/cursor";

/* Views */
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./utils/scrollToTop.jsx";

function App({ children }) {
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
      <ScrollToTop />
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
      {children}
      <Footer changeCursorVariant={changeCursorVariant} />
    </div>
  );
}

export default App;
