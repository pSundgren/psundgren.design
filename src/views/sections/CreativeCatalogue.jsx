import React from "react";
import { Link } from "react-router-dom";

/* Components */
import Section from "../../components/common/Section";
import {
  RevealStaggeredInView,
  RevealEqualInView,
} from "../../components/common/Reveal";

/* Project image */
import placeholder_image from "../../assets/images/placeholder_img.jpg";
import wp_tech_image from "../../assets/images/project_images/wp_tech.jpeg";
import time_logger_image from "../../assets/images/project_images/time_logger.jpeg";
import twiceme_image from "../../assets/images/project_images/twiceme.jpg";
import stormer_image from "../../assets/images/project_images/stormer.jpg";
import wp_appen_image from "../../assets/images/project_images/wp_appen.jpg";

export const PROJECT_LIST = [
  {
    id: "wp_appen",
    heading: "WP Appen",
    subHeading: "internal service management app for field workers",
    desc: "Field workers use the app to accept, confirm, conduct, and complete service requests such as home cleaning or moving services. The app supports everything from auditing information to sending invoices to customers to allow the field workers to go from a problematic to a streamlined process.",
    to: "/wp_appen",
    styling: "mt-28",
  },
  {
    id: "wp_tech",
    heading: "WP Tech",
    subHeading: "a revisit of a tech agency's visual identity",
    desc: "A complete rebranding of a full-solution tech agency. The project covered setting up a visual identity for the agency, logo and graphical design, UX/UI design for a new website.",
    to: "/wp_tech",
    styling: "mt-0",
  },
  {
    id: "twiceme",
    heading: "Twiceme Technology",
    subHeading: "shaping a brands visual identity and strategy for the future",
    desc: "Diving deep into stakeholders demands and user behaviour, a strategy for a personal safety company was created to increase user engagement and pave the way for the companys' product development.",
    to: "/twiceme",
    styling: "mt-28",
  },
  {
    id: "time_log",
    heading: "Time loggin app",
    subHeading:
      "efficient time logging and absence management for seamless workplace administration",
    desc: "With capability gaps with external products, a company decided to develop the product themselves. An app for employees to log and manage their work hours, sick leave, and vacation.",
    to: "/time_log",
    styling: "mt-0",
  },
  {
    id: "stormer",
    heading: "Stormer",
    subHeading: "an AI-powered tool for aspiring designers and developers",
    desc: "A website that generates lifelike app concept, echoing the dynamics of authentic projects. To mirror real-world client demands and to allow aspiring designers and developers to gain practical insight of their liking.",
    to: "/stormer",
    styling: "mt-28",
  },
];

/*
 * Main section component
 */

const CreativeCatalogue = ({ changeCursorVariant }) => {
  return (
    <Section p="pt-0 pb-48">
      <div className="flex flex-col gap-14">
        <RevealStaggeredInView motionClass="space-y-3">
          <h1 className="text-sm text-gray-400">My works</h1>
          <h2 className="text-3xl text-gray-700">
            Take part of my{" "}
            <span className="font-secondary italic">creative catalogue</span>
          </h2>
        </RevealStaggeredInView>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-28 gap-y-14">
          {PROJECT_LIST.map((entry) => (
            <Link to={entry.to}>
              <ProjectCard
                id={entry.id}
                heading={entry.heading}
                subHeading={entry.subHeading}
                desc={entry.desc}
                to={entry.to}
                styling={entry.styling}
                changeCursorVariant={changeCursorVariant}
              />
            </Link>
          ))}
        </ul>
      </div>
    </Section>
  );
};

/*
 * This components reders a card for each projects that's added to the array PROJECT_LIST in this file
 */

const ProjectCard = ({
  id,
  heading,
  subHeading,
  desc,
  to,
  styling,
  changeCursorVariant,
}) => {
  const { innerWidth: width } = window;
  return (
    <li
      className={`${
        width >= 768 ? styling : "mt-0"
      } transition-all duration-500 ease-out cursor-pointer`}
    >
      <RevealEqualInView>
        <div
          className="flex flex-col space-y-6 group"
          onMouseEnter={() => changeCursorVariant("hover")}
          onMouseLeave={() => changeCursorVariant("default")}
        >
          <ProjectImage id={id} />
          <div className="flex flex-col space-y-3">
            <div className="flex flex-row space-x-6">
              <div className="flex flex-row items-center space-x-0 mt-6 font-primary">
                <h1 className="inline-block text-2xl text-neutral-700">
                  {`${heading} — ${subHeading}`}
                </h1>
              </div>
            </div>
            <p className="text-gray-600 lg:text-gray-400 lg:group-hover:text-gray-700 transition-all duration-500 ease-out">
              {desc}
            </p>
          </div>
        </div>
      </RevealEqualInView>
    </li>
  );
};

/*
 * This components reders out the images for each project in the creative cataloge
 */

const ProjectImage = ({ id }) => {
  const img_container =
    "relative overflow-hidden shadow-md transition-all duration-500 ease-out";
  const img_styling =
    "aspect-auto object-cover object-left-top transition-all duration-500 ease-out lg:group-hover:scale-105";
  switch (id) {
    case "wp_appen":
      return (
        <div className={img_container}>
          <img
            src={wp_appen_image ? wp_appen_image : placeholder_image}
            alt="Tech angency rebranding project"
            className={wp_appen_image ? img_styling : null}
          />
        </div>
      );
    case "wp_tech":
      return (
        <div className={img_container}>
          <img
            src={wp_tech_image ? wp_tech_image : placeholder_image}
            alt="Tech angency rebranding project"
            className={wp_tech_image ? img_styling : null}
          />
        </div>
      );
    case "time_log":
      return (
        <div className={img_container}>
          <img
            src={time_logger_image ? time_logger_image : placeholder_image}
            alt="Mockup for time logging app"
            className={time_logger_image ? img_styling : null}
          />
        </div>
      );
    case "stormer":
      return (
        <div className={img_container}>
          <img
            src={stormer_image ? stormer_image : placeholder_image}
            alt="Mockup for AI-powered idea generator"
            className={stormer_image ? img_styling : null}
          />
        </div>
      );
    case "twiceme":
      return (
        <div className={img_container}>
          <img
            src={twiceme_image ? twiceme_image : placeholder_image}
            alt="Company logo for company rebranding project"
            className={twiceme_image ? img_styling : null}
          />
        </div>
      );
    default:
      return (
        <div className={img_container}>
          <img
            src={placeholder_image}
            alt="Placeholder"
            className={img_styling}
          />
        </div>
      );
  }
};

export default CreativeCatalogue;
