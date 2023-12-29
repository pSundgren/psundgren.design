import React from "react";

/* DATA IMPORT */
import data from "./catalogue_data/WPAppen.json";

/* COMPONENTS */
import { CatalogueHero } from "../sections/Hero";
import { ContactMe } from "../sections/ContactMe";
import { ProjectDescription } from "../sections/ProjectDescription";
import {
  ColorPresentation,
  MockupsPresentation,
} from "../sections/Presentations";
import { Insights } from "../sections/Insights";

const WPAppen = () => {
  const { page } = data;
  return (
    <section id="wp_appen">
      <CatalogueHero title={page.title} desc={page.desc} />
      <ProjectDescription
        desc={page.overview}
        duration={page.duration}
        roles={page.roles}
      />
      <Insights insight_arr={page.insights} />
      <ColorPresentation type="wp_appen" />
      <MockupsPresentation type="wp_appen" />
      <ContactMe />
    </section>
  );
};

export default WPAppen;
