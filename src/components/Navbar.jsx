import React from "react";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";

import mail from "../assets/svgs/square-envelope-dark.svg";
import linkedin from "../assets/svgs/linkedin-dark.svg";

/* Components */
import SVG from "../assets/svgs/SVG";
import Section from "./common/Section";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollY = useMotionValue(0);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latestScrollY) => {
    // Decide when to hide/show based on scroll direction and position
    const isScrollingDown = latestScrollY > scrollY.getPrevious();
    const scrollThreshold = 100; // Hide after scrolling down 100px

    if (isScrollingDown && latestScrollY > scrollThreshold) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Update scrollY value on scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollY.set(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
      className="inline-flex fixed justify-center content-center flex-row top-0 w-full z-50 py-4"
    >
      <Section bg={"overflow-visible"}>
        <div
          className="scale-x-[1.025] flex flex-row justify-between items-center px-4 py-2 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[2%] shadow border border-[#ffffff20]
"
        >
          <Link to="/">
            <SVG variant="sign-sm" fill={"#171717"} />
          </Link>
          <div className="flex flex-row gap-x-2 items-center">
            <a
              href="https://www.linkedin.com/in/pontus-sundgren/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" className="w-[32px]" />
            </a>
            <a href="mailto:sundgren.pontus@gmail.com">
              <img
                src={mail}
                alt="mail"
                className="w-[32px] fill-neutral-500"
              />
            </a>
          </div>
        </div>
      </Section>
    </motion.nav>
  );
};

export default Navbar;
