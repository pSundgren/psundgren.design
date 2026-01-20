import React from "react";

/* DATA IMPORT */
import data from "./catalogue_data/AlrikDrive.json";
import wp_appen from "../catalogue/catalogue_data/WPAppen.json";
import alrik_cockpit from "../catalogue/catalogue_data/AlrikCockpit.json";

/* COMPONENTS */
import { CatalogueHero } from "../sections/Hero";
import { ProjectDescription } from "../sections/ProjectDescription";
import { Colors, Mockups, Typography } from "../sections/Presentations";
import { CreativeCatalogueFrament } from "../sections/CreativeCatalogue";

const AlrikDrive = () => {
  const { page } = data;
  const key = "alrik-drive";

  const arr = [wp_appen.fragment, alrik_cockpit.fragment];

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
      <Typography type={key} />
      <Colors type={key} />
      <Mockups type={key} />
      <CreativeCatalogueFrament projectList={arr} />
    </section>
  );
};

export default AlrikDrive;
