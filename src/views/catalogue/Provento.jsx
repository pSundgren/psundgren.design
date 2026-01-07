import React from "react";

/* DATA IMPORT */
import data from "./catalogue_data/Provento.json";

/* COMPONENTS */
import { CatalogueHero } from "../sections/Hero";
import { ContactMe } from "../sections/ContactMe";
import { ProjectDescription } from "../sections/ProjectDescription";
import { Logo, Colors, Mockups, Typography } from "../sections/Presentations";

const Provento = () => {
  const { page } = data;
  const key = "provento";

  return (
    <section id={key}>
      <CatalogueHero
        title={page.title}
        desc={page.overview}
        roles={page.roles}
      />
      <ProjectDescription
        desc={page.research}
        duration={page.duration}
        roles={page.roles}
      />
      <Logo type={key} />
      <Typography type={key} />
      <Colors type={key} />
      <Mockups type={key} />
      <ContactMe />
    </section>
  );
};

export default Provento;
