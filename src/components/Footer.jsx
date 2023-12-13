import React from "react";
import Section from "./common/Section";
import SVG from "../assets/svgs/SVG";

import PROJECT_LIST from "../views/sections/CreativeCatalogue";

const Footer = () => {
  return (
    <Section p="py-14" bg="bg-neutral-800">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col space-y-4">
          <SVG variant="sign-sm" fill="#F0FDFA" />
          <div>
            <p className="text-neutral-300">Pontus Sundgren</p>
            <a href="mailto:sundgren.pontus@gmail.com">
              <p className="text-neutral-300">sundgren.pontus@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
