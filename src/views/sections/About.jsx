import React from "react";
import Section from "../../components/common/Section";

import placeholder_img from "../../assets/images/placeholder_img.jpg";
import img_sel from "../../assets/images/story_images/img_sel.jpg";
import {
  RevealStaggeredInView,
  RevealStaggeredTextInView,
} from "../../components/common/Reveal";
const img_ua = null;
const img_sth = null;

const STORIES = [
  {
    id: "1",
    heading: "UÅ.",
    subHeading: "The start of my studies",
    desc: "Blablalba BlablalbaBlablalba BlablalbaBlablalbaBlablalbaBlablalba Blablalba BlablalbaBlablalba Blablalba.",
  },
  {
    id: "2",
    heading: "SEL.",
    subHeading: "My stay in Seoul",
    desc: "Blablalba",
  },
  {
    id: "3",
    heading: "STH.",
    subHeading: "The present",
    desc: "Blablalba",
  },
];

const About = ({ changeCursorVariant }) => {
  return (
    <Section p="pt-0 pb-64">
      <div className="flex flex-col gap-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-14">
          <RevealStaggeredInView motionClass={"text-3xl space-y-3"}>
            <h2 className="text-sm text-gray-500">Hello there,</h2>
            <p className="text-3xl">
              I'm <span>Pontus Sundgren</span>. A UX/UI designer and front-end
              developer, currently working at{" "}
              <span>
                <a
                  href="https://www.wptech.se"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#648C8B] transition-all ease-out duration-500"
                  onMouseEnter={() => changeCursorVariant("hover")}
                  onMouseLeave={() => changeCursorVariant("default")}
                >
                  WP Tech
                </a>
              </span>{" "}
              in Stockholm. Responsible for leading the design process and
              visual development of the company, and support the front-end
              development on each project of the company.
            </p>
          </RevealStaggeredInView>
        </div>
        <div>
          <div className="h-6 w-6 bg-blue-500" />
        </div>
      </div>
    </Section>
  );
};

const StoryCard = ({ id, heading, subHeading, desc }) => {
  return (
    <div className="flex flex-col gap-x-14 w-full">
      <StoryImage id={id} />
      <h1 className="font-secondary text-6xl self-end -translate-y-6 -mb-3">
        {heading}
      </h1>
      <p className="text-xl">{`${subHeading} - ${desc}`}</p>
    </div>
  );
};

/*
 * This components reders out the images for each project in the creative cataloge
 */

const StoryImage = ({ id }) => {
  const img_container =
    "relative overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-500 ease-out";
  const img_styling =
    "aspect-auto object-cover object-left-top transition-all duration-500 ease-out lg:group-hover:scale-105";
  switch (id) {
    case "1":
      return (
        <div className={img_container}>
          <img
            src={img_sel ? img_sel : placeholder_img}
            alt="Time logging app project"
            className={img_sel ? img_styling : null}
          />
        </div>
      );
    case "2":
      return (
        <div className={img_container}>
          <img
            src={img_ua ? img_ua : placeholder_img}
            alt="Tech angency rebranding project"
            className={img_ua ? img_styling : null}
          />
        </div>
      );
    case "3":
      return (
        <div className={img_container}>
          <img
            src={img_sth ? img_sth : placeholder_img}
            alt="App brainstorming tool project"
            className={img_sth ? img_styling : null}
          />
        </div>
      );
    default:
      return (
        <div className={img_container}>
          <img
            src={placeholder_img}
            alt="Could not find presentation file"
            className={img_styling}
          />
        </div>
      );
  }
};

export default About;
