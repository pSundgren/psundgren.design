import React from "react";
import Section from "./common/Section";
import SVG from "../assets/svgs/SVG";

const Footer = ({ changeCursorVariant }) => {
  return (
    <Section p="py-14" bg="bg-neutral-800">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col space-y-4">
          <SVG variant="sign-sm" fill="#F0FDFA" />
          <div>
            <p className="text-neutral-300 text-xs">Pontus Sundgren</p>
            <a
              href="mailto:sundgren.pontus@gmail.com"
              onMouseEnter={() => changeCursorVariant("hover")}
              onMouseLeave={() => changeCursorVariant("default")}
            >
              <p className="text-neutral-300 hover:text-neutral-50 transition-all ease-out duration-500 text-xs">
                sundgren.pontus@gmail.com
              </p>
            </a>
          </div>
          <p className="text-neutral-300 text-xs">
            {" "}
            &#169; 2024, All right reserved
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
