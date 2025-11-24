import React from "react";

/* DATA IMPORT */
import data from "./catalogue_data/WPAppen.json";

/* COMPONENTS */
import { CatalogueHero } from "../sections/Hero";
import { ContactMe } from "../sections/ContactMe";
import { ProjectDescription } from "../sections/ProjectDescription";
import { Colors, Icons, Mockups, Typography } from "../sections/Presentations";
import { Research } from "../sections/Research";

const WPAppen = () => {
  const { page } = data;
  const key = "wp_appen";

  return (
    <section id={key}>
      <CatalogueHero title={page.title} desc={page.overview} />
      <ProjectDescription
        desc={page.research}
        duration={page.duration}
        roles={page.roles}
      />
      <Research research={page.research} />
      <Typography type={key} />
      <Colors type={key} />
      <Icons type={key} />
      <Mockups type={key} />
      <ContactMe />
    </section>
  );
};

export default WPAppen;
