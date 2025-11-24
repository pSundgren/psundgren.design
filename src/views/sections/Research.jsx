import React from "react";
import Section from "../../components/common/Section";

export const Research = ({ research }) => {
  return (
    <Section p="py-36">
      <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-14 justify-between">
        <div className="w-full lg:w-1/2 space-y-3">
          <p className="text-neutral-500 text-sm">Research results</p>
          <p className="text-2xl text-neutral-700 whitespace-pre-line">
            {research}
          </p>
        </div>
      </div>
    </Section>
  );
};
