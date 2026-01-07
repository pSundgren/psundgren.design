import React from "react";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";

import mail from "../assets/svgs/square-envelope-dark.svg";
import linkedin from "../assets/svgs/linkedin-dark.svg";

/* Components */
import SVG from "../assets/svgs/SVG";
import Section from "./common/Section";
import { Link } from "react-router-dom";

const Navbar = ({ changeCursorVariant }) => {
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
          className="scale-x-[1.05] flex flex-row justify-between items-center bg-neutral-800 px-4 py-2 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[2%] shadow border border-[#ffffff20]
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

const MailIcon = () => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.25 8.5L12.25 13.5L21.75 8.5M2.25 4.5H21.75V19.5H2.25V4.5Z"
        stroke="#FAFAFA"
        stroke-width="1.5"
      />
    </svg>
  );
};

const LinkedInIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_18_1475)">
        <rect width="72" height="72" fill="#FAFAFA" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M62 62H51.3156V43.8021C51.3156 38.8128 49.4198 36.0245 45.4707 36.0245C41.1746 36.0245 38.9301 38.9261 38.9301 43.8021V62H28.6333V27.3333H38.9301V32.0029C38.9301 32.0029 42.026 26.2742 49.3826 26.2742C56.7357 26.2742 62 30.7645 62 40.0512V62ZM16.3493 22.794C12.8421 22.794 10 19.9297 10 16.397C10 12.8644 12.8421 10 16.3493 10C19.8566 10 22.697 12.8644 22.697 16.397C22.697 19.9297 19.8566 22.794 16.3493 22.794ZM11.0326 62H21.7694V27.3333H11.0326V62Z"
          fill="#262626"
        />
      </g>
      <defs>
        <clipPath id="clip0_18_1475">
          <rect width="72" height="72" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Navbar;
