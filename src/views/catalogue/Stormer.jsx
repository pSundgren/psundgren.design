import React from "react";

/* DATA IMPORT */
import data from "./catalogue_data/Stormer.json";

/* COMPONENTS */
import { CatalogueHero } from "../sections/Hero";
import { ContactMe } from "../sections/ContactMe";
import { ProjectDescription } from "../sections/ProjectDescription";
import {
  LogoPresentation,
  ColorPresentation,
  Mockups,
  TypographyPresentation,
} from "../sections/Presentations";

const Stormer = () => {
  const { page } = data;
  const key = "stormer";

  return (
    <section id={key}>
      <CatalogueHero title={page.title} desc={page.desc} />
      <ProjectDescription
        desc={page.overview}
        duration={page.duration}
        roles={page.roles}
      />
      <LogoPresentation type={key} />
      <TypographyPresentation type={key} />
      <ColorPresentation type={key} />
      <Mockups type={key} />
      <ContactMe />
    </section>
  );
};

export default Stormer;
