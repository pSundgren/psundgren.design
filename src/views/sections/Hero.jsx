import React from "react";
import { motion } from "framer-motion";

/* Components */
import Section from "../../components/common/Section";
import SVG from "../../assets/svgs/SVG";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Hero = () => {
  return (
    <Section id="hero" bg="bg-waves" p="py-36">
      <div className="flex flex-row justify-center w-fill my-[120px]">
        <div className="flex flex-col">
          <div className="pr-6">
            <SVG variant="sign" fill="rgb(240 253 250)" />
          </div>
          <motion.ul
            className="flex flex-row gap-x-10 pt-8"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {["UX/UI DESIGNER", "FRONT-END DEV."].map((index) => (
              <motion.li key={index} variants={item}>
                <p className="text-sm text-teal-50">{index}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
