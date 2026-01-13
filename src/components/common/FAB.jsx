import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import linkedin from "../../assets/svgs/linkedin-in.svg";
import mail from "../../assets/svgs/envelope.svg";

/* Components */
import SVG from "../../assets/svgs/SVG";
import { RevealEqualInView, RevealStaggeredInView } from "./Reveal";

const FAB = ({ label, onClick, isOpen }) => {
  return (
    <div className="relative">
      <motion.div
        key={label}
        typeof="button"
        animate={
          isOpen
            ? { opacity: 0, width: "130px", height: "52px" }
            : { opacity: 1, width: "130px", height: "52px" }
        }
        className="mt-6 w-[130px] h-[52px] text-sm mx-auto p-4 shadow bg-teal-600 text-neutral-50 cursor-pointer rounded-lg flex justify-center items-center z-10"
        onClick={onClick}
      >
        <RevealEqualInView duration={0.2} delay={0.1}>
          <p className="font-secondary">{label}</p>
        </RevealEqualInView>
      </motion.div>

      <div className="absolute top-0 left-0 right-0 flex flex-row gap-6 justify-center items-center">
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              className="bg-teal-600 rounded-lg shadow h-[52px] w-[52px] flex justify-center items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: -10 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <a
                href="mailto:sundgren.pontus@gmail.com"
                className="flex justify-center items-center h-[52px] w-[52px]"
                onClick={onClick}
              >
                <img src={mail} alt="mail" className="w-[32px]" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              className="bg-teal-600 rounded-lg shadow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 10 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <a
                href="https://www.linkedin.com/in/pontus-sundgren/"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center h-[52px] w-[52px]"
                onClick={onClick}
              >
                <img src={linkedin} alt="linkedin" className="w-[32px]" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FAB;
