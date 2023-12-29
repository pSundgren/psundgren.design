import React from "react";

/* COMPONENTS */
import Section from "../../components/common/Section";
import { WPTechLogo } from "../../components/common/Logo";

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
  { name: "#171717", bg: "bg-[#171717]", text: "text-neutral-50" },
  { name: "#71717A", bg: "bg-[#71717A]", text: "text-neutral-50" },
  { name: "#FAFAFA", bg: "bg-[#FAFAFA]", text: "text-neutral-700" },
];

const STORMER = [
  { name: "#6366F1", bg: "bg-[#6366F1]", text: "text-neutral-50" },
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
    case "time_log":
      return (
        <Section p="pb-36">
          <div className="space-y-6">
            <h1 className="text-sm text-neutral-500">Colors</h1>
            <div className="flex flex-row items-center justify-between">
              {TIME_LOG.map((color) => (
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
    case "twiceme":
      return (
        <Section p="pb-36">
          <div className="space-y-6">
            <h1 className="text-sm text-neutral-500">Colors</h1>
            <div className="flex flex-row items-center justify-between">
              {TWICEME.map((color) => (
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
    case "stormer":
      return (
        <Section p="pb-36">
          <div className="space-y-6">
            <h1 className="text-sm text-neutral-500">Colors</h1>
            <div className="flex flex-row items-center justify-between">
              {STORMER.map((color) => (
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
            <h1 className="text-sm text-neutral-400">Logotype</h1>
            <div className="">
              <div className="">
                <WPTechLogo />
              </div>
            </div>
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
            <WPTechMockups />
          </div>
        </Section>
      );
    case "wp_appen":
      return (
        <Section bg="" p="pb-36">
          <div className="space-y-6">
            <h1 className="text-neutral-500 text-sm">Result</h1>
            <WPTechMockups />
          </div>
        </Section>
      );
    case "time_log":
      return (
        <Section bg="" p="pb-36">
          <div className="space-y-6">
            <h1 className="text-neutral-500 text-sm">Result</h1>
            <WPTechMockups />
          </div>
        </Section>
      );
    case "twiceme":
      return (
        <Section bg="" p="pb-36">
          <div className="space-y-6">
            <h1 className="text-neutral-500 text-sm">Result</h1>
            <WPTechMockups />
          </div>
        </Section>
      );
    case "stormer":
      return (
        <Section bg="" p="pb-36">
          <div className="space-y-6">
            <h1 className="text-neutral-500 text-sm">Result</h1>
            <WPTechMockups />
          </div>
        </Section>
      );
    default:
      return null;
  }
};

const WPTechMockups = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="bg-neutral-200 h-16/9 w-full" />
    </div>
  );
};
