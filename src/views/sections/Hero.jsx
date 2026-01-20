import React from "react";
import { AnimatePresence, motion } from "framer-motion";

/* Components */
import PFP from "../../assets/images/pontus-sundgren.webp";
import Section from "../../components/common/Section";
import SVG from "../../assets/svgs/SVG";
import { RevealStaggeredInView } from "../../components/common/Reveal";

export const Hero = () => {
  const [index, setIndex] = React.useState(0);

  const words = ["designer", "developer"];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <Section id="hero" p="pt-[196px] pb-36">
      <div className="flex flex-row justify-center w-fill my-[120px]">
        <div className="flex flex-col items-center justify-center">
          <p className="text-neutral-500 font-secondary">Hello there,</p>
          <div className="flex flex-row items-center justify-center text-neutral-900 text-xl md:text-3xl lg:text-4xl">
            {"I'm a "}
            <AnimatePresence mode="wait">
              <motion.p
                key={words[index]}
                className="w-[102px] md:w-[160px] lg:w-[180px] max-w-[180px] mx-2 flex justify-center font-secondary text-teal-700"
                initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {words[index]}
              </motion.p>
            </AnimatePresence>

            {" based in Stockholm"}
          </div>
          <div className="mt-8 pl-3 flex flex-row items-center justify-center gap-x-4">
            <img src={PFP} alt="linkedin" className="w-[86px] h-[86px]" />
            <div className="flex flex-col my-auto -translate-y-2">
              <p className="nowrap text-neutral-900 w-full translate-y-4">
                Pontus Sundgren
              </p>
              <SVG variant="sign" fill="#17171720" height={"42px"} />
            </div>
          </div>
          {/* <RevealStaggeredInView motionClass="flex flex-row gap-x-10 pt-8">
            <p className="text-sm text-neutral-50">PRODUCT DESIGNER</p>
            <p className="text-sm text-neutral-50">DESIGN ENGINEER</p>
          </RevealStaggeredInView> */}
        </div>
      </div>
    </Section>
  );
};

export const CatalogueHero = ({ title, desc, roles, img }) => {
  return (
    <Section p="pt-[196px] pb-36">
      <RevealStaggeredInView motionClass="flex flex-col text-center w-full items-center justify-center space-y-6">
        <h1 className="text-3xl text-neutral-900 max-w-[800px]">{title}</h1>
        <h2 className="text-lg text-neutral-500 max-w-[800px]">{desc}</h2>
      </RevealStaggeredInView>
      <RevealStaggeredInView
        stagger={0.2}
        motionClass="flex flex-row flex-wrap items-center justify-center gap-6 "
      >
        {roles.map((role) => (
          <p className="bg-neutral-100 text-neutral-500 px-4 py-2 rounded-lg text-xs whitespace-nowrap">
            {role}
          </p>
        ))}
      </RevealStaggeredInView>
    </Section>
  );
};
