import React from "react";

/* Components */
import SVG from "../assets/svgs/SVG";

const navbar_entries = [
  {
    label: "LET'S TALK",
    to: "mailto:sundgren.pontus@gmail.com",
  },
];

const Navbar = ({ changeCursorVariant, scrollPosition, fill }) => {
  return (
    <nav className="inline-flex fixed justify-center content-center flex-row top-0 w-screen z-50 py-6 px-6">
      <div className="flex flex-row justify-between w-full">
        <a
          href="/"
          onMouseEnter={() => changeCursorVariant("hover")}
          onMouseLeave={() => changeCursorVariant("default")}
        >
          <SVG
            variant="sign-sm"
            fill={fill === "light" ? "#F0FDFA" : "#042F2E"}
          />
        </a>
        {/** 
        {navbar_entries.map((entry) => (
          <a href={entry.to} key={entry.label} className="">
            <button
              key={entry.label}
              className={`flex flec-row gap-4 ${
                fill === "light" ? "text-teal-50" : "text-teal-950"
              } cursor-pointer transition-all ease-out duration-500`}
              onMouseEnter={() => changeCursorVariant("hover")}
              onMouseLeave={() => changeCursorVariant("default")}
            >
              {entry.label}
              {/*<SVG variant="arrow-right" fill={fill} />
            </button>
          </a>
        ))}*/}
      </div>
    </nav>
  );
};

export default Navbar;
