import React from "react";
import { CatalogueHero } from "../sections/Hero";

/* DATA IMPORT */
import data from "./catalogue_data/WPTech.json";
import { ProjectDescription } from "../sections/ProjectDescription";
import { LogoPresentation } from "../sections/LogoPresentation";

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
    </section>
  );
};

export default WPTech;
