import React from "react";

/* Components */
import Section from "../../components/common/Section";

/* Project image */
import placeholder_img from "../../assets/images/project_images/placeholder_img.jpg";
import wp_tech_image from "../../assets/images/project_images/wp_tech.jpeg";

//TODO: Fix these images
const time_logger_image = null;
const stormer_image = null;
const twiceme_image = null;

const PROJECT_LIST = [
  {
    id: "2",
    title: "A fresh look - tech agency complete rebranding",
    desc: "A complete rebranding of a full-solution tech agency. The project covered setting up a visual identity for the agency, logo & graphical design, UX/UI design for a new website.",
    to: "/",
    styling: "mt-28",
  },
  {
    id: "1",
    title: "Time logging app - log & manage your work hours",
    desc: "With capability gaps with external products, a company decided to develop the product themselves. An app for employees to log and manage their work hours, sick leave, & vacation.",
    to: "/",
    styling: "mt-0",
  },
  {
    id: "4",
    title: "Twiceme Technology - transforming brand and strategy for tomorrow ",
    desc: "Diving deep into stakeholders demands & user behaviour, a strategy a personal safety company was created to ",
    to: "/",
    styling: "mt-28",
  },
  {
    id: "3",
    title: "Stormer - a brainstorming tool for aspiring designer & developers",
    desc: "A website that generates lifelike app concept, echoing the dynamics of authentic projects. To mirror real-world client demands & to allow aspiring designers & developers to gain practical insight of their liking.",
    to: "/",
    styling: "mt-0",
  },
];

/*
 * Main section component
 */

const CreativeCatalogue = () => {
  return (
    <Section p="pt-8 pb-36">
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
            <div key={entry.title}>
              <ProjectCard
                id={entry.id}
                title={entry.title}
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

const ProjectCard = ({ id, title, desc, to, styling }) => {
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
          <h1 className="text-xl font-primary mt-6">{title}</h1>
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
  const img_container = "relative overflow-hidden";
  const img_styling =
    "aspect-auto h-full w-full object-cover object-left-top transition-all duration-500 ease-out group-hover:scale-105";
  switch (id) {
    case "1":
      return (
        <div className={img_container}>
          <img
            src={time_logger_image ? time_logger_image : placeholder_img}
            alt="Time logging app project"
            className={img_styling}
          />
        </div>
      );
    case "2":
      return (
        <div className={img_container}>
          <img
            src={wp_tech_image ? wp_tech_image : placeholder_img}
            alt="Tech angency rebranding project"
            className={img_styling}
          />
        </div>
      );
    case "3":
      return (
        <div className={img_container}>
          <img
            src={stormer_image ? stormer_image : placeholder_img}
            alt="App brainstorming tool project"
            className={img_styling}
          />
        </div>
      );
    case "4":
      return (
        <div className={img_container}>
          <img
            src={twiceme_image ? twiceme_image : placeholder_img}
            alt="Tech angency rebranding project"
            className={img_styling}
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

export default CreativeCatalogue;
