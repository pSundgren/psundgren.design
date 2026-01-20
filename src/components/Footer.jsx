import React from "react";
import Section from "./common/Section";
import SVG from "../assets/svgs/SVG";

const Footer = ({ changeCursorVariant }) => {
  const thisYear = new Date().getFullYear();
  return (
    <Section p="py-14">
      <div className="flex flex-row justify-between rounded-xl bg-clip-padding px-4 py-4 backdrop-filter backdrop-blur-sm bg-opacity-[2%] shadow border border-[#ffffff20]">
        <div className="flex flex-col items-center w-full text-center space-y-4">
          <SVG variant="sign-sm" fill="#171717" />
          <div>
            <p className="text-neutral-500 text-xs">Pontus Sundgren</p>
            <a href="mailto:sundgren.pontus@gmail.com">
              <p className="text-neutral-500 hover:text-teal-700 transition-all ease-out duration-500 text-xs">
                sundgren.pontus@gmail.com
              </p>
            </a>
          </div>
          <p className="text-neutral-500 text-xs">
            {" "}
            &#169;
            {` ${thisYear}, All right reserved`}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
