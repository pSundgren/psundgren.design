import React from "react";

const Section = ({ id, bg, h, children }) => {
  return (
    <section
      id={id}
      className={`inline-flex justify-center content-center py-36 w-full bg-cover ${bg} ${h}`}
    >
      <div id="section_content" className="w-full mx-6 max-w-5xl">
        {children}
      </div>
    </section>
  );
};
export default Section;
