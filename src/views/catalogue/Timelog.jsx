import React from "react";

/* DATA IMPORT */
import data from "./catalogue_data/Timelog.json";
import alrik_drive_data from "../catalogue/catalogue_data/AlrikDrive.json";
import alrik_cockpit from "../catalogue/catalogue_data/AlrikCockpit.json";

/* COMPONENTS */
import { CatalogueHero } from "../sections/Hero";
import { CreativeCatalogueFrament } from "../sections/CreativeCatalogue";
import { ProjectDescription } from "../sections/ProjectDescription";
import { Mockups } from "../sections/Presentations";

const Timelog = () => {
  const { page } = data;
  const key = "time_log";

  const arr = [alrik_drive_data.fragment, alrik_cockpit.fragment];

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

export default Timelog;
