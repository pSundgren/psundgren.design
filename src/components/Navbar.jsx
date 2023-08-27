import React from "react";

import SVG from "../assets/svgs/SVG";

const navbar_entries = [
  {
    label: "LET'S TALK",
    to: "/",
  },
];

const Navbar = ({ changeCursorVariant, scrollPosition, fill }) => {
  return (
    <nav className="inline-flex fixed justify-center content-center flex-row top-0 py-6 px-6 w-screen z-50">
      <div className="flex flex-row justify-between w-full max-w-7xl">
        <a
          href="/"
          className="backdrop-blur-md py-3 px-5 rounded-lg bg-gradient-to-br from-gray-50/[0.1] via-gray-50/[0.3]  to-gray-50/[0.1] border border-opacity-30 border-gray-50 shadow-sm"
          onMouseEnter={() => changeCursorVariant("hover")}
          onMouseLeave={() => changeCursorVariant("default")}
        >
          <SVG variant="sign-sm" fill={fill} />
        </a>
        <p>{scrollPosition}</p>
        {navbar_entries.map((entry) => (
          <a href={entry.to} key={entry.label}>
            <button
              key={entry.label}
              className={`flex flec-row gap-4 ${
                fill === "#F0FDFA" ? "text-teal-50" : "text-teal-950"
              } cursor-pointer transition-all ease-out duration-500`}
              onMouseEnter={() => changeCursorVariant("hover")}
              onMouseLeave={() => changeCursorVariant("default")}
            >
              {entry.label}
              <SVG variant="arrow-right" fill={fill} />
            </button>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
