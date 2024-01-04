import React from "react";
import { Link } from "react-router-dom";

/* COMPONENTS */
import Section from "../../components/common/Section";
import SVG from "../../assets/svgs/SVG";
import { WPTechLogo } from "../../components/common/Logo";
import {
  RevealEqualInView,
  RevealStaggeredInView,
} from "../../components/common/Reveal";

/* WP TECH MOCKUP IMAGES */
import wp_tech_start from "../../assets/images/wp_tech_start.jpg";

/* WP APPEN MOCKUP IMAGES */
import wp_appen_mockup from "../../assets/images/project_images/wp_appen/result_mockup.jpg";
import wp_appen_mockup_2 from "../../assets/images/project_images/wp_appen/result_mockup_2.jpg";
import phone_one from "../../assets/images/project_images/wp_appen/phone_1_straight.png";
import phone_two from "../../assets/images/project_images/wp_appen/phone_2_straight.webp";
import phone_three from "../../assets/images/project_images/wp_appen/phone_4_straight.webp";

/* TIME LOG MOCKUP IMAGES */

/* TWICEME MOCKUP IMAGES */

/* STORMER MOCKUP IMAGES */
import stormer_start from "../../assets/images/stormer_start.jpg";

/* PROJECT COLORS */
const WP_TECH = [
  { name: "#5EA6C5", bg: "bg-[#5EA6C5]", text: "text-neutral-50" },
  { name: "#3F3F46", bg: "bg-[#3F3F46]", text: "text-neutral-50" },
  { name: "#71717A", bg: "bg-[#71717A]", text: "text-neutral-50" },
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
  { name: "#3F3F46", bg: "bg-[#3F3F46]", text: "text-neutral-50" },
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
  { name: "#526EB7", bg: "bg-[#526EB7]", text: "text-neutral-50" },
  { name: "#3F3F46", bg: "bg-[#3F3F46]", text: "text-neutral-50" },
  { name: "#71717A", bg: "bg-[#71717A]", text: "text-neutral-50" },
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

export const MockupsPresentation = ({ type }) => {
  switch (type) {
    case "wp_tech":
      return (
        <Section p="pb-36">
          <div className="space-y-6">
            <h1 className="text-neutral-500 text-sm">Result</h1>
            <RevealEqualInView>
              <div className="flex flex-row justify-between">
                <img
                  src={wp_tech_start}
                  alt="Homepage of WP Tech"
                  className="h-16/9 w-full"
                />
              </div>
            </RevealEqualInView>
          </div>
        </Section>
      );
    case "wp_appen":
      return (
        <Section p="pb-36">
          <h1 className="text-neutral-500 text-sm mb-6">Result</h1>
          <div className="space-y-36">
            <RevealEqualInView>
              <img src={wp_appen_mockup} alt="WP Appen Mockup" />
            </RevealEqualInView>
            <RevealStaggeredInView motionClass="flex flex-row gap-x-6 justify-center items-center">
              <img src={phone_one} alt="Mockup" className="w-[300px]" />
              <img src={phone_two} alt="Mockup" className="w-[300px]" />
              <img src={phone_three} alt="Mockup" className="w-[300px]" />
            </RevealStaggeredInView>
            <RevealEqualInView>
              <img src={wp_appen_mockup_2} alt="WP Appen Mockup" />
            </RevealEqualInView>
          </div>
        </Section>
      );
    case "time_log":
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
              <div className="flex flex-row justify-between">
                <img
                  src={stormer_start}
                  alt="Homepage of Stormer"
                  className="h-16/9 w-full"
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

export const TechStackPresentation = ({ arr }) => {
  return (
    <Section p="pb-36">
      <div className="space-y-6">
        <h1 className="text-neutral-500 text-sm">Tech used</h1>
        <div className="flex flex-row flex-wrap justify-between items-center">
          {arr.map((variant) => (
            <SVG variant={variant} />
          ))}
        </div>
      </div>
    </Section>
  );
};
