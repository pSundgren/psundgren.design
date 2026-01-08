import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { spring, useVariants } from "../utils/cursor";

/* Sections */
import { Hero } from "./sections/Hero";
import About from "./sections/About";
import { CreativeCatalogue } from "./sections/CreativeCatalogue";

export const Home = () => {
  const [cursorVariant] = useState("default");
  const ref = useRef(null);
  const variants = useVariants(ref);

  return (
    <div>
      <motion.div
        variants={variants}
        className="circle invisible lg:visible"
        animate={cursorVariant}
        transition={spring}
      />
      <Hero />
      <About />
      <CreativeCatalogue />
    </div>
  );
};

export default Home;
