import React from "react";

/* Components */
import Section from "../../components/common/Section";

/* Project image */
import placeholder_project_image from "../../assets/images/project_images/placeholder_project_image.jpg";
import wp_tech_image from "../../assets/images/project_images/wp_tech.jpeg";
import time_logger_image from "../../assets/images/project_images/time_logger.jpeg";

//TODO: Fix these images
const stormer_image = null;
const twiceme_image = null;

const PROJECT_LIST = [
  {
    id: "2",
    heading: "A fresh look",
    subHeading: "Tech agency complete rebranding",
    desc: "A complete rebranding of a full-solution tech agency. The project covered setting up a visual identity for the agency, logo and graphical design, UX/UI design for a new website.",
    to: "/",
    styling: "mt-28",
  },
  {
    id: "1",
    heading: "Time logger",
    subHeading:
      "An app for to allow employees to log and manage your work hours",
    desc: "With capability gaps with external products, a company decided to develop the product themselves. An app for employees to log and manage their work hours, sick leave, and vacation.",
    to: "/",
    styling: "mt-0",
  },
  {
    id: "4",
    heading: "Twiceme Technology",
    subHeading: "Shaping a brand and strategy for the future",
    desc: "Diving deep into stakeholders demands and user behaviour, a strategy a personal safety company was created to ",
    to: "/",
    styling: "mt-28",
  },
  {
    id: "3",
    heading: "Stormer",
    subHeading: "A brainstorming tool for aspiring designers and developers",
    desc: "A website that generates lifelike app concept, echoing the dynamics of authentic projects. To mirror real-world client demands and to allow aspiring designers and developers to gain practical insight of their liking.",
    to: "/",
    styling: "mt-0",
  },
];

/*
 * Main section component
 */

const CreativeCatalogue = () => {
  return (
    <Section p="pt-0 pb-36">
      <div className="flex flex-col gap-14">
        <div>
          <h2 className="text-sm text-gray-400">My works</h2>
          <h1 className="text-3xl text-gray-900">
            <span className="font-primary">Take part of my </span>
            <span className="font-secondary italic">creative catalogue</span>
          </h1>
        </div>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-14">
          {PROJECT_LIST.map((entry) => (
            <div key={entry.heading}>
              <ProjectCard
                id={entry.id}
                heading={entry.heading}
                subHeading={entry.subHeading}
                desc={entry.desc}
                to={entry.to}
                styling={entry.styling}
              />
            </div>
          ))}
        </ul>
      </div>
    </Section>
  );
};

/*
 * This components reders a card for each projects that's added to the array PROJECT_LIST in this file
 */

const ProjectCard = ({ id, heading, subHeading, desc, to, styling }) => {
  const { innerWidth: width } = window;
  return (
    <li
      className={`${
        width >= 768 ? styling : "mt-0"
      } transition-all duration-500 ease-out cursor-pointer`}
    >
      <div className="flex flex-col space-y-6 group">
        <ProjectImage id={id} />
        <div className="flex flex-col space-y-3">
          <div className="flex flex-row space-x-6">
            <div className="flex flex-row items-center space-x-3 mt-6 text-xl font-primary">
              <h1 className="text-xl font-primary">{`${heading} - ${subHeading}`}</h1>
            </div>
          </div>
          <p className="text-gray-600 lg:text-gray-300 group-hover:text-gray-600 transition-all duration-500 ease-out">
            {desc}
          </p>
        </div>
      </div>
    </li>
  );
};

/*
 * This components reders out the images for each project in the creative cataloge
 */

const ProjectImage = ({ id }) => {
  const img_container = "relative overflow-hidden shadow-md";
  const img_styling =
    "aspect-auto h-full w-full object-cover object-left-top transition-all duration-500 ease-out group-hover:scale-105";
  switch (id) {
    case "1":
      return (
        <div className={img_container}>
          <img
            src={
              time_logger_image ? time_logger_image : placeholder_project_image
            }
            alt="Time logging app project"
            className={time_logger_image ? img_styling : null}
          />
        </div>
      );
    case "2":
      return (
        <div className={img_container}>
          <img
            src={wp_tech_image ? wp_tech_image : placeholder_project_image}
            alt="Tech angency rebranding project"
            className={wp_tech_image ? img_styling : null}
          />
        </div>
      );
    case "3":
      return (
        <div className={img_container}>
          <img
            src={stormer_image ? stormer_image : placeholder_project_image}
            alt="App brainstorming tool project"
            className={stormer_image ? img_styling : null}
          />
        </div>
      );
    case "4":
      return (
        <div className={img_container}>
          <img
            src={twiceme_image ? twiceme_image : placeholder_project_image}
            alt="Tech angency rebranding project"
            className={twiceme_image ? img_styling : null}
          />
        </div>
      );
    default:
      return (
        <div className={img_container}>
          <img
            src={placeholder_project_image}
            alt="Could not find presentation file"
            className={img_styling}
          />
        </div>
      );
  }
};

export default CreativeCatalogue;
