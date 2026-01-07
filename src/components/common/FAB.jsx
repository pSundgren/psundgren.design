import React from "react";
import { AnimatePresence, motion } from "framer-motion";

/* Components */
import SVG from "../../assets/svgs/SVG";
import { RevealEqualInView, RevealStaggeredInView } from "./Reveal";

const FAB = ({ label, onClick, isOpen }) => {
  return (
    <motion.div
      key={label}
      typeof="button"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="mt-6 w-fit text-sm mx-auto p-4 bg-teal-600 text-neutral-50 cursor-pointer"
      onClick={onClick}
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <RevealStaggeredInView
            motionClass="flex flex-row gap-4"
            stagger={0.2}
          >
            <p>Email</p>
            <p>LinkedIn</p>
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
