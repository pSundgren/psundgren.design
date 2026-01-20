import React from "react";

/* DATA IMPORT */
import data from "./catalogue_data/AlrikCockpit.json";
import alrik_drive_data from "../catalogue/catalogue_data/AlrikDrive.json";
import wp_appen from "../catalogue/catalogue_data/WPAppen.json";

/* COMPONENTS */
import { CatalogueHero } from "../sections/Hero";
import { ProjectDescription } from "../sections/ProjectDescription";
import { Mockups } from "../sections/Presentations";
import { CreativeCatalogueFrament } from "../sections/CreativeCatalogue";

const AlrikCockpit = () => {
  const { page } = data;
  const key = "alrik-cockpit";

  const arr = [wp_appen.fragment, alrik_drive_data.fragment];

  return (
    <section id={key}>
      <CatalogueHero title={page.title} desc={page.desc} roles={page.roles} />
      <ProjectDescription
        desc={page.overview}
        duration={page.duration}
        roles={page.roles}
        research={page.research}
        findings={page.findings}
        result={page.result}
      />
      <Mockups type={key} />
      <CreativeCatalogueFrament projectList={arr} />
    </section>
  );
};

export default AlrikCockpit;
