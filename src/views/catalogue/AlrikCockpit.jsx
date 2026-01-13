import React from "react";

/* DATA IMPORT */
import data from "./catalogue_data/AlrikCockpit.json";
import alrik_drive_data from "../catalogue/catalogue_data/AlrikDrive.json";
import wp_appen from "../catalogue/catalogue_data/WPAppen.json";

/* COMPONENTS */
import { CatalogueHero } from "../sections/Hero";
import { ContactMe } from "../sections/ContactMe";
import { ProjectDescription } from "../sections/ProjectDescription";
import { Logo, Colors, Mockups, Typography } from "../sections/Presentations";
import Section from "../../components/common/Section";
import { CreativeCatalogueFrament } from "../sections/CreativeCatalogue";

const AlrikCockpit = () => {
  const { page } = data;
  const key = "alrik-drive";

  const arr = [wp_appen.fragment, alrik_drive_data.fragment];

  return (
    <section id={key}>
      <CatalogueHero
        title={page.title}
        desc={page.overview}
        roles={page.roles}
      />
      <Section p="pt-0 pb-48">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col space-y-4">
            <h1 className="text-sm text-gray-500">My works</h1>
            <h2 className="text-3xl text-gray-700">
              Take part of my{" "}
              <span className="font-secondary italic">creative catalogue</span>
            </h2>
          </div>
        </div>
      </Section>
      <CreativeCatalogueFrament projectList={arr} />
    </section>
  );
};

export default AlrikCockpit;
