import React from "react";
import Section from "../../components/common/Section";
import FAB from "../../components/common/FAB";

import { RevealStaggeredInView } from "../../components/common/Reveal";

const About = ({ changeCursorVariant }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Section p="pt-32 pb-64 items-center">
      <RevealStaggeredInView
        motionClass={"text-3xl space-y-4 max-w-[900px] mx-auto text-center"}
      >
        <h2 className="text-sm text-gray-500">About me</h2>
        {/* <p className="text-2xl text-neutral-700">
          I'm <span>Pontus Sundgren</span>, a dynamic product designer and
          front-end developer based in Stockholm. Currently leading the product
          design for two impactful applications. I bring a diligent approach
          honed during my master's studies in interaction technology and design.
          I thrive on diving deep into a product, collaborating seamlessly with
          teams to enhance and optimize every aspect. As a detail-oriented
          designer, I find joy in the iterative journey of constant improvement,
          ensuring products not only meet but exceed market expectations.
        </p> */}
        <p className="text-2xl text-neutral-900">
          At the core of my services is <span>design</span> — for web, mobile,
          or desktop platforms. Additional services include website design,
          advanced prototyping and animation, design systems, and visual
          identity design. Each service comes with its own unique solution and
          fresh ideas.
        </p>
        <FAB
          label="Get in touch"
          fill="#F0FDFA"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          isOpen={isOpen}
        />
      </RevealStaggeredInView>
    </Section>
  );
};

export default About;
