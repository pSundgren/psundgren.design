import React from "react";

import Section from "../../components/common/Section";

export const ContactMe = ({ changeCursorVariant }) => {
  return (
    <Section p="pt-14 pb-48">
      <div className="flex flex-col gap-4">
        <h2 className="text-sm text-neutral-500">
          Looking for something similar?
        </h2>
        <a
          className="text-3xl text-neutral-700 group w-fit"
          href="mailto:sundgren.pontus@gmail.com"
        >
          Get in{" "}
          <span
            onMouseEnter={() => changeCursorVariant("hover")}
            onMouseLeave={() => changeCursorVariant("default")}
            className="group-hover:text-[#648C8B] transition-all ease-out duration-500"
          >
            touch
          </span>
        </a>
      </div>
    </Section>
  );
};
