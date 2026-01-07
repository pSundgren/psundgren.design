import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import linkedin from "../../assets/svgs/linkedin.svg";
import mail from "../../assets/svgs/square-envelope.svg";

/* Components */
import SVG from "../../assets/svgs/SVG";
import { RevealEqualInView, RevealStaggeredInView } from "./Reveal";

const FAB = ({ label, onClick, isOpen }) => {
  return (
    <motion.div
      key={label}
      typeof="button"
      animate={
        isOpen
          ? { width: "136px", height: "64px" }
          : { width: "130px", height: "52px" }
      }
      className="mt-6 w-[130px] h-[52px] text-sm mx-auto p-4 bg-teal-600 text-neutral-50 cursor-pointer rounded-lg flex justify-center items-center"
      onClick={onClick}
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <RevealStaggeredInView
            motionClass="flex flex-row gap-6 justify-center items-center h-full"
            stagger={0.2}
          >
            <a href="mailto:sundgren.pontus@gmail.com">
              <img src={mail} alt="mail" className="w-[42px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/pontus-sundgren/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" className="w-[42px]" />
            </a>
          </RevealStaggeredInView>
        ) : (
          <RevealEqualInView duration={0.2} delay={0.1}>
            <p>{label}</p>
          </RevealEqualInView>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAB;
