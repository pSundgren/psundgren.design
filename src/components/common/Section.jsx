import React from "react";

const Section = ({ id, bg, p, children }) => {
  return (
    <section
      id={id}
      className={`inline-flex justify-center content-center ${p} w-full bg-cover ${bg}`}
    >
      <div id="section_content" className="w-full mx-6 max-w-8xl">
        {children}
      </div>
    </section>
  );
};
export default Section;
