import React from "react";

/* COMPONENTS */
import Section from "../../components/common/Section";
import { WPTechLogo } from "../../components/common/Logo";
import { RevealEqualInView } from "../../components/common/Reveal";

import stormer_start from "../../assets/images/stormer_start.jpg";
import wp_tech_start from "../../assets/images/wp_tech_start.jpg";
import SVG from "../../assets/svgs/SVG";
import { Link } from "react-router-dom";

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
              <p className="text-6xl text-neutral-700">GT Walsheim</p>
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
              <p className="text-6xl text-neutral-700">GT Walsheim</p>
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
              <p className="text-6xl font-inter text-neutral-700">Inter</p>
              <Link to="https://fonts.google.com/specimen/Inter">
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
              <p className="text-6xl font-sf-pro-regular text-neutral-700">
                SF Pro
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
        <Section bg="" p="pb-36">
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
        <div className="pb-36">
          <div className="space-y-6">
            <Section>
              <h1 className="text-neutral-500 text-sm">Result</h1>
            </Section>
            <RevealEqualInView>
              {/*TODO: Replace this */}
              <Section>
                <div className="flex flex-row justify-between">
                  <div className="h-16/9 w-full bg-neutral-300" />
                </div>
              </Section>
            </RevealEqualInView>
          </div>
        </div>
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

export const TechStackPresentation = ({ type }) => {
  switch (type) {
    case "time_log":
      return (
        <Section p="pb-36">
          <div className="space-y-6">
            <h1 className="text-neutral-500 text-sm">Tech stack</h1>
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-row">
                <p className="text-3xl text-neutral-700">
                  Design & prototyping
                </p>
              </div>
              <div className="flex flex-row">
                <p className="text-3xl text-neutral-700">Front end</p>
              </div>
              <div className="flex flex-row">
                <p className="text-3xl text-neutral-700">Back end</p>
              </div>
            </div>
          </div>
        </Section>
      );
    default:
      return null;
  }
};
