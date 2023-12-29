import React from "react";

/* DATA IMPORT */
import data from "./catalogue_data/Twiceme.json";

/* COMPONENTS */
import { CatalogueHero } from "../sections/Hero";
import { ContactMe } from "../sections/ContactMe";
import { ProjectDescription } from "../sections/ProjectDescription";
import {
  LogoPresentation,
  ColorPresentation,
  MockupsPresentation,
} from "../sections/Presentations";

const Twiceme = ({ changeCursorVariant }) => {
  const { page } = data;
  return (
    <section id="twiceme">
      <CatalogueHero title={page.title} desc={page.desc} />
      <ProjectDescription
        desc={page.overview}
        duration={page.duration}
        roles={page.roles}
      />
      <LogoPresentation type="twiceme" />
      <ColorPresentation type="twiceme" />
      <MockupsPresentation type="twiceme" />
      <ContactMe changeCursorVariant={changeCursorVariant} />
    </section>
  );
};

export default Twiceme;
