import React from "react";

/* DATA IMPORT */
import data from "./catalogue_data/WPTech.json";

/* COMPONENTS */
import { CatalogueHero } from "../sections/Hero";
import { ContactMe } from "../sections/ContactMe";
import { ProjectDescription } from "../sections/ProjectDescription";
import {
  LogoPresentation,
  ColorPresentation,
  MockupsPresentation,
  TypographyPresentation,
} from "../sections/Presentations";

const WPTech = () => {
  const { page } = data;
  const key = "wp_tech";

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
      <MockupsPresentation type={key} />
      <ContactMe />
    </section>
  );
};

export default WPTech;
