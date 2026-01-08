import React from "react";

/* DATA IMPORT */
import data from "./catalogue_data/Timelog.json";
import provento_data from "../catalogue/catalogue_data/Provento.json";
import wp_tech_data from "../catalogue/catalogue_data/WPTech.json";

/* COMPONENTS */
import { CatalogueHero } from "../sections/Hero";
import { CreativeCatalogueFrament } from "../sections/CreativeCatalogue";
import { ProjectDescription } from "../sections/ProjectDescription";
import { Colors, Icons, Mockups, Typography } from "../sections/Presentations";

const Timelog = () => {
  const { page } = data;
  const key = "time_log";

  const arr = [provento_data.fragment, wp_tech_data.fragment];

  console.log(arr);

  return (
    <section id={key}>
      <CatalogueHero title={page.title} desc={page.desc} roles={page.roles} />
      <ProjectDescription
        desc={page.overview}
        duration={page.duration}
        roles={page.roles}
      />
      <Colors type={key} />
      <Typography type={key} />
      <Icons type={key} />
      <Mockups type={key} />
      <CreativeCatalogueFrament projectList={arr} />
    </section>
  );
};

export default Timelog;
