import React from "react";
import Section from "../../components/common/Section";

export const ProjectDescription = ({ desc, duration, roles }) => {
  return (
    <Section p="py-36">
      <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-14 justify-between">
        <div className="w-full lg:w-1/2 space-y-3">
          <p className="text-neutral-500 text-sm">Overview</p>
          <p className="text-2xl text-neutral-700 whitespace-pre-line">
            {desc}
          </p>
        </div>

        <div className="flex flex-col space-y-8">
          <div className="text-start space-y-3">
            <p className="text-neutral-500 text-sm">Duration</p>
            <p className="text-2xl text-neutral-700">{duration}</p>
          </div>
          <div className="text-start space-y-3">
            <p className="text-neutral-500 text-sm">Roles</p>
            <div className="space-y-0">
              {roles.map((item) => (
                <p className="text-2xl text-neutral-700">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
