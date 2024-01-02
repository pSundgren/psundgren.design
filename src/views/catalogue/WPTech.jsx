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
  return (
    <section id="wp_tech">
      <CatalogueHero title={page.title} desc={page.desc} />
      <ProjectDescription
        desc={page.overview}
        duration={page.duration}
        roles={page.roles}
      />
      <LogoPresentation type="wp_tech" />
      <TypographyPresentation type="wp_tech" />
      <ColorPresentation type="wp_tech" />
      <MockupsPresentation type="wp_tech" />
      <ContactMe />
    </section>
  );
};

export default WPTech;
