import React from "react";
import Section from "../../components/common/Section";

export const ProjectDescription = ({ desc, duration, roles }) => {
  return (
    <Section p="py-36">
      <div className="flex flex-col lg:flex-row space-y-14 justify-between border-2">
        <p className="text-3xl text-neutral-700 w-full lg:w-1/2 border-2">
          {desc}
        </p>
        <div className="flex flex-col h-fit space-y-8 border-2">
          <div className="text-start space-y-3">
            <p className="text-neutral-500 text-sm">Duration</p>
            <p className="text-3xl text-neutral-700">{duration}</p>
          </div>
          <div className="text-start space-y-3">
            <p className="text-neutral-500 text-sm">Roles</p>
            <div className="space-y-0">
              {roles.map((item) => (
                <p className="text-3xl text-neutral-700">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
