import React from "react";

import { easeInOut, motion } from "framer-motion";

/**
 *  Reveals each child of the component at once
 */

export const RevealEqualInView = ({
  children,
  motionClass,
  duration,
  delay,
}) => {
  const container = {
    hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        ease: easeInOut,
        delay: delay ? delay : 0.6,
        duration: duration ? duration : 0.8,
      },
    },
  };

  return (
    <div className="w-full h-full">
      <motion.div
        className={motionClass}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
};

/**
 *  Reveals each child of the component with a delay
 */

export const RevealStaggeredInView = ({ children, motionClass, stagger }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: stagger ? stagger : 0.6,
        ease: easeInOut,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
    exit: { opacity: 0, y: 10, filter: "blur(8px)" },
  };

  return (
    <div className="w-full h-full">
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        className={motionClass}
        viewport={{ once: true }}
      >
        {children.map((child) => (
          <motion.li variants={item}>{child}</motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

/**
 * Reveals one element to appear from the bottom of the viewport
 */

export const AppearFromBottom = ({ children, motionClass }) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0, 0, 0.2, 1],
        duration: 0.6,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      variants={item}
      inital="hidden"
      whileInView="show"
      className={motionClass}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
