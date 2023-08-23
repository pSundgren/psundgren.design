import React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

/* Utils */
import { spring, useVariants } from "./utils/cursor";

/* Views */
import Home from "./views/Home.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [cursorVariant] = useState("default");
  const ref = useRef(null);
  const variants = useVariants(ref);

  return (
    <div className="App font-primary" ref={ref}>
      <motion.div
        variants={variants}
        className="circle"
        animate={cursorVariant}
        transition={spring}
      />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
