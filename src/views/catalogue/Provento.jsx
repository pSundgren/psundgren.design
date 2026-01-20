import React from "react";

/* DATA IMPORT */
import data from "./catalogue_data/Provento.json";
import alrik_drive_data from "../catalogue/catalogue_data/AlrikDrive.json";
import alrik_cockpit from "../catalogue/catalogue_data/AlrikCockpit.json";

/* COMPONENTS */
import { CatalogueHero } from "../sections/Hero";
import { ProjectDescription } from "../sections/ProjectDescription";
import { Logo, Colors, Mockups, Typography } from "../sections/Presentations";
import { CreativeCatalogueFrament } from "../sections/CreativeCatalogue";

const Provento = () => {
  const { page } = data;
  const key = "provento";

  const arr = [alrik_drive_data.fragment, alrik_cockpit.fragment];

  return (
    <section id={key}>
      <CatalogueHero
        title={page.title}
        desc={page.overview}
        roles={page.roles}
      />
      <ProjectDescription
        desc={page.overview}
        duration={page.duration}
        roles={page.roles}
        research={page.research}
        findings={page.findings}
        result={page.result}
        hideThings={true}
      />
      <Logo type={key} />
      <Typography type={key} />
      <Colors type={key} />
      <Mockups type={key} />
      <CreativeCatalogueFrament projectList={arr} />
    </section>
  );
};

export default Provento;
