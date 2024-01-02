import React from "react";

/* Components */
import Section from "../../components/common/Section";
import SVG from "../../assets/svgs/SVG";
import { RevealStaggeredInView } from "../../components/common/Reveal";

export const Hero = () => {
  return (
    <Section id="hero" bg="bg-neutral-800" p="pt-[196px] pb-36">
      <div className="flex flex-row justify-center w-fill my-[120px]">
        <div className="flex flex-col">
          <div className="pr-6">
            <SVG variant="sign" fill="#fafafa" />
          </div>
          <RevealStaggeredInView motionClass="flex flex-row gap-x-10 pt-8">
            <p className="text-sm text-neutral-50">UX/UI DESIGNER</p>
            <p className="text-sm text-neutral-50">FRONT-END DEV.</p>
          </RevealStaggeredInView>
        </div>
      </div>
    </Section>
  );
};

export const CatalogueHero = ({ title, desc }) => {
  return (
    <Section bg="bg-neutral-800" p="pt-[196px] pb-36">
      <RevealStaggeredInView motionClass="space-y-6 max-w-[580px]">
        <h1 className="text-3xl text-neutral-50">{title}</h1>
        <h2 className="text-lg text-neutral-500">{desc}</h2>
      </RevealStaggeredInView>
    </Section>
  );
};
