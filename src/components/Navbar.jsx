import React from "react";

/* Components */
import SVG from "../assets/svgs/SVG";
import Section from "./common/Section";
import { Link } from "react-router-dom";

const Navbar = ({ changeCursorVariant }) => {
  return (
    <nav className="inline-flex fixed justify-center content-center flex-row top-0 w-screen z-50 py-4 bg-neutral-800">
      <Section>
        <Link to="/">
          <SVG variant="sign-sm" fill={"#FAFAFA"} />
        </Link>
      </Section>
    </nav>
  );
};

export default Navbar;
