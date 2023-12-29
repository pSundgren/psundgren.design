import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Wave from "react-wavify";
import { spring, useVariants } from "../utils/cursor";

/* Sections */
import Navbar from "../components/Navbar";
import { Hero } from "./sections/Hero";
import About from "./sections/About";
import CreativeCatalogue from "./sections/CreativeCatalogue";
import Footer from "../components/Footer";

const Home = () => {
  const [cursorVariant, changeCursorVariant] = useState("default");
  const ref = useRef(null);
  const variants = useVariants(ref);

  return (
    <>
      <motion.div
        variants={variants}
        className="circle invisible lg:visible"
        animate={cursorVariant}
        transition={spring}
      />
      <Navbar changeCursorVariant={changeCursorVariant} />
      <Hero />
      <Wave
        className="-translate-y-36"
        fill="#ffffff"
        paused={false}
        options={{
          height: 0,
          amplitude: 140,
          speed: 0.1,
          points: 1,
        }}
      />
      <About changeCursorVariant={changeCursorVariant} />
      <CreativeCatalogue changeCursorVariant={changeCursorVariant} />
      <Footer changeCursorVariant={changeCursorVariant} />
    </>
  );
};

export default Home;
