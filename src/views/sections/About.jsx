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
            <p className="text-3xl text-neutral-700">
              I'm <span>Pontus Sundgren</span>. An experienced UX/UI designer
              and front—end developer currently living in Stockholm. Being
              detail—oriented, experienced in design process optimization, and
              future design I am out to make myself a valuable asset in every
              project I am a part of.
            </p>
          </RevealStaggeredInView>
        </div>
      </div>
    </Section>
  );
};

export default About;
