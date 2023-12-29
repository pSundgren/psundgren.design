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
  MockupsPresentation,
} from "../sections/Presentations";

const Stormer = ({ changeCursorVariant }) => {
  const { page } = data;
  return (
    <section id="stormer">
      <CatalogueHero title={page.title} desc={page.desc} />
      <ProjectDescription
        desc={page.overview}
        duration={page.duration}
        roles={page.roles}
      />
      <LogoPresentation type="stormer" />
      <ColorPresentation type="stormer" />
      <MockupsPresentation type="stormer" />
      <ContactMe changeCursorVariant={changeCursorVariant} />
    </section>
  );
};

export default Stormer;
