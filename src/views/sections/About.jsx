import React from "react";
import Section from "../../components/common/Section";

import { RevealStaggeredInView } from "../../components/common/Reveal";

const About = ({ changeCursorVariant }) => {
  return (
    <Section p="pb-64">
      <RevealStaggeredInView motionClass={"text-3xl space-y-6 max-w-[900px]"}>
        <h2 className="text-sm text-gray-500">Hello there,</h2>
        <p className="text-2xl text-neutral-700">
          My name is <span>Pontus Sundgren</span>, , a dynamic product designer
          and front-end developer based in vibrant Stockholm. Currently
          spearheading the product design for two impactful applications—one
          internal, one public—I bring a meticulous approach honed during my
          master's studies in interaction technology and design.
        </p>
        <p className="text-2xl text-neutral-700">
          <span>What sets me apart?</span> I thrive on diving deep into a
          product, collaborating seamlessly with teams to enhance and optimize
          every facet. As a detail-oriented designer, I find joy in the
          iterative journey of constant improvement, ensuring products not only
          meet but exceed market expectations.
        </p>
      </RevealStaggeredInView>
    </Section>
  );
};

export default About;
