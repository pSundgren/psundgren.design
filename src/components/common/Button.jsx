import React from "react";

/* Components */
import SVG from "../../assets/svgs/SVG";

const Button = ({ label, fill, to }) => {
  return (
    <a href={to}>
      <button
        key={label}
        className={`flex flec-row gap-4 group-hover:gap-8 items-center text-sm ${
          fill === "#F0FDFA" ? "text-neutral-50" : "text-neutral-950"
        } cursor-pointer transition-all ease-out duration-500`}
      >
        {label}
        <SVG variant="arrow-right" fill={fill} />
      </button>
    </a>
  );
};
export default Button;
