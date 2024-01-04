import React from "react";

/* Components */
import SVG from "../assets/svgs/SVG";
import Section from "./common/Section";
import { Link } from "react-router-dom";

const Navbar = ({ changeCursorVariant }) => {
  return (
    <nav className="inline-flex fixed justify-center content-center flex-row top-0 w-screen z-50 py-4 bg-neutral-800">
      <Section>
        <div className="flex flex-row justify-between items-center">
          <Link to="/">
            <SVG variant="sign-sm" fill={"#FAFAFA"} />
          </Link>
          <div className="flex flex-row gap-x-6 items-center">
            <a
              href="https://www.linkedin.com/in/pontus-sundgren/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </Section>
    </nav>
  );
};

const MailIcon = () => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.25 8.5L12.25 13.5L21.75 8.5M2.25 4.5H21.75V19.5H2.25V4.5Z"
        stroke="#FAFAFA"
        stroke-width="1.5"
      />
    </svg>
  );
};

const LinkedInIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_18_1475)">
        <rect width="72" height="72" fill="#FAFAFA" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M62 62H51.3156V43.8021C51.3156 38.8128 49.4198 36.0245 45.4707 36.0245C41.1746 36.0245 38.9301 38.9261 38.9301 43.8021V62H28.6333V27.3333H38.9301V32.0029C38.9301 32.0029 42.026 26.2742 49.3826 26.2742C56.7357 26.2742 62 30.7645 62 40.0512V62ZM16.3493 22.794C12.8421 22.794 10 19.9297 10 16.397C10 12.8644 12.8421 10 16.3493 10C19.8566 10 22.697 12.8644 22.697 16.397C22.697 19.9297 19.8566 22.794 16.3493 22.794ZM11.0326 62H21.7694V27.3333H11.0326V62Z"
          fill="#262626"
        />
      </g>
      <defs>
        <clipPath id="clip0_18_1475">
          <rect width="72" height="72" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Navbar;
