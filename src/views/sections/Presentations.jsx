import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

/* COMPONENTS */
import Section from "../../components/common/Section";
import SVG from "../../assets/svgs/SVG";
import { WPTechLogo } from "../../components/common/Logo";
import {
  RevealEqualInView,
  RevealStaggeredInView,
} from "../../components/common/Reveal";

/* WP TECH MOCKUP IMAGES */
import wp_tech_mockup_1 from "../../assets/images/project_images/wp_tech/wp_tech_1.jpg";
import wp_tech_mockup_2 from "../../assets/images/project_images/wp_tech/wp_tech_2.jpg";

/* WP APPEN MOCKUP IMAGES */
import wp_appen_mockup from "../../assets/images/project_images/wp_appen/result_mockup.jpg";
import wp_appen_mockup_2 from "../../assets/images/project_images/wp_appen/result_mockup_2.jpg";
import phone_one from "../../assets/images/project_images/wp_appen/phone_1_straight.webp";
import phone_two from "../../assets/images/project_images/wp_appen/phone_2_straight.webp";
import phone_three from "../../assets/images/project_images/wp_appen/phone_4_straight.webp";

/* TIME LOG MOCKUP IMAGES */
import time_log_mockup_1 from "../../assets/images/project_images/time_log/time_log_mockup.jpeg";
import time_log_mockup_2 from "../../assets/images/project_images/time_log/time_log_mockup_2.jpeg";

/* STORMER MOCKUP IMAGES */
import stormer_mockup from "../../assets/images/project_images/stormer/stormer_mockup.jpeg";

/* PROJECT COLORS */
const WP_TECH = [
  { name: "#5EA6C5", bg: "bg-[#5EA6C5]", text: "text-neutral-50" },
  { name: "#262626", bg: "bg-[#262626]", text: "text-neutral-50" },
  { name: "#404040", bg: "bg-[#404040]", text: "text-neutral-50" },
  { name: "#FAFAFA", bg: "bg-[#FAFAFA]", text: "text-neutral-700" },
];

const WP_APP = [
  { name: "#6366F1", bg: "bg-[#6366F1]", text: "text-neutral-50" },
  { name: "#3F3F46", bg: "bg-[#3F3F46]", text: "text-neutral-50" },
  { name: "#71717A", bg: "bg-[#71717A]", text: "text-neutral-50" },
  { name: "#FAFAFA", bg: "bg-[#FAFAFA]", text: "text-neutral-700" },
];

const TIME_LOG = [
  { name: "#059669", bg: "bg-[#059669]", text: "text-neutral-50" },
  { name: "#262626", bg: "bg-[#262626]", text: "text-neutral-50" },
  { name: "#71717A", bg: "bg-[#71717A]", text: "text-neutral-50" },
  { name: "#FAFAFA", bg: "bg-[#FAFAFA]", text: "text-neutral-700" },
];

const TWICEME = [
  { name: "#00BFA5", bg: "bg-[#00BFA5]", text: "text-neutral-50" },
  { name: "#BE123C", bg: "bg-[#BE123C]", text: "text-neutral-50" },
  { name: "#171717", bg: "bg-[#171717]", text: "text-neutral-50" },
  { name: "#FAFAFA", bg: "bg-[#FAFAFA]", text: "text-neutral-700" },
];

const STORMER = [
  { name: "#292828", bg: "bg-[#292828]", text: "text-neutral-50" },
  { name: "#526EB7", bg: "bg-[#526EB7]", text: "text-neutral-50" },
  { name: "#82AFD9", bg: "bg-[#82AFD9]", text: "text-neutral-50" },
  { name: "#FAFAFA", bg: "bg-[#FAFAFA]", text: "text-neutral-700" },
];

