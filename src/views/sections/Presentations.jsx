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
import wp_appen_worker from "../../assets/images/project_images/wp_appen/worker_mockup.jpeg";
import phone_one from "../../assets/images/project_images/wp_appen/phone_1_side.png";
import phone_two from "../../assets/images/project_images/wp_appen/phone_2_side.png";
import phone_three from "../../assets/images/project_images/wp_appen/phone_3_side.png";
import phone_four from "../../assets/images/project_images/wp_appen/phone_4_side.png";
import phone_five from "../../assets/images/project_images/wp_appen/phone_5_side.png";
import phone_six from "../../assets/images/project_images/wp_appen/phone_6_side.png";

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
              <p className="text-5xl md:text-6xl text-neutral-700">
                GT Walsheim
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
              <p className="text-5xl md:text-6xl text-neutral-700">
                GT Walsheim
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
              <p className="text-5xl md:text-6xl font-inter text-neutral-700">
                Inter
              </p>
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
              <p className="text-5xl md:text-6xl font-sf-pro-regular text-neutral-700">
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
            <Section p="pb-36 gap-y-14">
              <div className="flex flex-col lg:flex-row gap-y-6 lg:justify-between items-center">
                <img src={phone_one} alt="Phone mockup" className="w-[650px]" />
                <RevealStaggeredInView motionClass="space-y-6">
                  <h1 className="text-neutral-500 text-sm">
                    Reporting availability
                  </h1>
                  <p className="text-neutral-700 text-2xl max-w-[700px]">
                    Field workers are able to report whenever they are available
                    to work. This report is then sent to a planning department
                    that match available field workers to requested services
                    from customers.
                  </p>
                </RevealStaggeredInView>
              </div>
            </Section>
            <Section p="pb-36 gap-y-14">
              <div className="flex flex-col lg:flex-row-reverse gap-y-6 lg:justify-between items-center">
                <img src={phone_two} alt="Phone mockup" className="w-[650px]" />
                <RevealStaggeredInView motionClass="space-y-6">
                  <h1 className="text-neutral-500 text-sm">
                    Get an overview of your jobs
                  </h1>
                  <p className="text-neutral-700 text-2xl max-w-[700px]">
                    See the jobs you have planned for the day or select a later
                    date to check. See the current status of the different jobs
                    and get notified if a co-worker have added information to
                    the job.
                  </p>
                </RevealStaggeredInView>
              </div>
            </Section>
            <Section p="pb-36 gap-y-14">
              <div className="flex flex-col lg:flex-row gap-y-6 lg:justify-between items-center">
                <img
                  src={phone_three}
                  alt="Phone mockup"
                  className="w-[650px]"
                />
                <RevealStaggeredInView motionClass="space-y-6">
                  <h1 className="text-neutral-500 text-sm">
                    Read and confirm job information
                  </h1>
                  <p className="text-neutral-700 text-2xl max-w-[700px]">
                    Inside the job you'll find everything you need. All the
                    information that is registered by the planning department is
                    visible inside the information tab. Confirm important
                    information to let the planning department how the job is
                    coming along.
                  </p>
                </RevealStaggeredInView>
              </div>
            </Section>
            <Section p="pb-36 gap-y-14">
              <div className="flex flex-col lg:flex-row-reverse gap-y-6 lg:justify-between items-center">
                <img
                  src={phone_four}
                  alt="Phone mockup"
                  className="w-[650px]"
                />
                <RevealStaggeredInView motionClass="space-y-6">
                  <h1 className="text-neutral-500 text-sm">
                    Report your working hours
                  </h1>
                  <p className="text-neutral-700 text-2xl max-w-[700px]">
                    No need for tedious spreadsheets. Report your working hours
                    once you've marked the job as complete and get timestamps
                    and suggested values instead of having to keep track of time
                    while you're focused on the job.
                  </p>
                </RevealStaggeredInView>
              </div>
            </Section>
            <Section p="pb-36 gap-y-14">
              <div className="flex flex-col lg:flex-row gap-y-6 lg:justify-between items-center">
                <img
                  src={phone_five}
                  alt="Phone mockup"
                  className="w-[650px]"
                />
                <RevealStaggeredInView motionClass="space-y-6">
                  <h1 className="text-neutral-500 text-sm">
                    Add notes and comments for your co-workers
                  </h1>
                  <p className="text-neutral-700 text-2xl max-w-[700px]">
                    Add important information to the job that your co-workers
                    will be notified about. Also take part of important events
                    that always keeps you up to date on the progress of the job.
                  </p>
                </RevealStaggeredInView>
              </div>
            </Section>
            <Section p="pb-36 gap-y-14">
              <div className="flex flex-col lg:flex-row-reverse gap-y-6 lg:justify-between items-center">
                <img src={phone_six} alt="Phone mockup" className="w-[650px]" />
                <RevealStaggeredInView motionClass="space-y-6">
                  <h1 className="text-neutral-500 text-sm">
                    Handle payment from the app
                  </h1>
                  <p className="text-neutral-700 text-2xl max-w-[700px]">
                    Get an auto generated invoice based on you and your
                    co-workers reported hours. Presentable to the customer on
                    site. Send the invoice to the customer by a simple press of
                    a button.
                  </p>
                </RevealStaggeredInView>
              </div>
            </Section>
            <RevealEqualInView>
              <Section p="pb-36">
                <div className="flex flex-row justify-between">
                  <img
                    src={wp_appen_worker}
                    alt="Worker holding app"
                    className="h-auto w-full object-center"
                  />
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
