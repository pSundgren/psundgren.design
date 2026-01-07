import React from "react";

const Section = ({ id, bg, p, children }) => {
  return (
    <div className="relative w-full">
      <section
        id={id}
        className={`inline-flex justify-center content-center ${p} w-full bg-cover ${bg} overflow-hidden`}
      >
        <div id="section_content" className="w-full mx-6 max-w-8xl">
          {children}
        </div>
      </section>
    </div>
  );
};
export default Section;
