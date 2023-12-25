import React from "react";
import Section from "../../components/common/Section";

import { RevealStaggeredInView } from "../../components/common/Reveal";

const About = ({ changeCursorVariant }) => {
  return (
    <Section p="pt-0 pb-64">
      <div className="flex flex-row">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-14">
          <RevealStaggeredInView motionClass={"text-3xl space-y-3"}>
            <h2 className="text-sm text-gray-500">Hello there,</h2>
            <p className="text-3xl">
              I'm <span>Pontus Sundgren</span>. A UX/UI designer and front-end
              developer, currently living in Stockholm and working at{" "}
              <span>
                <a
                  href="https://www.wptech.se"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#648C8B] transition-all ease-out duration-500"
                  onMouseEnter={() => changeCursorVariant("hover")}
                  onMouseLeave={() => changeCursorVariant("default")}
                >
                  WP Tech
                </a>
              </span>
              {". "}
              Responsible for leading the design process and visual development
              of the company. As well as aiding the front-end development.
            </p>
          </RevealStaggeredInView>
        </div>
        <div className="hidden lg:block w-full"></div>
      </div>
    </Section>
  );
};

export default About;
