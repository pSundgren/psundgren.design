import React from "react";

const Section = ({ id, children }) => {
  return (
    <section id={id} className="inline-flex justify-center py-36 w-full">
      <div id="section_content" className="w-full max-w-5xl">
        {children}
      </div>
    </section>
  );
};
export default Section;
