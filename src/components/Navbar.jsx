import React from "react";

const navbar_entries = [
  {
    label: "LET'S TALK",
    to: "/",
  },
];

const Navbar = () => {
  return (
    <nav className="inline-flex justify-center content-center flex-row absolute top-0 py-6 px-6 w-screen">
      <div className="flex flex-row justify-end w-full mx-6 max-w-5xl">
        {navbar_entries.map((entry) => (
          <button key={entry.label} className="cursor-pointer">
            <a className="text-sm text-teal-50" href={entry.to}>
              {entry.label}
            </a>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
