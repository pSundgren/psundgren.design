import React from "react";
import Section from "../../components/common/Section";
import FAB from "../../components/common/FAB";

import { RevealStaggeredInView } from "../../components/common/Reveal";

const About = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openAndReset = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  };

  return (
    <Section p="pt-32 pb-64 items-center">
      <RevealStaggeredInView
        motionClass={"text-3xl space-y-4 max-w-[900px] mx-auto text-center"}
      >
        <h2 className="font-secondary text-base text-gray-500">About me</h2>
        {/*<p className="text-2xl text-neutral-900">
          At the core of my passion is <span>design</span> — for web, mobile, or
          desktop platforms, as I also have a liking to developing engaging and
          pretty UI's through front-end development. A good final product
          derives from a good cooperation between design and development. Each
          design should come with its own unique solution and fresh idea.
        </p>*/}
        <p className="text-2xl text-neutral-900">
          Dependable and ownership-driven designer with a proven track record of
          designing data driven projects, end-to-end ownership, and strong
          engineer collaboration. Led the design for web-based systems and
          mobile applications, and am efficient in using AI throughout the
          design process. My work has contributed to measurable outcomes
          including a 30% reduction in logistics costs and increasing app
          effectiveness from ~40% to 97%.
        </p>
        <FAB
          label="Get in touch"
          fill="#F0FDFA"
          onClick={() => {
            openAndReset();
          }}
          isOpen={isOpen}
        />
      </RevealStaggeredInView>
    </Section>
  );
};

export default About;
