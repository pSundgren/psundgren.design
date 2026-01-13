import React from "react";
import { Link } from "react-router-dom";

/* Components */
import Section from "../../components/common/Section";
import {
  RevealStaggeredInView,
  RevealEqualInView,
} from "../../components/common/Reveal";

/* DATA IMPORT */
import alrik_connect_data from "../catalogue/catalogue_data/AlrikCockpit.json";
import alrik_drive_data from "../catalogue/catalogue_data/AlrikDrive.json";
import time_log_data from "../catalogue/catalogue_data/Timelog.json";
import provento_data from "../catalogue/catalogue_data/Provento.json";
import wp_tech_data from "../catalogue/catalogue_data/WPTech.json";
import wp_appen_data from "../catalogue/catalogue_data/WPAppen.json";
import stormer_data from "../catalogue/catalogue_data/Stormer.json";
//import twiceme_data from "../catalogue/catalogue_data/Twiceme.json";

/* Project image */
import placeholder_image from "../../assets/images/placeholder_img.jpg";

import time_logger_image from "../../assets/images/project_images/time_logger.jpeg";
import provento_image from "../../assets/images/project_images/provento/provento_imagery_2.jpeg";
import wp_tech_image from "../../assets/images/project_images/wp_tech.jpeg";
import twiceme_image from "../../assets/images/project_images/twiceme.jpg";
import stormer_image from "../../assets/images/project_images/stormer/stormer_mockup.jpeg";
import wp_appen_image from "../../assets/images/project_images/wp_appen.jpeg";
import alrik_drive_image from "../../assets/images/project_images/alrik-drive.jpeg";

/*
 * Main section component
 */

export const CreativeCatalogue = () => {
  const LIST = [
    alrik_connect_data.fragment,
    alrik_drive_data.fragment,
    wp_appen_data.fragment,
    provento_data.fragment,
    wp_tech_data.fragment,
    time_log_data.fragment,
    stormer_data.fragment,
  ];

  return (
    <Section p="pt-0 pb-48">
      <div className="flex flex-col gap-14">
        <RevealStaggeredInView motionClass="space-y-6">
          <h1 className="font-secondary text-gray-500">My works</h1>
          <h2 className="text-3xl text-gray-700">
            Take part of my{" "}
            <span className="font-secondary italic">creative catalogue</span>
          </h2>
        </RevealStaggeredInView>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-28 gap-y-14">
          {LIST.map((entry, index) => (
            <Link to={entry.link}>
              <ProjectCard
                id={entry.id}
                title={entry.title}
                desc={entry.desc}
                role={entry.role}
                index={index}
                styling={index % 2 === 0 ? "lg:mt-28" : null}
              />
            </Link>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export const CreativeCatalogueFrament = ({ projectList }) => {
  return (
    <Section p="pt-0 pb-48">
      <div className="flex flex-col gap-14">
        <RevealStaggeredInView motionClass="space-y-6">
          <h1 className="text-sm text-gray-500">Want to see more?</h1>
          <h2 className="text-3xl text-gray-700">
            Check out some of my{" "}
            <span className="font-secondary italic">other work</span>
          </h2>
        </RevealStaggeredInView>
        {projectList && (
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-28 gap-y-14">
            {projectList.map((entry, index) => (
              <Link to={entry.link}>
                <ProjectCard
                  id={entry.id}
                  title={entry.title}
                  desc={entry.desc}
                  role={entry.role}
                  index={index}
                />
              </Link>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
};

/*
 * This components reders a card for each projects that's added to the array LIST in this file
 */

const ProjectCard = ({ id, title, desc, role, styling, index }) => {
  const { innerWidth: width } = window;
  return (
    <li
      className={`${
        width >= 768 ? styling : "mt-0"
      } transition-all duration-500 ease-out cursor-pointer`}
    >
      <RevealEqualInView>
        <div className="flex flex-col space-y-6 group">
          <ProjectImage id={id} role={role} index={index} />
          <div className="flex flex-col space-y-3">
            <div className="flex flex-row space-x-6">
              <div className="flex flex-row items-center space-x-0 mt-6">
                <h1 className="inline-block text-2xl text-neutral-700">
                  {title}
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

const ProjectImage = ({ id, role, index }) => {
  const img_container = `relative overflow-hidden shadow-md transition-all duration-500 ease-out rounded-xl ${
    index % 2 === 0 ? "rotate-1" : "-rotate-1"
  } group-hover:rotate-0`;
  const img_styling =
    "aspect-auto object-cover object-left-top transition-all duration-500 ease-out lg:group-hover:scale-105";
  switch (id) {
    case "alrik-drive":
      return (
        <div className={img_container}>
          <img
            src={alrik_drive_image ? alrik_drive_image : placeholder_image}
            alt="Tech angency rebranding project"
            className={alrik_drive_image ? img_styling : null}
          />
          <h1 className="absolute rounded-md bottom-4 left-4 py-2.5 px-2 text-xs bg-neutral-700/20 text-neutral-50">
            {role}
          </h1>
        </div>
      );
    case "provento":
      return (
        <div className={img_container}>
          <img
            src={provento_image ? provento_image : placeholder_image}
            alt="Tech angency rebranding project"
            className={provento_image ? img_styling : null}
          />
          <h1 className="absolute rounded-md bottom-4 left-4 py-2.5 px-2 text-xs bg-neutral-700/20 text-neutral-50">
            {role}
          </h1>
        </div>
      );
    case "wp_appen":
      return (
        <div className={img_container}>
          <img
            src={wp_appen_image ? wp_appen_image : placeholder_image}
            alt="Tech angency rebranding project"
            className={wp_appen_image ? img_styling : null}
          />
          <h1 className="absolute rounded-md bottom-4 left-4 py-2.5 px-2 text-xs bg-neutral-700/20 text-neutral-50">
            {role}
          </h1>
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
          <h1 className="absolute rounded-md bottom-4 left-4 py-2.5 px-2 text-xs bg-neutral-700/20 text-neutral-50">
            {role}
          </h1>
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
          <h1 className="absolute rounded-md bottom-4 left-4 py-2.5 px-2 text-xs bg-neutral-700/20 text-neutral-50">
            {role}
          </h1>
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
          <h1 className="absolute rounded-md bottom-4 left-4 py-2.5 px-2 text-xs bg-neutral-700/20 text-neutral-50">
            {role}
          </h1>
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
          <h1 className="absolute rounded-md bottom-4 left-4 py-2.5 px-2 text-xs bg-neutral-700/20 text-neutral-50">
            {role}
          </h1>
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
