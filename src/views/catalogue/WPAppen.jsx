import React from "react";

/* DATA IMPORT */
import data from "./catalogue_data/WPAppen.json";
import alrik_drive_data from "../catalogue/catalogue_data/AlrikDrive.json";
import provento_data from "../catalogue/catalogue_data/Provento.json";

/* COMPONENTS */
import { CatalogueHero } from "../sections/Hero";
import { CreativeCatalogueFrament } from "../sections/CreativeCatalogue";
import { ProjectDescription } from "../sections/ProjectDescription";
import { Mockups } from "../sections/Presentations";

const WPAppen = () => {
  const { page } = data;
  const key = "wp_appen";

  const arr = [alrik_drive_data.fragment, provento_data.fragment];

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

export default WPAppen;
