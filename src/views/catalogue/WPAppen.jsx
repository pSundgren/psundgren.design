import React from "react";

/* DATA IMPORT */
import data from "./catalogue_data/WPAppen.json";

/* COMPONENTS */
import { CatalogueHero } from "../sections/Hero";
import { ContactMe } from "../sections/ContactMe";
import { ProjectDescription } from "../sections/ProjectDescription";
import {
  LogoPresentation,
  ColorPresentation,
  MockupsPresentation,
} from "../sections/Presentations";

const WPAppen = ({ changeCursorVariant }) => {
  const { page } = data;
  return (
    <section id="wp_appen">
      <CatalogueHero title={page.title} desc={page.desc} />
      <ProjectDescription
        desc={page.overview}
        duration={page.duration}
        roles={page.roles}
      />
      <LogoPresentation type="wp_appen" />
      <ColorPresentation type="wp_appen" />
      <MockupsPresentation type="wp_appen" />
      <ContactMe changeCursorVariant={changeCursorVariant} />
    </section>
  );
};

export default WPAppen;