export const ColorPresentation = ({ type }) => {
  switch (type) {
    case "wp_tech":
      return (
        <Section p="pb-36">
          <div className="space-y-6">
            <h1 className="text-sm text-neutral-500">Colors</h1>
            <div className="flex flex-row items-center justify-between">
              {WP_TECH.map((color) => (
                <div className={`${color.bg} h-48 w-full flex items-end p-3`}>
                  <p
                    className={`${color.text} text-neutral-50 opacity-70 text-sm`}
                  >
                    {color.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      );
    case "wp_appen":
      return (
        <Section p="pb-36">
          <div className="space-y-6">
            <h1 className="text-sm text-neutral-500">Colors</h1>
            <div className="flex flex-row items-center justify-between">
              {WP_APP.map((color) => (
                <div className={`${color.bg} h-48 w-full flex items-end p-3`}>
                  <p className={`${color.text} opacity-70 text-sm`}>
                    {color.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      );
    case "time_log":
      return (
        <Section p="pb-36">
          <div className="space-y-6">
            <h1 className="text-sm text-neutral-500">Colors</h1>
            <div className="flex flex-row items-center justify-between">
              {TIME_LOG.map((color) => (
                <div className={`${color.bg} h-48 w-full flex items-end p-3`}>
                  <p className={`${color.text} opacity-70 text-sm`}>
                    {color.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      );
    case "twiceme":
      return (
        <Section p="pb-36">
          <div className="space-y-6">
            <h1 className="text-sm text-neutral-500">Colors</h1>
            <div className="flex flex-row items-center justify-between">
              {TWICEME.map((color) => (
                <div className={`${color.bg} h-48 w-full flex items-end p-3`}>
                  <p className={`${color.text} opacity-70 text-sm`}>
                    {color.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      );
    case "stormer":
      return (
        <Section p="pb-36">
          <div className="space-y-6">
            <h1 className="text-sm text-neutral-500">Colors</h1>
            <div className="flex flex-row items-center justify-between">
              {STORMER.map((color) => (
                <div className={`${color.bg} h-48 w-full flex items-end p-3`}>
                  <p className={`${color.text} opacity-70 text-sm`}>
                    {color.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      );
    default:
      return null;
  }
};

export const LogoPresentation = ({ type }) => {
  switch (type) {
    case "wp_tech":
      return (
        <Section p="pb-36">
          <div className="space-y-6">
            <h1 className="text-sm text-neutral-500">Logotype</h1>
            <RevealEqualInView>
              <WPTechLogo />
            </RevealEqualInView>
          </div>
        </Section>
      );
    default:
      return null;
  }
};

export const TypographyPresentation = ({ type }) => {
  switch (type) {
    case "wp_tech":
      return (
        <Section p="pb-36">
          <div className="space-y-6">
            <h1 className="text-sm text-neutral-500">Typography</h1>
            <RevealEqualInView motionClass="space-y-0 flex flex-row gap-x-6 items-center">
              <p className="text-3xl text-neutral-700">
                Typeface — GT Walsheim
              </p>
              <Link to="https://www.grillitype.com/typeface/gt-walsheim">
                <SVG variant="link-sm" fill="#71717A" />
              </Link>
            </RevealEqualInView>
          </div>
        </Section>
      );
    case "time_log":
      return (
        <Section p="pb-36">
          <div className="space-y-6">
            <h1 className="text-sm text-neutral-500">Typography</h1>
            <RevealEqualInView motionClass="space-y-0 flex flex-row gap-x-6 items-center">
              <p className="text-3xl font-sf-pro-regular text-neutral-700">
                Typeface — SF Pro
              </p>
              <Link to="https://developer.apple.com/fonts/">
                <SVG variant="link-sm" fill="#71717A" />
              </Link>
            </RevealEqualInView>
          </div>
        </Section>
      );
    case "stormer":
      return (
        <Section p="pb-36">
          <div className="space-y-6">
            <h1 className="text-sm text-neutral-500">Typography</h1>
            <RevealEqualInView motionClass="space-y-0 flex flex-row gap-x-6 items-center">
              <p className="text-3xl font-inter text-neutral-700">
                Typeface — Inter
              </p>
              <Link to="https://fonts.google.com/specimen/Inter">
                <SVG variant="link-sm" fill="#71717A" />
              </Link>
            </RevealEqualInView>
          </div>
        </Section>
      );
    case "twiceme":
      return (
        <Section p="pb-36">
          <div className="space-y-6">
            <h1 className="text-sm text-neutral-500">Typography</h1>
            <RevealEqualInView motionClass="space-y-0 flex flex-row gap-x-6 items-center">
              <p className="text-3xl font-lato text-neutral-700">
                Typeface — Lato
              </p>
              <Link to="https://fonts.google.com/specimen/Lato">
                <SVG variant="link-sm" fill="#71717A" />
              </Link>
            </RevealEqualInView>
          </div>
        </Section>
      );
    case "wp_appen":
      return (
        <Section p="pb-36">
          <div className="space-y-6">
            <h1 className="text-sm text-neutral-500">Typography</h1>
            <RevealEqualInView motionClass="space-y-0 flex flex-row gap-x-6 items-center">
              <p className="text-3xl font-sf-pro-regular text-neutral-700">
                Typeface — SF Pro
              </p>
              <Link to="https://developer.apple.com/fonts/">
                <SVG variant="link-sm" fill="#71717A" />
              </Link>
            </RevealEqualInView>
          </div>
        </Section>
      );
    default:
      return null;
  }
};

export const ProblemAndSolution = ({ problem, solution }) => {
  return (
    <Section p="pb-36">
      <div className="flex flex-col gap-y-14">
        <div className="flex flex-col gap-y-6 w-full lg:w-1/2">
          <h1 className="text-sm text-neutral-500">Problem</h1>
          <p className="text-2xl text-neutral-700">{problem}</p>
        </div>
        <div className="flex flex-col gap-y-6 w-full lg:w-1/2">
          <h1 className="text-sm text-neutral-500">Solution</h1>
          <p className="text-2xl text-neutral-700">{solution}</p>
        </div>
      </div>
    </Section>
  );
};

export const Role = ({ role }) => {
  return (
    <Section p="pb-36">
      <div className="space-y-6">
        <h1 className="text-sm text-neutral-500">Role</h1>
        <p className="text-3xl text-neutral-700">{role}</p>
      </div>
    </Section>
  );
};

export const Mockups = ({ type }) => {
  switch (type) {
    case "wp_tech":
      return (
        <Section p="pb-36">
          <h1 className="text-neutral-500 text-sm mb-6">Result</h1>
          <div className="space-y-0">
            <RevealStaggeredInView motionClass="flex flex-col justify-center items-center">
              <div className="inline-block overflow-hidden">
                <img
                  src={wp_tech_mockup_2}
                  alt="WP Appen Mockup"
                  className="scale-150 lg:scale-100 transition-all duration-500 ease-out"
                />
              </div>
              <div className="inline-block overflow-hidden -translate-y-2">
                <img
                  src={wp_tech_mockup_1}
                  alt="WP Appen Mockup"
                  className="scale-150 lg:scale-100 transition-all duration-500 ease-out"
                />
              </div>
            </RevealStaggeredInView>
          </div>
        </Section>
      );
    case "wp_appen":
      return (
        <Section p="pb-36">
          <h1 className="text-neutral-500 text-sm mb-6">Result</h1>
          <div className="space-y-36">
            <RevealEqualInView>
              <div className="inline-block overflow-hidden">
                <img
                  src={wp_appen_mockup}
                  alt="WP Appen Mockup"
                  className="scale-150 lg:scale-100 transition-all duration-500 ease-out"
                />
              </div>
            </RevealEqualInView>
            <RevealStaggeredInView motionClass="flex flex-row gap-x-6 justify-center items-center">
              <img src={phone_one} alt="Mockup" className="w-[300px]" />
              <img src={phone_two} alt="Mockup" className="w-[300px]" />
              <img src={phone_three} alt="Mockup" className="w-[300px]" />
            </RevealStaggeredInView>
            <RevealEqualInView>
              <div className="inline-block overflow-hidden">
                <img
                  src={wp_appen_mockup_2}
                  alt="WP Appen Mockup"
                  className="scale-150 lg:scale-100 transition-all duration-500 ease-out"
                />
              </div>
            </RevealEqualInView>
          </div>
        </Section>
      );
    case "time_log":
      return (
        <Section p="pb-36">
          <h1 className="text-neutral-500 text-sm mb-6">Result</h1>
          <div className="space-y-0">
            <RevealStaggeredInView motionClass="flex flex-col justify-center items-center">
              <div className="inline-block overflow-hidden">
                <img
                  src={time_log_mockup_1}
                  alt="WP Appen Mockup"
                  className="scale-150 lg:scale-100 transition-all duration-500 ease-out"
                />
              </div>
              <div className="inline-block overflow-hidden -translate-y-2">
                <img
                  src={time_log_mockup_2}
                  alt="WP Appen Mockup"
                  className="scale-150 lg:scale-100 transition-all duration-500 ease-out"
                />
              </div>
            </RevealStaggeredInView>
          </div>
        </Section>
      );
    case "twiceme":
      return (
        <Section bg="" p="pb-36">
          <div className="space-y-6">
            <h1 className="text-neutral-500 text-sm">Result</h1>
            <RevealEqualInView>
              {/*TODO: Replace this */}
              <div className="flex flex-row justify-between">
                <div className="h-16/9 w-full bg-neutral-300" />
              </div>
            </RevealEqualInView>
          </div>
        </Section>
      );
    case "stormer":
      return (
        <Section bg="" p="pb-36">
          <div className="space-y-6">
            <h1 className="text-neutral-500 text-sm">Result</h1>
            <RevealEqualInView>
              <div className="inline-block overflow-hidden">
                <img
                  src={stormer_mockup}
                  alt="WP Appen Mockup"
                  className="scale-150 lg:scale-100 transition-all duration-500 ease-out"
                />
              </div>
            </RevealEqualInView>
          </div>
        </Section>
      );
    default:
      return null;
  }
};

export const Animations = ({ type }) => {
  const ref = useRef();
  const isInView = useInView(ref);

  const logo = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(0, 0, 0, 0)",
    },
  };

  switch (type) {
    case "wp_tech":
      return (
        <Section p="pb-36">
          <div className="space-y-6">
            <h1 className="text-sm text-neutral-500">Animation</h1>
            <div className="w-full h-[700px] lg:h-[800px] bg-gradient-to-br from-[#2F5362] to-[#5EA6C5] flex justify-center items-center">
              <motion.svg
                ref={ref}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 756 568"
                className="stroke-white stroke-2 opacity-40 max-w-[756px] max-h-[568px] py-36 lg:py-14"
              >
                <motion.path
                  d="M249.502 566.985C301.626 530.266 318.035 459.14 285.545 402.836L53.6462 0.965332C1.52228 37.6849 -14.8862 108.81 17.604 165.115L249.502 566.985Z"
                  variants={logo}
                  initial={{
                    pathLength: 0,
                    fill: "rgba(0, 0, 0, 0)",
                  }}
                  animate={{
                    pathLength: isInView ? 1 : 0,
                    fill: "rgba(0, 0, 0, 0)",
                  }}
                  transition={{
                    default: { duration: 2, delay: 1, ease: [0, 0, 0.2, 1] },
                  }}
                />
                <motion.path
                  d="M505.544 566.985C557.668 530.266 574.076 459.14 541.586 402.836L309.688 0.965332C257.564 37.6849 241.155 108.81 273.645 165.115L505.544 566.985Z"
                  variants={logo}
                  initial={{
                    pathLength: 0,
                    fill: "rgba(0, 0, 0, 0)",
                  }}
                  animate={{
                    pathLength: isInView ? 1 : 0,
                    fill: "rgba(0, 0, 0, 0)",
                  }}
                  transition={{
                    default: { duration: 2, delay: 1.4, ease: [0, 0, 0.2, 1] },
                  }}
                />
                <motion.path
                  d="M574.021 98.353C574.021 48.2919 614.583 7.70938 664.618 7.70938C714.652 7.70938 755.214 48.2919 755.214 98.353C755.214 148.414 714.652 188.997 664.618 188.997C614.583 188.997 574.021 148.414 574.021 98.353Z"
                  variants={logo}
                  initial={{
                    pathLength: 0,
                    fill: "rgba(0, 0, 0, 0)",
                  }}
                  animate={{
                    pathLength: isInView ? 1 : 0,
                    fill: "rgba(0, 0, 0, 0)",
                  }}
                  transition={{
                    default: { duration: 2, delay: 1.8, ease: [0, 0, 0.2, 1] },
                  }}
                />
              </motion.svg>
            </div>
          </div>
        </Section>
      );
    default:
      return null;
  }
};

export const Icons = ({ type }) => {
  switch (type) {
    case "wp_appen":
      return (
        <IconList>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fafafa"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          </Icon>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fafafa"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
              />
            </svg>
          </Icon>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fafafa"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </Icon>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fafafa"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
              />
            </svg>
          </Icon>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fafafa"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          </Icon>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fafafa"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </Icon>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fafafa"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
              />
            </svg>
          </Icon>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fafafa"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </Icon>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fafafa"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </Icon>
        </IconList>
      );
    case "time_log":
      return (
        <IconList>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fafafa"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          </Icon>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fafafa"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
              />
            </svg>
          </Icon>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fafafa"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </Icon>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fafafa"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
              />
            </svg>
          </Icon>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fafafa"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          </Icon>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fafafa"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </Icon>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fafafa"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
              />
            </svg>
          </Icon>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fafafa"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </Icon>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fafafa"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </Icon>
        </IconList>
      );
    default:
      return null;
  }
};

const IconList = ({ children }) => {
  return (
    <Section bg="bg-black-texture" p="mb-36">
      <div className="space-y-6 py-36">
        <h1 className="text-neutral-400 text-sm">Icon style</h1>
        <div className="grid grid-cols-3 grid-rows-3 gap-x-14 gap-y-28">
          {children}
        </div>
      </div>
    </Section>
  );
};

const Icon = ({ children }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-gradient-to-br from-neutral-50/20 to-white/10 p-6">
        {children}
      </div>
    </div>
  );
};
