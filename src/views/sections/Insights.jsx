import React from "react";
import Section from "../../components/common/Section";
import { RevealStaggeredInView } from "../../components/common/Reveal";

export const Insights = ({ insight_arr }) => {
  return (
    <Section p="pb-36">
      <div className="space-y-4">
        <h1 className="text-sm text-neutral-500">Insights</h1>
        <RevealStaggeredInView motionClass="space-y-6">
          {insight_arr.map(({ title, desc }) => (
            <div className="space-y-4 max-w-[700px]">
              <h2 className="text-2xl text-neutral-700">{title}</h2>
              <p className="text-base text-neutral-500 whitespace-pre-line">
                {desc}
              </p>
            </div>
          ))}
        </RevealStaggeredInView>
      </div>
    </Section>
  );
};
